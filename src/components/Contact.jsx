import { useEffect, useId, useState } from 'react';
import { site } from '../data/site.js';
import { categories } from '../data/projects.js';
import { getContactItems, mailtoHref, readContact, whatsappHref } from '../lib/contact.js';
import Reveal from './Reveal.jsx';
import { Arrow } from './Icons.jsx';

const OTHER = 'Something else';

export default function Contact({ preset }) {
  const { contactSection: copy } = site;
  const items = getContactItems(site.contact);
  const ready = readContact(site.contact);
  const uid = useId();

  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState(null);

  // A project card or service card can pre-select the project type.
  useEffect(() => {
    if (preset?.n) setType(preset.type || '');
  }, [preset]);

  const options = [...categories.map((c) => c.inquiry), OTHER];

  const buildMessage = () =>
    [
      `Hi Abelito.Visuals, my name is ${name.trim()}.`,
      type ? `Project type: ${type}` : '',
      '',
      message.trim(),
    ]
      .filter((line, i) => line !== '' || i === 2)
      .join('\n');

  const handleSubmit = (event) => {
    event.preventDefault();
    const via = event.nativeEvent.submitter?.value;
    const text = buildMessage();

    if (via === 'whatsapp') {
      if (!ready.whatsapp) {
        setStatus({ tone: 'warn', text: 'WhatsApp is not set up yet. Add the number in src/data/site.js.' });
        return;
      }
      window.open(whatsappHref(ready.whatsapp, text), '_blank', 'noopener,noreferrer');
      setStatus({ tone: 'ok', text: 'Opening WhatsApp with your message ready to send.' });
      return;
    }

    if (!ready.email) {
      setStatus({ tone: 'warn', text: 'Email is not set up yet. Add the address in src/data/site.js.' });
      return;
    }
    const subject = `Project enquiry${type ? `: ${type}` : ''}`;
    window.location.href = mailtoHref(ready.email, subject, text);
    setStatus({ tone: 'ok', text: 'Opening your email app with your message ready to send.' });
  };

  return (
    <section className="contact section" id="contact" aria-labelledby="contact-title">
      <div className="container contact__grid">
        <div className="contact__intro">
          <Reveal>
            <p className="eyebrow">{copy.eyebrow}</p>
            <h2 id="contact-title" className="contact__title">
              {copy.titleStart} <span>{copy.highlight}</span>
            </h2>
            <p className="contact__lead">{copy.intro}</p>
          </Reveal>

          <Reveal as="ul" className="contact-list" delay={100}>
            {items.map((item) => {
              const inner = (
                <>
                  <span className="contact-item__label">{item.label}</span>
                  <span className="contact-item__value">{item.value}</span>
                  {item.ready ? (
                    <Arrow size={22} />
                  ) : (
                    <span className="contact-item__tag">Placeholder</span>
                  )}
                </>
              );
              return (
                <li key={item.id}>
                  {item.ready ? (
                    <a
                      className="contact-item"
                      href={item.href}
                      {...(item.id !== 'email' ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    >
                      {inner}
                    </a>
                  ) : (
                    <div className="contact-item contact-item--placeholder">{inner}</div>
                  )}
                </li>
              );
            })}
          </Reveal>
        </div>

        <Reveal className="form-card" delay={150}>
          <h3 className="form-card__title">Quick project brief</h3>
          <form className="form" onSubmit={handleSubmit}>
            <div className="field">
              <label htmlFor={`${uid}-name`}>Your name</label>
              <input
                id={`${uid}-name`}
                name="name"
                type="text"
                autoComplete="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="field">
              <label htmlFor={`${uid}-type`}>What do you need?</label>
              <select id={`${uid}-type`} name="type" value={type} onChange={(e) => setType(e.target.value)}>
                <option value="">Choose a project type</option>
                {options.map((o) => (
                  <option key={o} value={o}>
                    {o}
                  </option>
                ))}
              </select>
            </div>

            <div className="field">
              <label htmlFor={`${uid}-message`}>Tell me about it</label>
              <textarea
                id={`${uid}-message`}
                name="message"
                rows="5"
                required
                placeholder="What is it for, where will it be used, and when do you need it?"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>

            <div className="form__actions">
              <button type="submit" value="email" className="btn btn--cobalt">
                Send by email <Arrow />
              </button>
              <button type="submit" value="whatsapp" className="btn btn--lime">
                Send on WhatsApp <Arrow />
              </button>
            </div>

            <p className={`form-status ${status ? `is-${status.tone}` : ''}`} role="status">
              {status?.text}
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
