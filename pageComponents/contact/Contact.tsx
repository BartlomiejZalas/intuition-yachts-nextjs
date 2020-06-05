import React from 'react';
import { LangProps } from '../../translations/types';
import styles from './Contact.module.css';
import useTranslation from '../../hooks/useTranslations';

import ContactForm from './ContactForm';

const Contact: React.FC<LangProps> = ({ lang }) => {
  const { t } = useTranslation();
  const { ContentComponent } = require(`./Content-${lang}`);

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
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
