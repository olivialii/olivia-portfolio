import React from 'react';
import styles from "./imagetext.module.css";
import { FadeIn } from '../../FadeIn';


const Imagetext = ({ header, image, text, caption }) => {

    return (
        <FadeIn
        content={

            <div className={styles.content}>
               {header && <div className={styles.header}>{header} </div>}
               
            <div className={styles.imgtext}>

              <div className={styles.imgcontent}>
                <img className={styles.image} src= {image}></img>
                <p className={styles.caption}> {caption}</p>
              </div>  
              
              <div className={styles.textContainer}>
                {text}
              </div>
            </div>
            </div>
        }
        />
    );
  };
  
  export default Imagetext;