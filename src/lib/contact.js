// Turns the contact details from src/data/site.js into working links.
// Anything that is empty or looks wrong is treated as "not set up yet",
// so the site never links to a fake address or number.

export const PLACEHOLDERS = {
  email: 'your-email@example.com',
  whatsapp: '+254 7XX XXX XXX',
  instagram: '@your.instagram',
};

const clean = (value) => (value || '').trim();

export function readContact(contact = {}) {
  const email = clean(contact.email);
  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const digits = clean(contact.whatsapp).replace(/\D/g, '').replace(/^00/, '');
  const whatsappOk = digits.length >= 9 && digits.length <= 15;

  const handle = clean(contact.instagram)
    .replace(/^https?:\/\/(www\.)?instagram\.com\//i, '')
    .replace(/^@/, '')
    .replace(/[/?].*$/, '');
  const instagramOk = /^[A-Za-z0-9._]{1,30}$/.test(handle);

  return {
    email: emailOk ? email : null,
    whatsapp: whatsappOk ? digits : null,
    instagram: instagramOk ? handle : null,
  };
}

export const mailtoHref = (email, subject = '', body = '') =>
  `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

export const whatsappHref = (number, text = '') =>
  `https://wa.me/${number}${text ? `?text=${encodeURIComponent(text)}` : ''}`;

export const instagramHref = (handle) => `https://instagram.com/${handle}`;

// One list used by both the Contact section and the Footer.
export function getContactItems(contact) {
  const ok = readContact(contact);
  return [
    {
      id: 'email',
      label: 'Email',
      ready: Boolean(ok.email),
      value: ok.email || PLACEHOLDERS.email,
      href: ok.email ? `mailto:${ok.email}` : null,
    },
    {
      id: 'whatsapp',
      label: 'WhatsApp',
      ready: Boolean(ok.whatsapp),
      value: ok.whatsapp ? `+${ok.whatsapp}` : PLACEHOLDERS.whatsapp,
      href: ok.whatsapp ? whatsappHref(ok.whatsapp, 'Hi! I would like to talk about a design project.') : null,
    },
    {
      id: 'instagram',
      label: 'Instagram',
      ready: Boolean(ok.instagram),
      value: ok.instagram ? `@${ok.instagram}` : PLACEHOLDERS.instagram,
      href: ok.instagram ? instagramHref(ok.instagram) : null,
    },
  ];
}
