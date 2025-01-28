import React from 'react';
import styles from "./ProjectPage.module.css";
import ProjectHeader from './ProjectHeader/ProjectHeader';



const ProjectPage = () => {
    return (
      <div className={styles.ProjectPage}>
        <ProjectHeader />
      </div>
    );
  };
  
  export default ProjectPage;
  