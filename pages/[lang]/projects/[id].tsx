import { locales } from '../../../translations/config';
import { PROJECTS } from '../../../pageComponents/projects/projects';
import { LangProps } from '../../../translations/types';
import Project from '../../../pageComponents/projects/Project';
import useTranslation from '../../../hooks/useTranslations';
import Meta from '../../../components/Meta/Meta';

interface Props extends LangProps {
  id: string;
}

const ProjectPage: React.FC<Props> = ({ id, lang }) => {
  const { t } = useTranslation();
  return (
    <>
      <Meta suffix={t('titleProjects')} />
      <Project id={id} lang={lang} />
    </>
  );
};

export async function getStaticPaths() {
  const paths = [];
  locales.forEach((locale) => {
    PROJECTS.forEach((p) => {
      paths.push({ params: { lang: locale, id: p.id } });
    });
  });
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  return {
    props: {
      id: params.id,
      lang: params.lang,
    },
  };
}

export default ProjectPage;
