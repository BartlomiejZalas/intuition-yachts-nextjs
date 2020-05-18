import React, {useEffect} from 'react';
import { getInitialLocale } from '../translations/getInitialLocal';

const Index: React.FC = () => {
  useEffect(() => {
    window.location.replace(`/${getInitialLocale()}`)
  })
  return null;
}

export default Index;