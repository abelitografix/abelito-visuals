import { starPoints } from '../lib/shapes.js';

// Eight abstract patterns drawn in brand colours.
// They stand in for artwork until real images are added, and the
// <Artwork> component always labels them "Placeholder".

const scenes = [
  // 0 - sun
  ({ a, b, c, ink }) => (
    <>
      <circle cx="400" cy="300" r="250" fill={a} />
      <circle cx="400" cy="300" r="165" fill={b} />
      <circle cx="400" cy="300" r="85" fill={c} />
      <rect x="0" y="288" width="800" height="24" fill={ink} />
      <circle cx="400" cy="300" r="85" fill="none" stroke={ink} strokeWidth="8" />
    </>
  ),
  // 1 - stripes
  ({ a, b, c, ink }) => (
    <>
      {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
        <rect key={i} x={-260 + i * 150} y="-200" width="70" height="1000" fill={a} transform="rotate(28 400 300)" />
      ))}
      <circle cx="400" cy="300" r="145" fill={b} />
      <circle cx="400" cy="300" r="145" fill="none" stroke={ink} strokeWidth="14" />
      <circle cx="400" cy="300" r="55" fill={c} />
    </>
  ),
  // 2 - blocks
  ({ a, b, c, ink }) => {
    const rects = [a, b, c, ink, c, a];
    const dots = [b, ink, a, c, b, ink];
    return (
      <>
        {rects.map((fill, i) => {
          const x = 100 + (i % 3) * 200;
          const y = 100 + Math.floor(i / 3) * 200;
          return (
            <g key={i}>
              <rect x={x} y={y} width="200" height="200" fill={fill} />
              {i % 2 === 0 ? (
                <circle cx={x + 100} cy={y + 100} r="64" fill={dots[i]} />
              ) : (
                <path d={`M${x} ${y + 200}V${y + 40}a160 160 0 0 1 160 160z`} fill={dots[i]} />
              )}
            </g>
          );
        })}
      </>
    );
  },
  // 3 - waves
  ({ a, b, c, ink }) => {
    const colors = [a, b, c, ink, b];
    return (
      <>
        {[150, 225, 300, 375, 450].map((y, i) => (
          <path
            key={y}
            d={`M-50 ${y}C150 ${y - 120} 250 ${y + 120} 400 ${y}S650 ${y - 120} 850 ${y}`}
            fill="none"
            stroke={colors[i]}
            strokeWidth="46"
            strokeLinecap="round"
          />
        ))}
      </>
    );
  },
  // 4 - orbit
  ({ a, b, c, ink }) => {
    const dots = [b, c, ink, b, c];
    return (
      <>
        <circle cx="400" cy="300" r="205" fill="none" stroke={ink} strokeWidth="6" />
        <circle cx="400" cy="300" r="125" fill={a} />
        <circle cx="400" cy="300" r="48" fill={c} />
        {[0, 1, 2, 3, 4].map((i) => {
          const ang = (i * 72 - 90) * (Math.PI / 180);
          return <circle key={i} cx={400 + Math.cos(ang) * 205} cy={300 + Math.sin(ang) * 205} r="36" fill={dots[i]} stroke={ink} strokeWidth="6" />;
        })}
      </>
    );
  },
  // 5 - arches
  ({ a, b, c, ink }) => (
    <>
      {[
        [180, 330, a],
        [400, 200, b],
        [620, 330, c],
      ].map(([x, top, fill]) => (
        <path key={x} d={`M${x - 100} 540V${top + 100}A100 100 0 0 1 ${x + 100} ${top + 100}V540z`} fill={fill} />
      ))}
      <path d="M350 540V330A50 50 0 0 1 450 330V540z" fill={ink} />
      <rect x="0" y="540" width="800" height="60" fill={ink} />
    </>
  ),
  // 6 - star
  ({ a, b, c, ink }) => (
    <>
      <polygon points={starPoints(400, 300, 265, 165, 12)} fill={a} />
      <circle cx="400" cy="300" r="125" fill={b} />
      <circle cx="400" cy="300" r="64" fill={c} />
      <polygon points={starPoints(400, 300, 64, 26, 8)} fill={ink} />
    </>
  ),
  // 7 - split
  ({ a, b, c, ink }) => (
    <>
      <path d="M400 60A240 240 0 0 0 400 540z" fill={a} />
      <path d="M400 60A240 240 0 0 1 400 540z" fill={b} />
      <rect x="392" y="30" width="16" height="540" fill={ink} />
      <circle cx="262" cy="300" r="62" fill={c} />
      <circle cx="538" cy="300" r="62" fill={ink} />
    </>
  ),
];

export default function Placeholder({ palette, variant = 0 }) {
  const [bg, a, b, c, ink] = palette || ['#2457FF', '#D7FF3F', '#FF6B35', '#FF4F9A', '#171717'];
  const scene = scenes[((variant % scenes.length) + scenes.length) % scenes.length];
  return (
    <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">
      <rect width="800" height="600" fill={bg} />
      {scene({ a, b, c, ink })}
    </svg>
  );
}
