import React from 'react';
import { LangProps } from '../../translations/types';
import styles from './Contact.module.css';
import useTranslation from '../../hooks/useTranslations';

const Contact: React.FC<LangProps> = ({ lang }) => {
  const { t } = useTranslation();
  const { ContentComponent } = require(`./Content-${lang}`);

  return (
    <section className={styles.bg}>
      <a id="contact" className={styles.anchorOffset}></a>
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
            />
            <input
              type="text"
              className={styles.input}
              placeholder={t('emailLabel')}
            />
            <input
              type="text"
              className={styles.input}
              placeholder={t('subjectLabel')}
            />
            <textarea
              className={styles.input + ' ' + styles.textarea}
              placeholder={t('messageLabel')}
            />
            <button className={styles.btn}>{t('sendButton')}</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
