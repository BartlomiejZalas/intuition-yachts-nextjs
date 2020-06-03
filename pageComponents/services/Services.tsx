import React from 'react';
import { LangProps } from '../../translations/types';
import { Variant } from '../../types/types';
import useTranslation from '../../hooks/useTranslations';
import OutlineButton from '../../components/OutlineButton/OutlineButton';
import styles from './Services.module.css';

interface Props extends LangProps {
  variant: Variant;
}

const Services: React.FC<Props> = ({ lang, variant }) => {
  const { t } = useTranslation();
  const { ContentComponent } = require(`./Content-${lang}`);

  return (
    <section className={styles.section}  data-section="services">
      <div className={styles.container + ' container'}>
        <h1 className="sectionTitle">{t('titleServices')}</h1>
        <hr />
        <ContentComponent variant={variant} />
        {variant === Variant.SHORT && (
          <OutlineButton
            href="/[lang]/services"
            as={`/${lang}/services`}
            text={t('readMore')}
          />
        )}
      </div>
    </section>
  );
};

export default Services;
