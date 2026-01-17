import React from 'react';
import styles from "./divider.module.css";

const Divider = ({text, subtext}) => {

    return (
      <div className={styles.divider}>
        <div className={styles.content}>
          <div className={styles.text}>{text}</div>
          <div className={styles.subtext}>{subtext}</div>
        </div>
      </div>
    );
  };
  
  export default Divider;

  