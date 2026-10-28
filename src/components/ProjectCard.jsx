import Reveal from './Reveal.jsx';
import Artwork from './Artwork.jsx';
import { Arrow } from './Icons.jsx';
import { getCategory } from '../data/projects.js';

// One tile in the portfolio grid. The title is a real button that is
// stretched over the whole card, so mouse, touch and keyboard all work.
export default function ProjectCard({ project, index, onOpen }) {
  const category = getCategory(project.category);

  return (
    <Reveal as="article" className={`card span-${project.span}`} delay={(index % 4) * 70}>
      <div
  className="card__media"
  role="button"
  tabIndex={0}
  aria-label={`View ${project.title}`}
  onClick={() => onOpen(project.slug)}
  onKeyDown={(event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onOpen(project.slug);
    }
  }}
>
        <Artwork
          fill
          src={project.cover.src}
          alt={project.cover.alt || project.title}
          palette={project.palette}
          variant={project.variant}
          label={`${project.title}, placeholder artwork`}
        />
      </div>
      <div className="card__meta">
        <span className="card__tag">{category?.label}</span>
        <h3 className="card__title">
          <button
            type="button"
            className="card__link"
            aria-haspopup="dialog"
            onClick={() => onOpen(project.slug)}
          >
            {project.title}
          </button>
        </h3>
        <span className="card__arrow" aria-hidden="true">
          <Arrow size={20} />
        </span>
      </div>
    </Reveal>
  );
}
