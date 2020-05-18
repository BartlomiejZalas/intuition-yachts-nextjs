import React, { useContext } from 'react';
import styles from './Menu.module.css';
import Link from 'next/link';
import { locales } from '../../translations/config';
import { LocaleContext } from '../../context/LocaleContext';
import { useRouter } from 'next/router';
import { Locale } from '../../translations/types';

const Menu: React.FC = () => {
  const { t, locale } = useContext(LocaleContext);
  const router = useRouter();

  const getLocalizedPath = (locale: Locale) => {
    const regex = new RegExp(`^/(${locales.join('|')})`);
    const localizedPath = router.asPath.replace(regex, `/${locale}`);
    return localizedPath;
  };

  return (
    <div className={styles.menu}>
      <div className="container">
        <div className={styles.content}>
          <Link href="/[lang]" as={`/${locale}`}>
            <a className={styles.logoLink}>
              <div className={styles.logo}>
                <div className={styles.lead}>Intuition Yachts</div>
                <div className={styles.secondary}>Design Studio</div>
              </div>
            </a>
          </Link>
          <div className={styles.links}>
            <ul>
              <li>
                <Link href="/[lang]/about" as={`/${locale}/about`}>
                  <a
                    className={
                      router.pathname === `/[lang]/about`
                        ? styles.active
                        : undefined
                    }
                  >
                    {t('menuAbout')}
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/[lang]/services" as={`/${locale}/services`}>
                  <a>{t('menuServices')}</a>
                </Link>
              </li>
              <li>
                <Link href="/[lang]/projects" as={`/${locale}/projects`}>
                  <a>{t('menuProjects')}</a>
                </Link>
              </li>
              <li>
                <Link href="/[lang]/partners" as={`/${locale}/partners`}>
                  <a>{t('menuPartners')}</a>
                </Link>
              </li>
              <li>
                <Link href="/[lang]/contact" as={`/${locale}/contact`}>
                  <a>{t('menuContact')}</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.langMenu}>
            <ul>
              {locales.map((l) => (
                <li key={l}>
                  <Link href={router.pathname} as={getLocalizedPath(l)}>
                    <a className={locale === l ? styles.activeLang : undefined}>
                      {l}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
