import { site } from '../data/site.js';
import { projects } from '../data/projects.js';
import Artwork from './Artwork.jsx';
import { Arrow, Star } from './Icons.jsx';
import CreativeBackground from './CreativeBackground.jsx';
export default function Hero() {
  const { hero } = site;
  const picks = hero.featured.map((slug) => projects.find((p) => p.slug === slug)).filter(Boolean);

  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <CreativeBackground />
      <div className="container">
        <p className="eyebrow hero__eyebrow">{hero.eyebrow}</p>

        <h1 id="hero-title" className="hero__title">
          <span>{hero.line1}</span>
          <span>
            {hero.line2Start} <mark>{hero.highlight}</mark>
          </span>
        </h1>

        <div className="hero__lower">
          <div className="hero__copy">
            <p>{hero.text}</p>
            <div className="hero__actions">
              <a className="btn btn--cobalt" href="#work">
                {hero.primaryCta} <Arrow />
              </a>
              <a className="btn" href="#contact">
                {hero.secondaryCta}
              </a>
            </div>
          </div>

          <div className="collage">
            <div className="collage__blob" aria-hidden="true" />
            <span className="collage__dot" aria-hidden="true" />
            <span className="collage__star" aria-hidden="true">
              <Star size={64} />
            </span>

            {picks.map((p, i) => (
              <a
                key={p.slug}
                className={`collage__card c${i + 1}`}
                href={`#work/${p.slug}`}
                aria-label={`Open case study: ${p.title}`}
              >
                <Artwork
                  fill
                  eager
                  src={p.cover.src}
                  alt={p.cover.alt || p.title}
                  palette={p.palette}
                  variant={p.variant}
                  label={`${p.title}, placeholder artwork`}
                />
              </a>
            ))}

            <div className="badge" aria-hidden="true">
              <svg viewBox="0 0 120 120">
                <defs>
                  <path id="badge-circle" d="M60 60m-44 0a44 44 0 1 1 88 0a44 44 0 1 1-88 0" />
                </defs>
                <text>
                  <textPath href="#badge-circle" textLength="270" lengthAdjust="spacing">
                    {hero.badge}
                  </textPath>
                </text>
              </svg>
              <span className="badge__star">
                <Star size={34} />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
