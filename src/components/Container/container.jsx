import React from 'react';
import styles from "./container.module.css";
import { Link } from 'react-router-dom';
import { FadeIn } from '../FadeIn';


const Container = ({ title, desc, img, hoverImg, link }) => {
  return (
    <FadeIn
      content={
        <Link to={link}>
          <div
            className={styles.container}
            style={{ "--hover-img": `url(${hoverImg})` }}
          >
            <div className={styles.items}>

                <h2>{title}</h2>
                <p className={styles.desc}>{desc}</p>

              <img className={styles.img} src={img} alt={title} />
            </div>
          </div>
        </Link>
      }
    />
  );
};

export default Container;