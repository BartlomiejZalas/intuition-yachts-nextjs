import React from 'react';
import styles from './LoadingSpinner.module.css';

const LoadingSpinner: React.FC = () => {
  return (
    <div className={styles.ldsRing}>
      <div className={styles.ldsRingDiv}></div>
      <div className={styles.ldsRingDiv}></div>
      <div className={styles.ldsRingDiv}></div>
      <div className={styles.ldsRingDiv}></div>
    </div>
  );
};

export default LoadingSpinner;
