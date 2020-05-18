import { useContext } from 'react';
import { LocaleContext } from '../../context/LocaleContext';
import { locales } from '../../translations/config';

const Projects: React.FC = () => {
  const { t} = useContext(LocaleContext);
  return <p>{t('titleProjects')}</p>;
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

export default Projects;
