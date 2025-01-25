//Project Container Component
import React from 'react';
import styles from "./Container.module.css";

const Container = ({title, desc, img}) => {
    return (
      <div className={styles.container}>
        <div className={styles.items}>
          <img className={styles.img} src={img}></img>
          <h1> {title}</h1>
          <p>{desc}</p>
        </div>
      </div>
    );
};

export default Container;
