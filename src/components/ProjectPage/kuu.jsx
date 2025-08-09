import React, { useEffect } from 'react';
import {setWhiteBackground, defaultBackground } from '../../utils';

import styles from "./kuu.module.css";
import Details from './Details/details';
import Subheader from "./Subheader/subheader";
import { Link } from 'react-router-dom';


const Kuu = () => {
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
          <h2> kuu </h2>
        </div>
        }
        desc= {<div> kuu is an illustrated directory of dishes that explains its ingredients and history, in order to encourage viewers to try new foods. This was a project for an experience design class I took in Kyoto, Japan, and was inspired by some of the dishes I had there. My goal was to explore how illustrations and color could invite curiosity and evoke emotions. </div>}>
      </Subheader>

      <Details
        role="Designer"
        duration="June 2025"
        team={<div> Solo project
      </div>}
      tools={<div> Figma
        <br/> Procreate

      </div>
      
     }
      />


     <div class = {styles.spread}>
    <img class={styles.fullLengthImg} src='/assets/kuu1.png'></img>
    <img class={styles.fullLengthImg} src='/assets/kuu2.png'></img>
    <img class={styles.fullLengthImg} src='/assets/kuu3.png'></img>
    <img class={styles.fullLengthImg} src='/assets/kuu4.png'></img>  
     </div> 
     
     <br/><br/><br/>
      
    

    </div>
  );
};

export default Kuu;