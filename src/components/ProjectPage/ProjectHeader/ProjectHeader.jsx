import React from 'react';
import styles from "./ProjectHeader.module.css";
import { Link } from 'react-router-dom';


const ProjectHeader = () => {

    return (
      <div>
        <div className={styles.header}>
            <div className={styles.ProjectTitle}>
                <Link to={"/Projects"}> - Work / </Link> 
                <h2> SearchNEU </h2>
            </div>
            <p className={styles.desc}> SearchNEU is a comprehensive tool that helps Northeastern students search for course information, simplifying the course registration process. </p>
        </div>

        <img className={styles.banner} src='/assets/searchBanner.png'></img>
        
      </div>
    );
  };
  
  export default ProjectHeader;