import React from 'react';

import styles from "./projects.module.css";
import Container from '../Container/container';
import { Intro } from '../Intro/intro';


const Projects = () => {
 
  return (

    <div className={styles.Projects}>
      <Intro />



      <Container 
        title= "SearchNEU" 
        desc= "Simplifying how Northeastern students search for courses on mobile"
        img= "/assets/search/searchneu.png"
        hoverImg = "/assets/search/bg.png"
        link="/SearchNEU">
      </Container>

      <Container 
        title= "MyCharlie" 
        desc= "Changing the way MBTA riders explore Boston"
        img="/assets/mbta/mycharlie.png"
        hoverImg = "/assets/mbta/bg.png"
        link="/Mbta">
      </Container>      
      
      <Container 
        title= "Akoya" 
        desc= "Enhancing developer and admin onboarding & dashboard experiences"
        img= "/assets/akoya/akoya.png"
        hoverImg = "/assets/akoya/bg.png"
        link="/Akoya">
      </Container>

      {/*  
      <Container 
        title= "eddy" 
        desc= "Designing a project proposal that connects elementary school students with peers through gamified interactions"
        img="/assets/eddy.png"
        link="/Eddy">
      </Container>
      */}

      {/*  
      <Container 
        title= "kuu" 
        desc= "Illustrating food to provide cultural context and invite curiosity and exploration of different dishes"
        img="/assets/kuu.png"
        link="/Kuu">
      </Container>
      */}

      {/*  
      <Container 
        title= "Fridge." 
        desc= "Gamifying the experience of supporting local restaurants through an interactive mobile webapp"
        img="/assets/fridge.png"
        link="/Fridge">
      </Container>
      */}

      {/* 
      <Container 
        title= "Research Assistant @ DAILP" 
        desc= "Designing new features for an Indigenous digital language interface based on community needs"
        img= "/assets/dailp/dailpPreview.png "
        link="/DAILP"
        >
      </Container>
      */}

    </div>
  );
};

export default Projects;
