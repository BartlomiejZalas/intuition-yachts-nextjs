import React from 'react';
import { ContentProps } from './types';
import { Variant } from '../../types/types';

export const ContentComponent: React.FC<ContentProps> = ({ variant }) => {
  return (
    <>
      <p>
        Specjalizujemy sie w projektowaniu łodzi i jachtów motorowych. Jesteśmy
        gotowi stworzyć dla Państwa zarówno sam projekt koncepcyjny jak również
        w pełni go realizować. Nasze usługi obejmują wszystko, począwszy od
        stylizacji zewnętrznej, aż po czystą architekturę morską, przy użyciu
        najwyższej technologii. Wykonywane przez nas kompleksowe projekty
        zawierają między innymi:
      </p>
      {variant === Variant.SHORT && (
        <ul>
          <li>SZKICE, KONCEPCJE</li>
          <li>ZARZĄDZANIE PROJEKTAMI oraz OBLICZENIA</li>
          <li>KONSTRUKCJE metalowe oraz kompozytowe</li>
          <li>
            WYPOSAŻENIE dobór urządzeń, elektroniki jak również materiałów
            wykończeniowych
          </li>
          <li>PROJEKTY WNĘTRZ</li>
          <li>STYLIZACJE ZEWNĘTRZNE</li>
        </ul>
      )}

      {variant === Variant.FULL && (
        <>
          <h2>SZKICE, KONCEPCJE</h2>
          <hr />
          <h2>ZARZĄDZANIE PROJEKTAMI oraz OBLICZENIA</h2>
          <hr />
          <h2>KONSTRUKCJE metalowe oraz kompozytowe</h2>
          <hr />
          <h2>
            WYPOSAŻENIE dobór urządzeń, elektroniki jak również materiałów
            wykończeniowych
          </h2>
          <hr />
          <h2>PROJEKTY WNĘTRZ</h2>
          <hr />
          <h2>STYLIZACJE ZEWNĘTRZNE</h2>
          <hr />
        </>
      )}
    </>
  );
};
