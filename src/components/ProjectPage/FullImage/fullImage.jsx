import React from 'react';
import styles from "./fullImage.module.css";
import { FadeIn } from '../../FadeIn';


const FullImage = ({ image, caption }) => {

    return (
        <FadeIn
        content={
            <div class={styles.content}>
              <img class={styles.image} src= {image}></img>
              <p class={styles.caption}> {caption}</p>
            </div>
        }
        />
    );
  };
  
  export default FullImage;