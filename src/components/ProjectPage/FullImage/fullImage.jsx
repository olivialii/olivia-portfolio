import React from 'react';
import styles from "./fullImage.module.css";
import { FadeIn } from '../../FadeIn';


const FullImage = ({ header, image, caption }) => {

    return (
        <FadeIn
        content={
            <div className={styles.content}>
              
              {header && <div className={styles.header}>{header} </div>}

              <div className={styles.imgcontent}>
                <img className={styles.image} src= {image}></img>
                <p className={styles.caption}> {caption}</p>
              </div>

            </div>
        }
        />
    );
  };
  
  export default FullImage;