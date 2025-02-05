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
          <Link class={styles.link} to={"/Projects"}> ⬅️ Work / </Link> 
          <h2> MBTA Case Study </h2>
        </div>
        }
        desc= {<div>
          Creating a fun, interactive app for exploring Boston
        </div>}>
      </Subheader>

      <div className={styles.construction}>
          🚧 This page is under construction! 🚧
      </div> <br/>
      
      <Banner 
        banner='/assets/mbta/banner.png'
      />
      

      <Details
        role="UI/UX Designer & Researcher"
        duration="February 2024 - March 2024"
        team="Solo project"
        tools={<div> Figma </div>
      }
      />

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
      
      
    

    </div>
  );
};

export default Mbta;
  