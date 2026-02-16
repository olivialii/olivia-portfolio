import React from 'react';
import styles from "./blockintro.module.css";
import { FadeIn } from '../../FadeIn';


const BlockIntro = ({ number, title, rightside }) => {

    return (
        <FadeIn
        content={
            <div className={styles.content}>

              <div className={styles.header}>
                <p className={styles.number}> {number} </p>
                <h2 className={styles.title}> {title} </h2>
              </div>  
              
              <div className={styles.textContainer}>
                {rightside}
              </div>
            </div>
        }
        />
    );
  };
  
  export default BlockIntro;