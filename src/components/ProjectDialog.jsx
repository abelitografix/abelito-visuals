import { useEffect, useRef } from 'react';
import Artwork from './Artwork.jsx';
import { Arrow, Check, Chevron, Cross } from './Icons.jsx';
import { getCategory } from '../data/projects.js';

// The case-study panel. It uses the browser's built-in <dialog>, which
// gives us keyboard focus trapping, the Esc key and screen-reader support
// for free.
export default function ProjectDialog({ project, list, onClose, onStep, onStart }) {
  const dialogRef = useRef(null);
  const scrollRef = useRef(null);

  // Open or close the native dialog to match the project that is selected.
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (project && !dialog.open) dialog.showModal();
    if (!project && dialog.open) dialog.close();
  }, [project]);

  // Lock page scrolling behind the panel, and start at the top for each project.
  useEffect(() => {
    document.documentElement.classList.toggle('no-scroll', Boolean(project));
    return () => document.documentElement.classList.remove('no-scroll');
  }, [project]);

  useEffect(() => {
    scrollRef.current?.scrollTo(0, 0);
  }, [project?.slug]);

  const category = project ? getCategory(project.category) : null;
  const index = project ? list.findIndex((p) => p.slug === project.slug) : -1;
  const hasMany = list.length > 1;

  return (
    <dialog
      ref={dialogRef}
      className="case"
      aria-labelledby="case-title"
      onClose={() => project && onClose()}
      onClick={(event) => {
        // A click on the dark backdrop (outside the panel) closes it.
        if (event.target === dialogRef.current) onClose();
      }}
    >
      {project && (
        <div className="case__scroll" ref={scrollRef}>
          <div className="case__bar">
            <span className="card__tag case__tag">{category?.label}</span>
            <span className="case__count" aria-live="polite">
              {index + 1} / {list.length}
            </span>
            <div className="case__nav">
              {hasMany && (
                <>
                  <button type="button" className="icon-btn" onClick={() => onStep(-1)} aria-label="Previous project">
                    <Chevron dir="left" />
                  </button>
                  <button type="button" className="icon-btn" onClick={() => onStep(1)} aria-label="Next project">
                    <Chevron />
                  </button>
                </>
              )}
              <button type="button" className="icon-btn icon-btn--solid" onClick={onClose} aria-label="Close case study">
                <Cross />
              </button>
            </div>
          </div>

          <div className="case__body">
            <div className="case__gallery">
              {project.video && (
                <video className="case__video" controls preload="metadata" aria-label={`${project.title} video`}>
                  <source src={project.video} />
                </video>
              )}
              {project.images.map((image, i) => (
                <figure key={i} className={`case__fig ${i === 0 ? 'is-wide' : ''}`}>
                  <Artwork
                    src={image.src}
                    alt={image.alt || `${project.title}, image ${i + 1}`}
                    palette={project.palette}
                    variant={project.variant + i + 1}
                    ratio={image.ratio}
                    label={`${project.title}, placeholder image ${i + 1}`}
                  />
                </figure>
              ))}
            </div>

            <aside className="case__info">
              <h2 id="case-title" className="case__title">
                {project.title}
              </h2>

              {project.placeholder && (
                <p className="case__note">
                  <strong>Sample project.</strong> The images and text here are placeholders, not finished work.
                </p>
              )}

              <dl className="case__facts">
                <div>
                  <dt>Category</dt>
                  <dd>{category?.label}</dd>
                </div>
                {project.year && (
                  <div>
                    <dt>Year</dt>
                    <dd>{project.year}</dd>
                  </div>
                )}
                {project.client && (
                  <div>
                    <dt>Client</dt>
                    <dd>{project.client}</dd>
                  </div>
                )}
              </dl>

              <h3 className="case__label">The brief</h3>
              <p>{project.brief}</p>

              <h3 className="case__label">Creative approach</h3>
              <p>{project.approach}</p>

              <h3 className="case__label">Deliverables</h3>
              <ul className="case__list">
                {project.deliverables.map((item) => (
                  <li key={item}>
                    <Check /> {item}
                  </li>
                ))}
              </ul>

              {project.tools?.length > 0 && (
                <>
                  <h3 className="case__label">Tools</h3>
                  <ul className="case__tools">
                    {project.tools.map((tool) => (
                      <li key={tool}>{tool}</li>
                    ))}
                  </ul>
                </>
              )}

              <button type="button" className="btn btn--cobalt case__cta" onClick={() => onStart(project.category)}>
                Start a similar project <Arrow />
              </button>
            </aside>
          </div>
        </div>
      )}
    </dialog>
  );
}
