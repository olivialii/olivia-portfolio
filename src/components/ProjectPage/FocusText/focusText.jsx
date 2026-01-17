import React from 'react';
import styles from "./focusText.module.css";

const FocusText = ({text}) => {

    return (
      <div>
        <p className={styles.text}>{text}</p>
      </div>
    );
  };
  
  export default FocusText;

  