import React from 'react';
import { PROJECTS } from './projects';
import { LangProps } from '../../translations/types';
import styles from './Projects.module.css';

interface Props extends LangProps {
  id: string;
}

const Project: React.FC<Props> = ({ id, lang }) => {
  const project = PROJECTS.find((p) => p.id === id);

  return (
    <section>
      <div className="container">
        <h1 className="sectionTitle">{project.title}</h1>
        <hr />
        <img
          src={'/img/pages/projects/' + id + '.png'}
          alt={project.title}
          className={styles.imgBig}
        />
      </div>
    </section>
  );
};

export default Project;
