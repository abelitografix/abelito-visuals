import { useEffect, useMemo, useState } from 'react';
import { categories, projects } from '../data/projects.js';
import { site } from '../data/site.js';
import ProjectCard from './ProjectCard.jsx';
import ProjectDialog from './ProjectDialog.jsx';
import Reveal from './Reveal.jsx';

// Some embedded previews block address-bar changes, so never let that break the panel.
const hist = (method, ...args) => {
  try {
    window.history[method](...args);
  } catch {
    /* ignore */
  }
};

// Reads "#work/some-project" from the address bar.
const slugFromHash = () => {
  const match = window.location.hash.match(/^#work\/([\w-]+)/);
  return match && projects.some((p) => p.slug === match[1]) ? match[1] : null;
};

export default function Work({ onStartProject }) {
  const [filter, setFilter] = useState('all');
  const [activeSlug, setActiveSlug] = useState(slugFromHash);

  const visible = useMemo(
    () => (filter === 'all' ? projects : projects.filter((p) => p.category === filter)),
    [filter],
  );

  const activeProject = projects.find((p) => p.slug === activeSlug) || null;
  // The next/previous buttons move through the filtered list when possible.
  const list = visible.some((p) => p.slug === activeSlug) ? visible : projects;

  // Keep the panel in sync with the browser's Back/Forward buttons.
  useEffect(() => {
    const onPop = () => setActiveSlug(slugFromHash());
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  // If someone opens a shared link like  yoursite.com/#work/some-project
  // scroll to the portfolio behind the panel.
  useEffect(() => {
    if (slugFromHash()) document.getElementById('work')?.scrollIntoView();
  }, []);

  const open = (slug) => {
    hist('pushState', { dialog: true }, '', `#work/${slug}`);
    setActiveSlug(slug);
  };

  const close = () => {
    if (window.history.state?.dialog) {
      hist('back'); // the popstate listener above closes the panel
    } else {
      hist('replaceState', null, '', '#work');
      setActiveSlug(null);
    }
  };

  const step = (direction) => {
    const i = list.findIndex((p) => p.slug === activeSlug);
    const next = list[(i + direction + list.length) % list.length];
    hist('replaceState', window.history.state, '', `#work/${next.slug}`);
    setActiveSlug(next.slug);
  };

  const startFromPanel = (categoryId) => {
    const category = categories.find((c) => c.id === categoryId);
    hist('replaceState', null, '', '#contact');
    setActiveSlug(null);
    window.setTimeout(() => onStartProject(category?.inquiry || ''), 0);
  };

  const hasPlaceholders = projects.some((p) => p.placeholder);
  const activeLabel = categories.find((c) => c.id === filter)?.label;

  return (
    <section className="work section" id="work" aria-labelledby="work-title">
      <div className="container">
        <Reveal className="section-head">
          <div>
            <p className="eyebrow">{site.work.eyebrow}</p>
            <h2 id="work-title" className="section-title">
              {site.work.title}
              <span className="dot">.</span>
            </h2>
          </div>
          <p className="section-head__intro">{site.work.intro}</p>
        </Reveal>

        <div className="filters" role="group" aria-label="Filter projects by category">
          <button type="button" className="chip" aria-pressed={filter === 'all'} onClick={() => setFilter('all')}>
            All
          </button>
          {categories.map((c) => (
            <button
              key={c.id}
              type="button"
              className="chip"
              aria-pressed={filter === c.id}
              onClick={() => setFilter(c.id)}
            >
              {c.label}
            </button>
          ))}
        </div>

        <p className="work__count" aria-live="polite">
          Showing {visible.length} of {projects.length} projects{activeLabel ? ` in ${activeLabel}` : ''}
        </p>

        <div className={`grid ${filter === 'all' ? 'grid--all' : 'grid--filtered'}`}>
          {visible.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} onOpen={open} />
          ))}
        </div>

        {hasPlaceholders && <p className="work__note">{site.work.placeholderNote}</p>}
      </div>

      <ProjectDialog project={activeProject} list={list} onClose={close} onStep={step} onStart={startFromPanel} />
    </section>
  );
}
