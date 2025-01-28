//Project Container Component
import React from 'react';
import styles from "./Container.module.css";
import { Link } from 'react-router-dom';

const Container = ({title, desc, img, link}) => {
    return (
      <Link to={link}>
        <div className={styles.container}>
          <div className={styles.items}>
            <img className={styles.img} src={img}></img>
            <h1> {title}</h1>
            <p>{desc}</p>
          </div>
        </div>
      </Link>
    );
};

export default Container;
