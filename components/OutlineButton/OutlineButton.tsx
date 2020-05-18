import React from 'react';
import Link from 'next/link';
import styles from './OutlineButton.module.css';

interface Props {
  href: string;
  as: string;
  text: string;
}

const OutlineButton: React.FC<Props> = ({ href, as, text }) => {
  return (
    <div className={styles.buttonContainer}>
      <Link href={href} as={as}>
        <a className={styles.button}>{text}</a>
      </Link>
    </div>
  );
};

export default OutlineButton;
