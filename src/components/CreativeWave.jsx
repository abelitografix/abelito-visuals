
import './CreativeWave.css';

export default function CreativeWave() {
  return (
    <div className="creative-wave" aria-hidden="true">
      <svg
        className="creative-wave__svg"
        viewBox="0 0 600 420"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <linearGradient id="limeWave" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#BFFF38" stopOpacity="0" />
            <stop offset="45%" stopColor="#BFFF38" />
            <stop offset="100%" stopColor="#BFFF38" stopOpacity="0.2" />
          </linearGradient>

          <filter id="waveGlow" x="-50%" y="-100%" width="200%" height="300%">
            <feGaussianBlur stdDeviation="5" />
          </filter>
        </defs>

        
{Array.from({ length: 18 }, (_, i) => {
  const offset = i * 9;
  const variation = Math.sin(i * 0.35) * 35;

  const path = `M -50 ${180 + offset}
    C 100 ${-120 + offset + variation},
      220 ${500 - offset},
      370 ${160 + offset}
    S 540 ${-80 + offset},
      650 ${190 + offset}`;


          return (
            <g key={i} className="creative-wave__strand">
              <path
                d={path}
                fill="none"
                stroke="#BFFF38"
                strokeWidth="3"
                opacity="0.12"
                filter="url(#waveGlow)"
              />
              <path
                d={path}
                fill="none"
                stroke="url(#limeWave)"
                strokeWidth={i === 7 ? 2 : 0.9}
                opacity={0.85 - i * 0.025}
              />
            </g>
          );
        })}
      </svg>
    </div>
  );
}
