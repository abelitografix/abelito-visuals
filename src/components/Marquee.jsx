import { site } from '../data/site.js';
import { Star } from './Icons.jsx';

// A slow-scrolling ticker of the services. It is decorative, so screen
// readers skip it, and it stands still when reduced motion is requested.
export default function Marquee() {
  const words = site.services.items.map((s) => s.title);
  const group = (key) => (
    <div className="marquee__group" key={key}>
      {words.map((word) => (
        <span className="marquee__item" key={word}>
          {word}
          <Star size={26} />
        </span>
      ))}
    </div>
  );

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {group('a')}
        {group('b')}
      </div>
    </div>
  );
}
