import { FormEvent, useState } from 'react';
import { SITE_CONTACT_EMAIL } from '../config/site';
import './ContactMessageForm.css';

export function ContactMessageForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [touched, setTouched] = useState(false);

  const emailInvalid = touched && email.trim() !== '' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
  const messageInvalid = touched && message.trim().length < 4;

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    setTouched(true);
    const trimmedEmail = email.trim();
    const trimmedMessage = message.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail) || trimmedMessage.length < 4) {
      return;
    }

    const subject = encodeURIComponent(
      `Bowmont Boxing website — ${name.trim() || 'Message'}`,
    );
    const body = encodeURIComponent(
      `Name: ${name.trim() || '—'}\nReply-to: ${trimmedEmail}\n\n${trimmedMessage}`,
    );
    window.location.href = `mailto:${SITE_CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  }

  return (
    <section className="contact-message" aria-labelledby="contact-message-heading">
      <h2 id="contact-message-heading" className="contact-message__title">
        Send us a message
      </h2>
      <p className="contact-message__lead">
        This opens your email app with your note ready to send. We do not list a phone number;
        email is the best way to reach us.
      </p>
      <form className="contact-message__form" onSubmit={onSubmit} noValidate>
        <div className="contact-message__field">
          <label htmlFor="contact-name">Name (optional)</label>
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            value={name}
            onChange={(ev) => setName(ev.target.value)}
          />
        </div>
        <div className="contact-message__field">
          <label htmlFor="contact-email">Your email</label>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            aria-invalid={emailInvalid}
            aria-describedby={emailInvalid ? 'contact-email-error' : undefined}
            value={email}
            onChange={(ev) => setEmail(ev.target.value)}
            onBlur={() => setTouched(true)}
          />
          {emailInvalid ? (
            <p id="contact-email-error" className="contact-message__error" role="alert">
              Enter a valid email address so we can reply.
            </p>
          ) : null}
        </div>
        <div className="contact-message__field">
          <label htmlFor="contact-body">Message</label>
          <textarea
            id="contact-body"
            name="message"
            required
            rows={6}
            aria-invalid={messageInvalid}
            aria-describedby={messageInvalid ? 'contact-body-error' : undefined}
            value={message}
            onChange={(ev) => setMessage(ev.target.value)}
            onBlur={() => setTouched(true)}
          />
          {messageInvalid ? (
            <p id="contact-body-error" className="contact-message__error" role="alert">
              Please add a few words so we know how we can help.
            </p>
          ) : null}
        </div>
        <button type="submit" className="contact-message__submit">
          Open email to send
        </button>
      </form>
    </section>
  );
}
