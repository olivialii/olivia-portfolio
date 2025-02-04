import React, { useEffect } from 'react';
import {setWhiteBackground, defaultBackground } from '../../utils';

import styles from "./game.module.css";
//import Banner from './Banner/banner';
import Subheader from "./Subheader/subheader";
//import Details from "./Details/Details";
import { Link } from 'react-router-dom';


const Game = () => {
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
          <div> Bakery Minigame Prototype </div>
        </div>
        }
        desc= {<div>
          Prototyping with Processing to bring a mini game concept to life. 
          <br/><br/><br/>
          <div>
          🚧 This page is under construction 🚧
          </div>
        </div>}>
      </Subheader>

    </div>
  );
};

export default Game;
  