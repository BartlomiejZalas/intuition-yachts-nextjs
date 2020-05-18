import '../styles/global.css';
import Layout from '../components/Layout/Layout';
import useTranslations from '../hooks/useTranslations';
import { LocaleContext } from '../context/LocaleContext';

export default function App({ Component, pageProps }) {
  const value = useTranslations();
  return (
    <LocaleContext.Provider value={value}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </LocaleContext.Provider>
  );
}
