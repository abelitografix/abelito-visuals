import { starPoints } from '../lib/shapes.js';

export function Arrow({ size = 18 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function Cross({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" aria-hidden="true" focusable="false">
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

export function Chevron({ dir = 'right', size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false" style={dir === 'left' ? { transform: 'scaleX(-1)' } : undefined}>
      <path d="M9 5l7 7-7 7" />
    </svg>
  );
}

export function Check() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      <path d="M4 12.5l5 5L20 6.5" />
    </svg>
  );
}

// Small spiky star used in the ticker and as decoration.
export function Star({ size = 28 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" aria-hidden="true" focusable="false">
      <polygon points={starPoints(24, 24, 23, 10, 8)} fill="currentColor" />
    </svg>
  );
}

// Five simple shapes, one per service card.
export function Glyph({ index = 0, size = 44 }) {
  const shapes = [
    <circle key="c" cx="24" cy="24" r="21" />,
    <rect key="r" x="4" y="4" width="40" height="40" />,
    <polygon key="t" points="24,3 45,43 3,43" />,
    <path key="h" d="M3 38a21 21 0 0 1 42 0z" />,
    <polygon key="s" points={starPoints(24, 24, 23, 11, 6)} />,
  ];
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="currentColor" aria-hidden="true" focusable="false">
      {shapes[index % shapes.length]}
    </svg>
  );
}
