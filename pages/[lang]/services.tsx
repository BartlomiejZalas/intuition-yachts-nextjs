import { locales } from '../../translations/config';
import { LangProps } from '../../translations/types';
import Services from '../../pageComponents/services/Services';
import { Variant } from '../../types/types';

const Projects: React.FC<LangProps> = ({ lang }) => {
  return <Services lang={lang} variant={Variant.FULL} />;
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
