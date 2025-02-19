import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./intro.module.css";
import { Sticker } from '../Sticker/sticker';
import { FadeIn } from '../FadeIn';

export const Intro = () => {
    return (
        <FadeIn
        content={
        <section className = {styles.container}>
            <div className={styles.content}>

                <div className={styles.name}> <h1>Hi! I'm 
                    <span className={styles.olivia}> Olivia Li. </span> </h1></div>
                
                <p className={styles.desc}>
                    I'm passionate about ui/ux design, 
                    front-end dev, prototyping, and working on fun, 
                    impactful, community-centered projects. 
                </p>
                <Link to="/projects"> <a className ={styles.viewBtn}> View my work <span>↓</span></a></Link>

            <Sticker
            img="/assets/play/cat-sticker.svg"
            initialX='59vw'
            initialY='49%'/>
            </div>

        </section>    
        }
        />
        

    );
};