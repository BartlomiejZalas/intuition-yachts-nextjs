import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './Menu.module.css';

interface Props {
  text: string;
  href: string;
  as: string;
  anchor?: string;
}

const MenuLink: React.FC<Props> = ({ text, href, as, anchor }) => {
  const router = useRouter();
  return (
    <Link href={href} as={as + (anchor ? '#' + anchor : '')}>
      <a
        className={
          styles.menuLink +
          (router.pathname === href && !anchor ? ' ' + styles.aciveLink : '')
        }
      >
        {text}
      </a>
    </Link>
  );
};

export default MenuLink;
