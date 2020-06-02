import React from 'react';
import styles from './Contact.module.css';

export const ContentComponent: React.FC = () => {
  return (
    <>
      <p className={styles.title}>
        <div className={styles.lead}>Marta Anna Zawadzka </div>
        <div className={styles.sub}>Naval Architect &amp; Yacht Designer</div>
      </p>
      <p>
        <strong>Polska</strong>
        <br />
        Sokółki 63 <br />
        19-420 Sokółki <br />
        tel.: +48 500 204 025 <br />
        woj. warmińsko-mazurskie
        <br />
        e-mail: marta@intuition-yachts.com
      </p>
      <p>
        <strong>Hiszpania</strong>
        <br />
        Avenida Alejandro Rossello 15 2E
        <br />
        07002 Palma de Mallorca
        <br />
        Illes Balears
        <br />
        mobile: +34 604 331 861
        <br />
        e-mail: studio@intuition-yachts.com
      </p>
    </>
  );
};
