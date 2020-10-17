import React from 'react';
import styles from './Contact.module.css';

export const ContentComponent: React.FC = () => {
  return (
    <>
      <p>
        <strong>Polska</strong> <br />
        ul. Jabłoniowa 20, <br />
        80-175 Gdańsk <br />
        tel.: +48 500 204 025 <br />
        woj. pomorskie <br />
        e-mail: renata@intuition-yachts.com
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
