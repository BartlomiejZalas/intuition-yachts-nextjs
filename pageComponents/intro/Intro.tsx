import React from 'react';
import styles from './Intro.module.css';

const Intro: React.FC = () => {
  return (
    <div className={styles.imageContainer}>
      <div className={styles.logo}>
        <div className={styles.lead}>Intuition Yachts</div>
        <div className={styles.secondary}>Design Studio</div>
      </div>
    </div>
  );
};

export default Intro;
