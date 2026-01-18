import React from 'react';

import styles from "./play.module.css";
import Container from '../Container/container';


const Play = () => {

    return (
    <div className={styles.Projects}>

        <div className={styles.wrapper}>
            <img class={styles.car}src="assets/play/win.gif"></img>
            <p class={styles.imgDesc}> Prototyping with code: Minigame made with Procreate and Processing (Java)</p>
        </div>
 
       <div className={styles.wrapper}>
        <div className={styles.drawings}>
            <img src="assets/play/drawing1.png"></img>
            <img src="assets/play/drawing2.png"></img>
        </div>
        <p class={styles.imgDesc}>digital illustrations (Procreate)</p>
        </div>        
      
        <div className={styles.wrapper}>
            <img class={styles.car}src="assets/play/car.png"></img>
            <p class={styles.imgDesc}>toy car (Tinkercad)</p>
        </div>

         </div>
    );
};

export default Play;