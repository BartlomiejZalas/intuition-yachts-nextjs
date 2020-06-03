import React from 'react';
import { PROJECTS } from './projects';
import { LangProps } from '../../translations/types';
import styles from './Projects.module.css';

interface Props extends LangProps {
  id: string;
}

const Project: React.FC<Props> = ({ id, lang }) => {
  const project = PROJECTS.find((p) => p.id === id);
  const { ContentComponent } = require(`./content/Content-${id}-${lang}`);

  return (
    <section data-section="projects">
      <div className="container">
        <h1 className="sectionTitle bradleyFont">{project.title}</h1>
        <hr />
        <ContentComponent />
        <div className={styles.gallery}>
          {Array(project.images)
            .fill(0)
            .map((_, index) => (
              <div className={styles.imageBoxContainer}>
                <div className={styles.imageBox}>
                  <a href={`/img/pages/projects/${id}/${index}.jpg`}>
                    <img
                      src={`/img/pages/projects/${id}/${index}.jpg`}
                      alt={project.title}
                      className={styles.image}
                    />
                  </a>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
