import React from 'react';
import styles from "./intro.module.css";
import { FadeIn } from '../FadeIn';

export const Intro = () => {
    return (
        <FadeIn
        content={
        <section className = {styles.container}>
            <div className={styles.content}>

                <div className={styles.name}> Hi! I'm Olivia Li. </div>
                
                <p className={styles.desc}>
                I love working on fun, impactful, community-centered projects. 
                Currently @ Northeastern University pursuing a combined degree 
                in Design & Computer Science, and previously @ Akoya as a ui/ux 
                design co-op.
                </p>

                <p className={styles.subdesc}>
                I also enjoy gaming, baking, and digital art!
                </p>

            </div>

        </section>    
        }
        />
        

    );
};