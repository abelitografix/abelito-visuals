import { site } from '../data/site.js';
import { Arrow } from './Icons.jsx';
import RotatingMessage from './RotatingMessage.jsx';

import PhotoshopBox from './PhotoshopBox.jsx';

export default function Hero() {
  const { hero } = site;

  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
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
      
          <RotatingMessage />

         
<div className="hero__showcase">
  <div className="hero__photoshop-stage">
    <PhotoshopBox />
  </div>
</div>

        </div>
      </div>
    </section>
  );
}
