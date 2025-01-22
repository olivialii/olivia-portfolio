import React from 'react';

import styles from "./Projects.module.css";



const Projects = () => {
  return (
    <div className={styles.Projects}>
      <div className={styles.container}>
          <div className={styles.fadingout}>
            <div className={styles.imageBox}> 
              
            </div>
          </div>
          <div className={styles.fadingout}></div>
      </div>

      <div className={styles.container}>
          <div className={styles.fadingout}></div>
          <div className={styles.fadingout}></div>
      </div>
    </div>
  );
};

export default Projects;