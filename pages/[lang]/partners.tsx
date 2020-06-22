import React from 'react';

import { locales } from '../../translations/config';
import { LangProps } from '../../translations/types';
import Partners from '../../pageComponents/partners/Partners';
import useTranslation from '../../hooks/useTranslations';
import Meta from '../../components/Meta/Meta';

const PartnersPage: React.FC<LangProps> = ({ lang }) => {
  const { t } = useTranslation();
  return (
    <>
      <Meta suffix={t('titlePartners')} />
      <Partners lang={lang} />
    </>
  );
};

export async function getStaticPaths() {
  return {
    paths: locales.map((locale) => ({ params: { lang: locale } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  return {
    props: {
      lang: params.lang,
    },
  };
}

export default PartnersPage;
