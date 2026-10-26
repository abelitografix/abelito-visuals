import Placeholder from './Placeholder.jsx';

// Shows a real image when "src" is set, otherwise a clearly labelled
// placeholder. This is how the site never passes placeholders off as your work.
//
//  fill  = true  -> fills its parent box (used in cards)
//  fill  = false -> flows in the page at the given ratio (used in case studies)
export default function Artwork({ src, alt = '', palette, variant = 0, fill = false, ratio, eager = false, label }) {
  const mode = fill ? 'art--fill' : 'art--flow';

  if (src) {
    return (
      <div className={`art ${mode}`}>
        <img src={src} alt={alt} loading={eager ? 'eager' : 'lazy'} decoding="async" />
      </div>
    );
  }

  return (
    <div
      className={`art ${mode} is-placeholder`}
      style={!fill && ratio ? { '--ratio': ratio } : undefined}
      role="img"
      aria-label={label || 'Placeholder artwork, to be replaced with real work'}
    >
      <Placeholder palette={palette} variant={variant} />
      <span className="art__chip" aria-hidden="true">
        Placeholder
      </span>
    </div>
  );
}
