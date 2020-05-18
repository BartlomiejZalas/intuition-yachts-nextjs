import React from 'react';
import styles from './FullImage.module.css';

interface Props {
  src: string;
  alt: string;
}

const FullImage: React.FC<Props> = ({ src, alt }) => {
  return <div className={styles.imageContainer} />;
};

export default FullImage;
