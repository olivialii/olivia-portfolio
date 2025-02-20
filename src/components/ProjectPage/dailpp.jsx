import React, { useEffect } from 'react';
import {setWhiteBackground, defaultBackground } from '../../utils';

import styles from "./game.module.css";
//import Banner from './Banner/banner';
import Subheader from "./Subheader/subheader";
//import Details from "./Details/Details";
import { Link } from 'react-router-dom';


const Dailp = () => {
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
          <h2> Research Assistant @ DAILP </h2>
        </div>
        }
        desc= {<div>
          Designing new features for an Indigenous digital language interface based on community needs.  
          <br/>
        </div>}>
      </Subheader>

         <div className={styles.construction}>
          🚧 This page is under construction! 🚧
          </div> <br/>
    </div>
  );
};

export default Dailp;
  