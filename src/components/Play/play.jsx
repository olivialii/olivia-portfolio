import React from 'react';

import styles from "./play.module.css";
import Container from '../Container/container';

const Play = () => {

    return (
    <div className={styles.Projects}>
        <Container 
          title= "Bakery Minigame Prototype" 
          desc= "Prototyping with Processing and Procreate to bring a minigame concept to life"
          img= "/assets/play/win.gif"
          link="/game">
        </Container>

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