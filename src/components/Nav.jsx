import { useEffect, useRef, useState } from 'react';
import Logo from './Logo.jsx';
import { Arrow } from './Icons.jsx';

const links = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef(null);
  const firstLinkRef = useRef(null);

  // While the mobile menu is open: lock page scroll, close with Esc,
  // and close automatically if the window is resized to desktop width.
  useEffect(() => {
    if (!open) return undefined;
    document.documentElement.classList.add('no-scroll');
    firstLinkRef.current?.focus();

    const onKey = (event) => {
      if (event.key === 'Escape') {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    const mq = window.matchMedia('(min-width: 880px)');
    const onResize = () => mq.matches && setOpen(false);

    window.addEventListener('keydown', onKey);
    mq.addEventListener('change', onResize);
    return () => {
      document.documentElement.classList.remove('no-scroll');
      window.removeEventListener('keydown', onKey);
      mq.removeEventListener('change', onResize);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <header className="site-header">
        <div className="container nav">
          <Logo />

          <nav aria-label="Main">
            <ul className="nav__links">
              {links.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="nav__right">
            <a className="btn btn--orange nav__cta" href="#contact">
              Let&rsquo;s Talk <Arrow />
            </a>
            <button
              ref={toggleRef}
              type="button"
              className="nav__toggle"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? 'Close menu' : 'Open menu'}
              onClick={() => setOpen((v) => !v)}
            >
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      {/* Kept outside <header> so the full-screen menu is positioned against the page. */}
      <div id="mobile-menu" className="mobile-menu" hidden={!open}>
        <nav aria-label="Mobile">
          <ul>
            {links.map((link, i) => (
              <li key={link.href}>
                <a className="mobile-menu__link" href={link.href} onClick={close} ref={i === 0 ? firstLinkRef : undefined}>
                  {link.label} <Arrow size={28} />
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a className="btn btn--orange" href="#contact" onClick={close}>
          Let&rsquo;s Talk <Arrow />
        </a>
        <p className="mobile-menu__foot">Graphic designer based in Kenya.</p>
      </div>
    </>
  );
}
