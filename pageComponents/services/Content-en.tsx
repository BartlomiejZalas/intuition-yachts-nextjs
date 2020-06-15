import React from 'react';
import { ContentProps } from './types';
import { Variant } from '../../types/types';
import { ImageGallery } from '../../components/ImageGallery/ImageGallery';

export const ContentComponent: React.FC<ContentProps> = ({ variant }) => {
  return (
    <>
      <p>
        We specialize in Motor Boats and Yachts Design. We are ready to create
        for you both, conceptual design and fully implement it. Our services
        cover everything from exterior and interior styling to maritime
        architecture, using the highest technology. Our complex projects
        include, among others:
      </p>
      {variant === Variant.SHORT && (
        <ul>
          <li>Sketches, concepts</li>
          <li>Project management and calculations</li>
          <li>Technical drawings</li>
          <li>Metal and composite structures</li>
          <li>
            Equipment: selection of devices, electronics as well as finishing
            materials
          </li>
          <li>Interior design</li>
          <li>Exterior stylizations</li>
        </ul>
      )}

      {variant === Variant.FULL && (
        <>
          <h2>Sketches, concepts</h2>
          <hr />
          <ImageGallery
            images={[
              '/img/pages/services/0.jpg',
              '/img/pages/services/1.jpg',
              '/img/pages/services/2.jpg',
            ]}
          />

          <h2>Project management and calculations</h2>
          <hr />
          <ImageGallery
            images={[
              '/img/pages/services/3.jpg',
              '/img/pages/services/4.jpg',
              '/img/pages/services/5.jpg',
            ]}
          />

          <h2>Technical drawings</h2>
          <hr />
          <ImageGallery
            images={[
              '/img/pages/services/6.jpg',
              '/img/pages/services/7.jpg',
              '/img/pages/services/8.jpg',
            ]}
          />

          <h2>Metal and composite structures</h2>
          <hr />
          <ImageGallery
            images={[
              '/img/pages/services/9.jpg',
              '/img/pages/services/10.jpg',
              '/img/pages/services/11.jpg',
            ]}
          />

          <h2>
            Equipment: selection of devices, electronics as well as finishing
            materials
          </h2>
          <hr />
          <ImageGallery
            images={[
              '/img/pages/services/12.jpg',
              '/img/pages/services/13.jpg',
              '/img/pages/services/14.jpg',
            ]}
          />

          <h2>Interior design</h2>
          <hr />
          <ImageGallery
            images={[
              '/img/pages/services/15.jpg',
              '/img/pages/services/16.jpg',
              '/img/pages/services/17.jpg',
            ]}
          />

          <h2>Exterior stylizations</h2>
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
