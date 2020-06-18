import React from 'react';
import { LangProps } from '../../translations/types';
import useTranslation from '../../hooks/useTranslations';
import styles from './Projects.module.css';
import { Project, PROJECTS } from './projects';
import Link from 'next/link';

const Projects: React.FC<LangProps> = ({ lang }) => {
  const { t } = useTranslation();

  const disabledPlaceholder = (project: Project) => (
    <div className="column-1">
          <h2 className="subsectionTitle bradleyFont">{project.title}</h2>
          <img
            src={'/img/layout/comingSoon.png'}
            alt={project.title}
            className={styles.img}
          />
    </div>
  );

  const projectLayout = (project: Project) => (
    <div className="column-1">
      <Link href="/[lang]/projects/[id]" as={`/${lang}/projects/${project.id}`}>
        <a className={styles.link}>
          <h2 className="subsectionTitle bradleyFont">{project.title}</h2>
          <img
            src={'/img/pages/projects/' + project.id + '.png'}
            alt={project.title}
            className={styles.img}
          />
        </a>
      </Link>
    </div>
  );

  return (
    <section className={styles.bg} data-section="projects">
      <div className="container">
        <h1 className="sectionTitle">{t('titleProjects')}</h1>
        <hr />

        <div className="columnContainer">
          {projectLayout(PROJECTS[0])}
          {projectLayout(PROJECTS[1])}
        </div>
        <div className="columnContainer">
          {disabledPlaceholder(PROJECTS[2])}
          {projectLayout(PROJECTS[3])}
        </div>
        <div className="columnContainer">
          {projectLayout(PROJECTS[4])}
          {projectLayout(PROJECTS[5])}
        </div>
      </div>
    </section>
  );
};

export default Projects;
