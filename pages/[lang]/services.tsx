import { locales } from '../../translations/config';
import { LangProps } from '../../translations/types';
import Services from '../../pageComponents/services/Services';
import { Variant } from '../../types/types';
import useTranslation from '../../hooks/useTranslations';
import Meta from '../../components/Meta/Meta';

const Projects: React.FC<LangProps> = ({ lang }) => {
  const { t } = useTranslation();
  return (
    <>
      <Meta suffix={t('titleServices')} />
      <Services lang={lang} variant={Variant.FULL} />
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

export default Projects;
