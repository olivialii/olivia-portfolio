import React from 'react';

import styles from "./play.module.css";
import Container from '../Container/container';


const Play = () => {

    return (
    <div className={styles.Projects}>

        <div className={styles.wrapper}>
        <div className={styles.drawings}>
            <img src="assets/play/win.gif"></img>
            
            <img src="assets/play/car.png"></img>
        </div>
        <p class={styles.imgDesc}> left: minigame, prototyping with code (Processing & Procreate)<br/> right: toy car (tinkercad)</p>
        </div>     
 
       <div className={styles.wrapper}>
        <div className={styles.drawings}>
            <img src="assets/play/drawing1.png"></img>
            <img src="assets/play/drawing2.png"></img>
        </div>
        <p class={styles.imgDesc}>digital illustrations (Procreate)</p>
        </div>        

         </div>
    );
};

export default Play;