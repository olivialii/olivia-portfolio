import React from 'react';
import { Link } from 'react-router-dom';

import styles from "./intro.module.css";

export const Intro = () => {
    return (
        <section className = {styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}> olivia li</h1>
                <p className={styles.desc}>
                    is a designer who is passionate about: ui/ux, 
                    front-end dev, prototyping, and working on fun, 
                    impactful, community-centered projects ♡
                </p>
                <Link to="/projects"> <a className ={styles.viewBtn}> VIEW MY WORK  <span>↓</span></a></Link>
            </div>
        </section>

    );
};