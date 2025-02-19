import React, { useEffect } from 'react';
import {setWhiteBackground, defaultBackground } from '../../utils';

import styles from "./fridge.module.css";
import Details from './Details/details';
import Subheader from "./Subheader/subheader";
import { Link } from 'react-router-dom';


const Fridge = () => {
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
          <h2> Fridge. </h2>
        </div>
        }
        desc= {<div> At <a href="https://www.hackbeanpot.com/" target="_blank">Hackbeanpot</a>, I collaborated with my team to design and develop an application that would encourage community engagement. Our goal was to use game heuristics to motivate users to support communities and try new things. We created Fridge, which allows users to earn achievements and in-game incentives when they eat at local restaurants. 
        This project won <a href= "https://devpost.com/software/fridge-v9yucn" target='_blank'>Best UI/UX.</a></div>}>
      </Subheader>

      <Details
        role="Designer & Front-end Developer"
        duration="February 7-8 (48 hrs)"
        team={<div>2 Designers/ Front-end Devs
        <br/>2 Fullstack Devs
      </div>}
      tools={<div> Figma
        <br/> Photoshop
        <br/> Procreate
        <br/> JavaScript
        <br/> TailwindCSS
      </div>
     }
      />

     
        <div className="p-{50px}">
        <iframe width={"100%"} height={"500px"} src="https://embed.figma.com/deck/78B9BKtHXVkW2FRBnVXv0K/HBP-Presentation?node-id=1-33&embed-host=share&footer=false" allowfullscreen></iframe>
        </div>
   
      <br/><br/><br/>
      
    

    </div>
  );
};

export default Fridge;