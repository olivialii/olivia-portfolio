import React from 'react';
import styles from "./listItem.module.css";

const ListItem = ({ symbol, boldtext, text }) => {
  return (
    <div className={styles.listItem}>
      <div className={styles.symbol}>{symbol}</div>
      <p className={styles.text}>
        <span className={styles.boldtext}>{boldtext}</span>{' '}
        {text}
      </p>
    </div>
  );
};
  
  export default ListItem;

  