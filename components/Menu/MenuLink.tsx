import React from 'react';
import Link from 'next/link';
import styles from './Menu.module.css';

interface Props {
  text: string;
  href: string;
  as: string;
  anchor?: string;
  active: boolean;
}

const MenuLink: React.FC<Props> = ({ text, href, as, anchor, active }) => {
  return (
    <Link href={href} as={as + (anchor ? '#' + anchor : '')}>
      <a className={styles.menuLink + (active ? ' ' + styles.aciveLink : '')}>
        {text}
      </a>
    </Link>
  );
};

export default MenuLink;
