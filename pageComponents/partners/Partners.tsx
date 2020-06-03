import React from 'react';
import { LangProps } from '../../translations/types';
import useTranslation from '../../hooks/useTranslations';
import styles from './Partners.module.css';

const Partners: React.FC<LangProps> = ({ lang }) => {
  const { t } = useTranslation();
  const { ContentComponent } = require(`./Content-${lang}`);

  return (
    <section className={styles.section} data-section="partners">
      <div className="container">
        <h1 className="sectionTitle">{t('titlePartners')}</h1>
        <hr />
        <ContentComponent />
      </div>
    </section>
  );
};

export default Partners;
