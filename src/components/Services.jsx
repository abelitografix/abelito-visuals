import { site } from '../data/site.js';
import { categories } from '../data/projects.js';
import Reveal from './Reveal.jsx';
import { Arrow, Glyph } from './Icons.jsx';

// Each card gets its own hover colour: [background, text colour].
const accents = [
  ['#2457FF', '#FFFFFF'],
  ['#FF4F9A', '#171717'],
  ['#FF6B35', '#171717'],
  ['#171717', '#F7F4ED'],
  ['#2457FF', '#FFFFFF'],
];

export default function Services({ onStartProject }) {
  const { services } = site;

  return (
    <section className="services section" id="services" aria-labelledby="services-title">
      <div className="container">
        <Reveal className="section-head">
          <div>
            <p className="eyebrow">{services.eyebrow}</p>
            <h2 id="services-title" className="section-title">
              {services.title}
              <span className="dot">.</span>
            </h2>
          </div>
          <p className="section-head__intro">{services.intro}</p>
        </Reveal>

        <ul className="services__grid">
          {services.items.map((service, i) => {
            const [bg, fg] = accents[i % accents.length];
            const inquiry = categories.find((c) => c.id === service.category)?.inquiry || '';
            return (
              <Reveal
                as="li"
                key={service.title}
                className="service"
                delay={(i % 3) * 80}
                style={{ '--accent': bg, '--accent-ink': fg }}
              >
                <div className="service__top">
                  <span className="service__num">{String(i + 1).padStart(2, '0')}</span>
                  <Glyph index={i} />
                </div>
                <h3 className="service__title">{service.title}</h3>
                <p className="service__desc">{service.description}</p>
                <ul className="service__list" aria-label={`${service.title}: typically includes`}>
                  {service.includes.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <button type="button" className="link-arrow" onClick={() => onStartProject(inquiry)}>
                  Ask about this <Arrow size={18} />
                </button>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
