import React from 'react';
import styles from "./subheader.module.css";
import { FadeIn } from '../../FadeIn';


const Subheader = ({ desc, subheader}) => {

    return (
        <FadeIn
        content={
        <div>
            <div>
                <div className={styles.content}>
                  <h2 className={styles.title}> {subheader} </h2>
                  <p className={styles.desc}> {desc} </p>
                </div>
            </div>
        </div>
        }
        />
    );
  };
  
  export default Subheader;