import React from 'react';
import { PROJECTS } from './projects';
import { LangProps } from '../../translations/types';
import styles from './Projects.module.css';
import { ImageGallery } from '../../components/ImageGallery/ImageGallery';

interface Props extends LangProps {
  id: string;
}

const Project: React.FC<Props> = ({ id, lang }) => {
  const project = PROJECTS.find((p) => p.id === id);
  const { ContentComponent } = require(`./content/Content-${id}-${lang}`);
  const images: string[] = Array(project.images)
    .fill(0)
    .map((_, index) => `/img/pages/projects/${id}/${index}.jpg`);

  return (
    <section data-section="projects">
      <div className="container">
        <h1 className="sectionTitle bradleyFont">{project.title}</h1>
        <hr />
        <div className={styles.content}>
          <ContentComponent />
        </div>
        <ImageGallery images={images} />
      </div>
    </section>
  );
};

export default Project;
