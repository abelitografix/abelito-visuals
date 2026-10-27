
import { useEffect, useRef } from 'react';

export default function CreativeBackground() {
  const backgroundRef = useRef(null);

  useEffect(() => {
    const background = backgroundRef.current;
    if (!background) return;

    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    );

    if (reduceMotion.matches) return;

    function handleMove(event) {
      const rect = background.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;

      background.style.setProperty('--mouse-x', `${x * 18}px`);
      background.style.setProperty('--mouse-y', `${y * 18}px`);
    }

    background.addEventListener('pointermove', handleMove);

    return () => {
      background.removeEventListener('pointermove', handleMove);
    };
  }, []);

  return (
    <div
      className="creative-bg"
      ref={backgroundRef}
      aria-hidden="true"
    >
      <span className="creative-bg__shape creative-bg__ring" />
      <span className="creative-bg__shape creative-bg__circle" />
      <span className="creative-bg__shape creative-bg__star">✳</span>
      <span className="creative-bg__shape creative-bg__diamond" />
      <span className="creative-bg__shape creative-bg__small-ring" />
      <span className="creative-bg__shape creative-bg__cross">✳</span>
    </div>
  );
}
