// The Abelito.Visuals wordmark.
//
//  - A small symbol: a cobalt tile, a lime quarter-disc rising from the
//    corner, and a pink dot. It reads like a poster layout in miniature.
//  - "Abelito" in heavy, tightly-spaced type.
//  - An orange dot for the full stop.
//  - "Visuals" in a light weight, so the name has contrast built in.
//
// It uses the surrounding text colour, so it works on light and dark
// backgrounds without changes.

export function LogoMark({ size = 32 }) {
  return (
    <svg className="logo__mark" width={size} height={size} viewBox="0 0 32 32" aria-hidden="true" focusable="false">
      <rect width="32" height="32" rx="6" fill="#2457FF" />
      <path d="M0 32V14a18 18 0 0 1 18 18z" fill="#D7FF3F" />
      <circle cx="23" cy="9" r="5" fill="#FF4F9A" />
    </svg>
  );
}
<Logo variant="footer" />
export function Wordmark() {
  return (
    <span className="wordmark">
      Abelito
      <i className="wordmark__dot" aria-hidden="true" />
      <span className="wordmark__sub">Visuals</span>
    </span>
  );
}


export default function Logo({
  href = '#top',
  variant = 'header'
}) {
  const logoSrc =
    variant === 'footer'
      ? '/images/abelito-logo-white.png'
      : '/images/abelito-logo.png';

  return (
    <a
      className="logo"
      href={href}
      aria-label="Abelito.Visuals, back to top"
    >
      <img
        src={logoSrc}
        alt="AbelitoVisuals"
        style={{
          width: '210px',
          height: 'auto',
          display: 'block'
        }}
      />
    </a>
  );
}
