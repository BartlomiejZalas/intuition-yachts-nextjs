import React, { useContext } from 'react';
import { PROJECTS } from './projects';
import { LangProps } from '../../translations/types';
import styles from './Projects.module.css';
import { LocaleContext } from '../../context/LocaleContext';

interface Props extends LangProps {
  id: string;
}

const Project: React.FC<Props> = ({ id }) => {
  const project = PROJECTS.find((p) => p.id === id);
  const { t } = useContext(LocaleContext);

  return (
    <section>
      <div className="container">
        <h1 className="sectionTitle">{project.title}</h1>
        <hr />
        <p>{t(id + '-description')}</p>
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
