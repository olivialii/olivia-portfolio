import React from 'react';

import styles from "./Projects.module.css";
import Container from '../Container/Container';

const Projects = () => {
  return (
    <div className={styles.Projects}>
      <Container 
        title= "UX Designer @ SearchNEU" 
        desc= "Enhancing student lives through mobile redesigns that simplify the Northeastern's registration process"
        img= "assets/searchPreview.png"
        link="/ProjectPage">
      </Container>

      <Container 
        title= "MBTA Case Study" 
        desc= "Creating a more intuitive app for navigating Boston's public transportation system">
      </Container>

      <Container 
        title= "Research Assistant @ DAILP" 
        desc= "Designing new features for an Indigenous digital language interface based on community needs">
      </Container>
    </div>
  );
};

export default Projects;
