import { useRef, useEffect, useState } from 'react';
import strings from '../translations/strings';
import { defaultLocale } from '../translations/config';
import { useRouter } from 'next/router';
import { isLocale, Locale } from '../translations/types';

export interface UseTranslation {
  t: (key: string) => string;
  locale: string;
}

const useTranslation = (): UseTranslation => {
  const { query } = useRouter();
  const currentLang: string = query.lang as string;

  const localeUrlParam = isLocale(currentLang) ? currentLang : defaultLocale;
  const [localeState, setLocaleState] = useState(localeUrlParam);

  useEffect(() => {
    if (localeState !== localeUrlParam) {
      setLocaleState(localeUrlParam);
    }
  }, [localeUrlParam]);

  const t = (key: string) => {
    if (!strings[localeState][key]) {
      console.warn(
        `Translation '${key}' for locale '${localeState}' not found.`
      );
    }
    return strings[localeState][key] || strings[defaultLocale][key] || '';
  };

  return {
    t,
    locale: localeState,
  };
};

export default useTranslation;
