import React from 'react';
import { Link } from 'react-router-dom';

import styles from "./intro.module.css";

export const Intro = () => {
    return (
        <section className = {styles.container}>
            <div className={styles.content}>

                <div className={styles.name}> <h1>Hi! I'm Olivia Li. </h1></div>
                
                <p className={styles.desc}>
                    I'm passionate about ui/ux design, 
                    front-end dev, prototyping, and working on fun, 
                    impactful, community-centered projects ♡
                </p>
                <Link to="/projects"> <a className ={styles.viewBtn}> VIEW MY WORK  <span>↓</span></a></Link>
            </div>
        </section>

    );
};