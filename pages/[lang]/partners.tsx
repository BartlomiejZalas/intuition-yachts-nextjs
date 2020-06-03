import React from 'react';

import { locales } from '../../translations/config';
import { LangProps } from '../../translations/types';
import Partners from '../../pageComponents/partners/Partners';

const PartnersPage: React.FC<LangProps> = ({ lang }) => {
  return <Partners lang={lang} />;
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
