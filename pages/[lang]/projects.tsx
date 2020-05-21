import React from 'react';

import { locales } from '../../translations/config';
import { LangProps } from '../../translations/types';
import Projects from '../../pageComponents/projects/Projects';

const ProjectsPage: React.FC<LangProps> = ({ lang }) => {
  return <Projects lang={lang} />;
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

export default ProjectsPage;
