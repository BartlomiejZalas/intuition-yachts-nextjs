import React from 'react';
import { UseTranslation } from '../hooks/useTranslations';
import { defaultLocale } from '../translations/config';

export const LocaleContext = React.createContext<UseTranslation>({
  t: () => null,
  locale: defaultLocale,
});
