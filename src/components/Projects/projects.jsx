import React from 'react';

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
        desc= "Designing a fun, interactive app to enhance the experience of exploring Boston using public transportation"
        img="/assets/mbta/mbtaPreview.png"
        link="/Mbta">
      </Container>

      <Container 
        title= "Research Assistant @ DAILP" 
        desc= "Designing new features for an Indigenous digital language interface based on community needs"
        img= "/assets/dailp/dailpPreview.png "
        link="/DAILP"
        >
      </Container>

      <Container 
        title= "Fridge." 
        desc= "Gamifying the experience of supporting local restaurants through an interactive mobile webapp"
        img="/assets/fridge.png"
        link="/Fridge">
      </Container>
      

    </div>
  );
};

export default Projects;
