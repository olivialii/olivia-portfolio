import React from 'react';
import { defaultBackground } from '../../utils';

import styles from "./projects.module.css";
import Container from '../Container/container';


const Projects = () => {
  
  return (
    <div className={styles.Projects}>
      <Container 
        title= "UX Designer @ SearchNEU" 
        desc= "Enhancing student lives through mobile redesigns that simplify the Northeastern's registration process"
        img= "/assets/search/searchPreview.png"
        link="/SearchNEU">
      </Container>

      <Container 
        title= "MBTA Case Study" 
        desc= "Creating a more intuitive app for navigating Boston's public transportation system"
        link="/Mbta">
      </Container>

      <Container 
        title= "Research Assistant @ DAILP" 
        desc= "Designing new features for an Indigenous digital language interface based on community needs">
      </Container>
    </div>
  );
};

export default Projects;
