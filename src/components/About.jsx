import { site } from '../data/site.js';
import { starPoints } from '../lib/shapes.js';
import Reveal from './Reveal.jsx';

// Shown until you add a real portrait in src/data/site.js (about.photo).
function AboutArt() {
  return (
    <svg viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">
      <rect width="400" height="500" fill="#2457FF" />
      <circle cx="270" cy="170" r="130" fill="#D7FF3F" />
      <path d="M0 500V330a170 170 0 0 1 340 0v170z" fill="#FF6B35" />
      <rect x="0" y="400" width="400" height="100" fill="#171717" />
      <circle cx="96" cy="120" r="38" fill="#FF4F9A" />
      <polygon points={starPoints(270, 170, 62, 26, 10)} fill="#171717" />
    </svg>
  );
}

export default function About() {
  const { about } = site;

  return (
    <section className="about section" id="about" aria-labelledby="about-title">
      <div className="container about__grid">
        <Reveal className="about__visual">
          {about.photo ? <img src={about.photo} alt={about.photoAlt} loading="lazy" decoding="async" /> : <AboutArt />}
        </Reveal>

        <div className="about__content">
          <Reveal>
            <p className="eyebrow">{about.eyebrow}</p>
            <h2 id="about-title" className="section-title about__statement">
              {about.statement}
            </h2>
          </Reveal>

          <Reveal className="about__text" delay={80}>
            {about.paragraphs.map((text) => (
              <p key={text}>{text}</p>
            ))}
          </Reveal>

          <ol className="principles">
            {about.principles.map((item, i) => (
              <Reveal as="li" key={item.title} delay={i * 90}>
                <span className="principles__num" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
