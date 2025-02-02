import React, { useEffect } from 'react';

import styles from "./SearchNEU.module.css";
import Banner from './Banner/banner';
import Subheader from "./Subheader/Subheader";
import Details from "./Details/Details";
import { Link } from 'react-router-dom';

import { setWhiteBackground, defaultBackground } from '../../../utils/setBackground';


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
        desc= {<div></div>}>
      </Subheader>

      <Banner />

    </div>
  );
};

export default Mbta;
  