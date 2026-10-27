
import { useEffect, useState } from 'react';

const messages = [
  {
    title: 'IDEAS INTO IMPACT.',
    description: 'We transform bold concepts into powerful visuals that leave a lasting impression.'
  },
  {
    title: 'DESIGNED TO STAND OUT.',
    description: 'Creative solutions that give brands their own voice, identity, and presence.'
  },
  {
    title: 'CREATIVITY IN MOTION.',
    description: 'From striking graphics to dynamic motion, every detail tells a story.'
  },
  {
    title: 'SCROLL TO EXPLORE.',
    description: 'Discover the work, the thinking, and the creativity behind every project.'
  }
];

export default function RotatingMessage() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % messages.length);
    }, 10000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="rotating-message" aria-live="off">
      <div className="rotating-message__content" key={index}>
        <h2>{messages[index].title}</h2>
        <p>{messages[index].description}</p>
      </div>
      <div className="rotating-message__dots" aria-hidden="true">
        {messages.map((message, i) => (
          <span
            key={message.title}
            className={i === index ? 'active' : ''}
          />
        ))}
      </div>
    </div>
  );
}
