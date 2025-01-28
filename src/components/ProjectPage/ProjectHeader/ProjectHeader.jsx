import React from 'react';
import styles from "./ProjectHeader.module.css";


const ProjectHeader = () => {
    return (
      <div>
        <div className={styles.ProjectTitle}>
            <div> - Work / </div> 
            <h2> SearchNEU </h2>
        </div>

        <h1> SearchNEU</h1>
        <p> desc </p>
        <img></img>
      </div>
    );
  };
  
  export default ProjectHeader;