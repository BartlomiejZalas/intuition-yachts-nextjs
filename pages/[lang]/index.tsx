import { locales } from '../../translations/config';
import { LangProps } from '../../translations/types';
import FullImage from '../../components/FullImage/FullImage';
import About from '../../pageComponents/about/About';
import { Variant } from '../../types/types';
import Services from '../../pageComponents/services/Services';
import Partners from '../../pageComponents/Partners/Partners';

const Home: React.FC<LangProps> = ({ lang }) => {
  return (
    <>
      <FullImage src="/img/layout/home.jpg" alt="home screen" />
      <About lang={lang} variant={Variant.SHORT} />
      <Services lang={lang} variant={Variant.SHORT} />
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

export default Home;
