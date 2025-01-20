import React from "react";

import styles from "./Intro.module.css";

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
                <a href = "" className ={styles.viewBtn}>VIEW MY WORK →</a>
            </div>
        </section>
    );
};