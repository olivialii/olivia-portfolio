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
          link="/">
        </Container>
    </div>
    );
};

export default Play;