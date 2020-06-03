import React from 'react';
import styles from './SocialIcons.module.css';

const SocialIcons: React.FC = () => (
  <div className={styles.socialIcons}>
    <a
      href="https://www.facebook.com/IntuitionYachtsDesignStudio"
      className={styles.facebook + ' ' + styles.socialIconsLink}
      target="blank"
    >
      <i className="fa fa-facebook"></i>
    </a>
    <a
      href="https://www.linkedin.com/company/intuition-yachts"
      className={styles.linkedin + ' ' + styles.socialIconsLink}
      target="blank"
    >
      <i className="fa fa-linkedin"></i>
    </a>
    <a
      href="https://www.instagram.com/intuition_yachts"
      className={styles.instagram + ' ' + styles.socialIconsLink}
      target="blank"
    >
      <i className="fa fa-instagram"></i>
    </a>
    <a
      href="https://twitter.com/IYachts"
      className={styles.twitter + ' ' + styles.socialIconsLink}
      target="blank"
    >
      <i className="fa fa-twitter"></i>
    </a>
  </div>
);

export default SocialIcons;
