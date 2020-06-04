import React, { useState } from 'react';
import { LangProps } from '../../translations/types';
import styles from './Contact.module.css';
import useTranslation from '../../hooks/useTranslations';

const Contact: React.FC<LangProps> = ({ lang }) => {
  const { t } = useTranslation();
  const { ContentComponent } = require(`./Content-${lang}`);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const send = async () => {
    if (!name.trim() || !email.trim() || !subject.trim() || !message.trim()) {
      alert(t('formValidationError'));
      return;
    }
    try {
      await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, subject, message }),
      });
      alert(t('messageSent'));
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
    } catch (e) {
      alert(t('sendingError'));
      console.error(e);
    }
  };

  return (
    <section className={styles.bg} data-section="contact">
      <div className={styles.container + ' container'}>
        <h1 className="sectionTitle">{t('titleContact')}</h1>
        <hr />
        <div className="columnContainer">
          <div className="column-1">
            <h2 className="subsectionTitle">{t('contactDetails')}:</h2>
            <ContentComponent />
          </div>
          <div className="column-1">
            <h2 className="subsectionTitle">{t('contactForm')}:</h2>
            <input
              type="text"
              className={styles.input}
              placeholder={t('nameLabel')}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              className={styles.input}
              placeholder={t('emailLabel')}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="text"
              className={styles.input}
              placeholder={t('subjectLabel')}
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
            <textarea
              className={styles.input + ' ' + styles.textarea}
              placeholder={t('messageLabel')}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <input
              className={styles.ohnohoney}
              autoComplete="off"
              type="text"
              id="name"
              name="name"
              placeholder="Your name here"
            />
            <button className={styles.btn} onClick={send}>
              {t('sendButton')}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
