import React, { useEffect } from 'react';
import {setWhiteBackground, defaultBackground } from '../../utils';

import styles from "./mbta.module.css";
import Details from './Details/details';
import Subheader from "./Subheader/subheader";
import Banner from './Banner/banner';
import { Link } from 'react-router-dom';


const Mbta = () => {
  useEffect(() => {
    setWhiteBackground(); 

    return () => {
        defaultBackground();
    };
  }, []);

  return (
    <div>

            


      <Subheader
        subheader= 
        {
        <div class={styles.ProjectTitle}>
          <Link class={styles.link} to={"/Projects"}> ⬅️ Projects / </Link> 
          <h2> MBTA Case Study </h2>
        </div>
        }
        desc= {<div>
          Creating a fun, interactive app for exploring Boston
        </div>}>
      </Subheader>


      
      <Banner 
        banner='/assets/mbta/banner.png'
      />
      
      <Subheader
        subheader= "Overview"
        desc= {<div> This case study was completed as part of my Design Process + Practices course's "Project: Intervention – Interactive", where we learned how to use the design process to fully document and realize an interactive project. My task was to create an interactive tool that improves the experience on Boston's public transportation system. </div>}
      />
    
      <Details
        role="UI/UX Designer & Researcher"
        duration="February 2024 - March 2024"
        team="Solo project"
        tools={<div> Figma </div>
      }
      />

     
        <div className="p-{50px}">
        <iframe width={"100%"} height={"500px"} src="https://embed.figma.com/deck/bDclkeQAIZNt7V8TgyR308/MBTA-slides?node-id=2-117&viewport=-18%2C106%2C0.24&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&embed-host=share&footer=false" allowfullscreen></iframe>
        </div>
   
      <br/><br/><br/>

       {/** 
      <Subheader
        subheader= "Sitemap"
        desc= {
        <div class={styles.sitemap}>  
          <img src='/assets/mbta/sitemap.png'></img>
        </div>
        }
      />


      <Subheader
        subheader= "Product Glimpse"
        desc= {
        <div class={styles.wrapper}>  
        <div class={styles.phones}>
          <img src='/assets/mbta/flow1.gif'></img>
          <img src='/assets/mbta/flow2.gif'></img>
          <img src='/assets/mbta/flow3.gif'></img>
        </div>
        </div>
        }
      />
      */}
      
    

    </div>
  );
};

export default Mbta;
  