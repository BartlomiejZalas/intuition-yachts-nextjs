import React, { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import styles from './ImageGallery.module.css';

interface Props {
  images: string[];
}

export const ImageGallery: React.FC<Props> = ({ images }) => {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.gallery}>
      {images.map((imageSrc, index) => (
        <div className={styles.imageBoxContainer} key={imageSrc}>
          <div className={styles.imageBox}>
            <img
              src={imageSrc}
              alt="project image"
              className={styles.image}
              onClick={() => {
                setIsOpen(true);
                setPhotoIndex(index);
              }}
            />
          </div>
        </div>
      ))}

      {isOpen && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % images.length)
          }
          animationOnKeyInput={true}
        />
      )}
    </div>
  );
};
