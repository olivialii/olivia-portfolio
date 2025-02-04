import React, { useEffect } from 'react';
import {setWhiteBackground, defaultBackground } from '../../utils';

import styles from "./SearchNEU.module.css";
//import Banner from './Banner/banner';
import Subheader from "./Subheader/subheader";
//import Details from "./Details/Details";
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
          <div> MBTA Case Study </div>
        </div>
        }
        desc= {<div>
          Creating a more intuitive app for navigating Boston
          <br/><br/>
          🚧 This page is under construction 🚧
        </div>}>
      </Subheader>

    </div>
  );
};

export default Mbta;
  