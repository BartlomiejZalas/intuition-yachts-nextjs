import React from 'react';

import { locales } from '../../translations/config';
import { LangProps } from '../../translations/types';
import Contact from '../../pageComponents/contact/Contact';

const ContactPage: React.FC<LangProps> = ({ lang }) => {
  return <Contact lang={lang} />;
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
