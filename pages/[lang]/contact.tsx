import React from 'react';

import { locales } from '../../translations/config';
import { LangProps } from '../../translations/types';
import Contact from '../../pageComponents/contact/Contact';
import Meta from '../../components/Meta/Meta';
import useTranslation from '../../hooks/useTranslations';

const ContactPage: React.FC<LangProps> = ({ lang }) => {
  const { t } = useTranslation();
  return (
    <>
      <Meta suffix={t('titleContact')} />
      <Contact lang={lang} />
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

export default ContactPage;
