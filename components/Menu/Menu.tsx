import React, { useContext, useEffect, useState } from 'react';
import styles from './Menu.module.css';
import Link from 'next/link';
import { locales } from '../../translations/config';
import { LocaleContext } from '../../context/LocaleContext';
import { useRouter } from 'next/router';
import { Locale } from '../../translations/types';
import MenuLink from './MenuLink';
import throttle from 'lodash.throttle';

const Menu: React.FC = () => {
  const { t, locale } = useContext(LocaleContext);
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const getLocalizedPath = (locale: Locale) => {
    const regex = new RegExp(`^/(${locales.join('|')})`);
    const localizedPath = router.asPath.replace(regex, `/${locale}`);
    return localizedPath;
  };

  const [currentSection, setCurrentSection] = useState<string | null>(null);

  const isVisible = (element: Element) => {
    const top = element.getBoundingClientRect().top;
    const sectionHeight = element.getBoundingClientRect().height;
    const viewportHeight = window.innerHeight;
    const isVisible =
      top + (sectionHeight - viewportHeight) >= 0 && top < viewportHeight;
    return isVisible;
  };

  const onScroll = throttle(() => {
    const sections = document.querySelectorAll('[data-section]');
    const visibleSection = Array.from(sections)
      .filter(isVisible)
      .map((el) => el.getAttribute('data-section'));
    const sectionFromUrl = router.pathname.split('/')[2];

    if (visibleSection.length > 0) {
      setCurrentSection(visibleSection[0]);
    } else if (sectionFromUrl) {
      setCurrentSection(sectionFromUrl);
    } else {
      setCurrentSection(null);
    }
  }, 250);

  useEffect(() => {
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  });

  return (
    <div className={styles.menu}>
      <div className="container">
        <div className={open ? '' : styles.content}>
          <div className={styles.topBar}>
            <Link href="/[lang]" as={`/${locale}`}>
              <a className={styles.logoLink}>
                <div className={styles.logo}>
                  <div className={styles.lead}>Intuition Yachts</div>
                  <div className={styles.secondary}>Design Studio</div>
                </div>
              </a>
            </Link>

            <div className={styles.mobileMenu}>
              <button
                className={styles.mobileMenuIcon}
                onClick={() => setOpen((currnet) => !currnet)}
              >
                <i className="fa fa-bars fa-2x"></i>
              </button>
            </div>
          </div>
          <div className={styles.links + (open ? ' ' + styles.opened : '')}>
            <ul>
              <li>
                <MenuLink
                  text={t('menuAbout')}
                  href="/[lang]/about"
                  as={`/${locale}/about`}
                  active={currentSection === 'about'}
                />
              </li>
              <li>
                <MenuLink
                  text={t('menuServices')}
                  href="/[lang]/services"
                  as={`/${locale}/services`}
                  active={currentSection === 'services'}
                />
              </li>
              <li>
                <MenuLink
                  text={t('menuProjects')}
                  href="/[lang]/projects"
                  as={`/${locale}/projects`}
                  active={currentSection === 'projects'}
                />
              </li>
              <li>
                <MenuLink
                  text={t('menuPartners')}
                  href="/[lang]/partners"
                  as={`/${locale}/partners`}
                  active={currentSection === 'partners'}
                />
              </li>
              <li>
                <MenuLink
                  text={t('menuContact')}
                  href="/[lang]/contact"
                  as={`/${locale}/contact`}
                  active={currentSection === 'contact'}
                />
              </li>
            </ul>
          </div>
          <div className={styles.langMenu + (open ? ' ' + styles.opened : '')}>
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
