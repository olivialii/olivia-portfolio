import React from 'react';
import styles from "./imagetext.module.css";
import { FadeIn } from '../../FadeIn';


const Imagetext = ({ image, text, caption }) => {

    return (
        <FadeIn
        content={
            <div class={styles.content}>

              <div class={styles.imgcontent}>
                <img class={styles.image} src= {image}></img>
                <p class={styles.caption}> {caption}</p>
              </div>  
              
              <div class={styles.textContainer}>
                {text}
              </div>
            </div>
        }
        />
    );
  };
  
  export default Imagetext;