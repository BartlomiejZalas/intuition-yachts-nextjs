import { locales } from '../../translations/config';
import { LangProps } from '../../translations/types';
import FullImage from '../../components/FullImage/FullImage';
import About from '../../pageComponents/about/About';
import { Variant } from '../../types/types';
import Services from '../../pageComponents/services/Services';
import Partners from '../../pageComponents/partners/Partners';
import Projects from '../../pageComponents/projects/Projects';
import Contact from '../../pageComponents/contact/Contact';

const Home: React.FC<LangProps> = ({ lang }) => {
  return (
    <>
      <FullImage src="/img/layout/home.jpg" alt="home screen" />
      <About lang={lang} variant={Variant.SHORT} />
      <Services lang={lang} variant={Variant.SHORT} />
      <Projects lang={lang} />
      <Partners lang={lang} />
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

export default Home;
