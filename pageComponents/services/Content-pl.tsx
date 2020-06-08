import React from 'react';
import { ContentProps } from './types';
import { Variant } from '../../types/types';
import { ImageGallery } from '../../components/ImageGallery/ImageGallery';

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
          <li>Szkice, koncepcje</li>
          <li>Zarządzanie projektami oraz obliczenia</li>
          <li>Rysunki techniczne</li>
          <li>Konstrukcje metalowe oraz kompozytowe</li>
          <li>
            Wyposażenie dobór urządzeń, elektroniki jak również materiałów
            wykończeniowych
          </li>
          <li>Projekty wnętrz</li>
          <li>Stylizacje zewnętrzne</li>
        </ul>
      )}

      {variant === Variant.FULL && (
        <>
          <h2>Szkice, koncepcje</h2>
          <hr />
          <ImageGallery
            images={[
              '/img/pages/services/0.jpg',
              '/img/pages/services/1.jpg',
              '/img/pages/services/2.jpg',
            ]}
          />

          <h2>Zarządzanie projektami oraz obliczenia</h2>
          <hr />
          <ImageGallery
            images={[
              '/img/pages/services/3.jpg',
              '/img/pages/services/4.jpg',
              '/img/pages/services/5.jpg',
            ]}
          />

          <h2>Rysunki techniczne</h2>
          <hr />
          <ImageGallery
            images={[
              '/img/pages/services/6.jpg',
              '/img/pages/services/7.jpg',
              '/img/pages/services/8.jpg',
            ]}
          />

          <h2>Konstrukcje metalowe oraz kompozytowe</h2>
          <hr />
          <ImageGallery
            images={[
              '/img/pages/services/9.jpg',
              '/img/pages/services/10.jpg',
              '/img/pages/services/11.jpg',
            ]}
          />

          <h2>
            Wyposażenie dobór urządzeń, elektroniki jak również materiałów
            wykończeniowych
          </h2>
          <hr />
          <ImageGallery
            images={[
              '/img/pages/services/12.jpg',
              '/img/pages/services/13.jpg',
              '/img/pages/services/14.jpg',
            ]}
          />

          <h2>Projekty wnętrz</h2>
          <hr />
          <ImageGallery
            images={[
              '/img/pages/services/15.jpg',
              '/img/pages/services/16.jpg',
              '/img/pages/services/17.jpg',
            ]}
          />

          <h2>Stylizacje zewnętrzne</h2>
          <hr />
          <ImageGallery
            images={[
              '/img/pages/services/18.jpg',
              '/img/pages/services/19.jpg',
              '/img/pages/services/20.jpg',
              '/img/pages/services/21.jpg',
              '/img/pages/services/22.jpg',
              '/img/pages/services/23.jpg',
            ]}
          />
        </>
      )}
    </>
  );
};
