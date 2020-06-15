import React from 'react';
import styles from './About.module.css';
import { LangProps } from '../../translations/types';
import useTranslation from '../../hooks/useTranslations';
import { Variant } from '../../types/types';
import OutlineButton from '../../components/OutlineButton/OutlineButton';

interface Props extends LangProps {
  variant: Variant;
}

const About: React.FC<Props> = ({ lang, variant }) => {
  const { t, locale } = useTranslation();
  const { ContentComponent } = require(`./Content-${lang}`);

  return (
    <section className={styles.bg} data-section="about">
      <div className="container">
        <h1 className="sectionTitle">{t('titleAbout')}</h1>
        <hr />
        <div className="columnContainer">
          <div className="column-1">
            <img
              src="/img/pages/about/about2.jpg"
              alt="Marta Zawadzka"
              className={styles.img}
            />
          </div>
          <div className="column-2">
            <ContentComponent variant={variant} />
            {variant === Variant.SHORT && (
              <OutlineButton
                href="/[lang]/about"
                as={`/${locale}/about`}
                text={t('readMore')}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
