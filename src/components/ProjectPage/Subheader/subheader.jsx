import React from 'react';
import styles from "./subheader.module.css";
import { FadeIn } from '../../FadeIn';


const Subheader = ({number, desc, subheader}) => {

    return (
        <FadeIn
        content={
        <div>
            <div className={styles.content}>

                
                <div className={styles.number}> {number} </div> 
                
                <div>
                  <h2> {subheader} </h2>
                  <p className={styles.desc}> {desc} </p>
                </div>

            </div>
        </div>
        }
        />
    );
  };
  
  export default Subheader;