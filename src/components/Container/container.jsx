import React from 'react';
import styles from "./container.module.css";
import { Link } from 'react-router-dom';
import { FadeIn } from '../FadeIn';


const Container = ({ title, desc, img, link }) => {
  return (
    <FadeIn
      content={
      <Link to={link}>
        <div className={styles.container}>
          <div className={styles.items}>
            <img className={styles.img} src={img} alt={title} />
            <h2>{title}</h2>
            <p>{desc}</p>
          </div>
        </div>
      </Link>
      }>
    </FadeIn>
  );
};

export default Container;