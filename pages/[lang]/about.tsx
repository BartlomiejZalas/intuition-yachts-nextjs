import { useContext } from 'react';
import { LocaleContext } from '../../context/LocaleContext';
import { locales } from '../../translations/config';
import About from '../../pageComponents/about/About';
import { Variant } from '../../types/types';
import { LangProps } from '../../translations/types';

const AboutPage: React.FC<LangProps> = () => {
  const { locale } = useContext(LocaleContext);
  return <About lang={locale} variant={Variant.FULL} />;
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

export default AboutPage;
