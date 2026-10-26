import { site } from '../data/site.js';
import { getContactItems } from '../lib/contact.js';
import Logo, { Wordmark } from './Logo.jsx';

const links = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const items = getContactItems(site.contact);
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <Logo />
            <p>{site.footer.note}</p>
          </div>

          <nav aria-label="Footer">
            <h2 className="footer__heading">Explore</h2>
            <ul>
              {links.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="footer__heading">Say hello</h2>
            <ul>
              {items.map((item) => (
                <li key={item.id}>
                  {item.ready ? (
                    <a
                      href={item.href}
                      {...(item.id !== 'email' ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    >
                      {item.label}
                    </a>
                  ) : (
                    <span className="footer__off">{item.label} (placeholder, not set up yet)</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer__big" aria-hidden="true">
          <Wordmark />
        </div>

        <p className="footer__bottom">
          &copy; {year} Abelito.Visuals. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
