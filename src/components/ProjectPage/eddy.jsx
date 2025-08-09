import React, { useEffect } from 'react';
import {setWhiteBackground, defaultBackground } from '../../utils';

import styles from "./eddy.module.css";
import Details from './Details/details';
import Subheader from "./Subheader/subheader";
import { Link } from 'react-router-dom';


const Eddy = () => {
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
          <h2> eddy </h2>
        </div>
        }
        desc= {<div> Eddy is a project proposal addressing disparities in U.S. primary education by connecting students with peers from diverse backgrounds through gamified interactions. This was my final project for Interaction Design Principles, which centered around designing solutions for sustainable development goals. </div>}>
      </Subheader>

      <Details
        role="Designer & Researcher"
        duration="April-May 2025"
        team={<div> 4 Designer & Researchers
      </div>}
      tools={<div> Figma
        <br/> Illustrator
       

       
      </div>
      
     }
      />

      <Subheader
        subheader= "Overview"
        desc= {<div>As a designer, I created the design system, branding, illustrations, and UI/UX design, ensuring alignment with my team’s research. We presented the project to a panel of five experienced designers for feedback. </div>}
      />


        <div className="p-{50px}">
        <iframe width={"100%"} height={"500px"} src="https://embed.figma.com/deck/dBzfwwxy7PXcnB5tCfqhzg/iXD-final-project-2--3---Eddy---Jayden--Saanvi--Alissa--Olivia?node-id=1-33&embed-host=share&footer=false" allowfullscreen></iframe>
        </div>
   
      <br/><br/><br/>
      
    

    </div>
  );
};

export default Eddy;