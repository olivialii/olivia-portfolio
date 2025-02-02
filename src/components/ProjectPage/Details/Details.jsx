import React from 'react';
import styles from "./details.module.css";

const Details = ({role, duration, team, tools}) => {

    return (
        <div className={styles.Section}>
      <div className={styles.Details}>
        <div className={styles.column}>
            <p className={styles.category}>Role</p>
            <p> {role} </p>
        </div>

        <div className={styles.column}>
            <p className={styles.category}>Duration</p>
            <p> {duration} </p>
        </div>

        <div className={styles.column}>
            <p className={styles.category}>Team</p>
            <p> {team} </p>
         
        </div>

        <div className={styles.column}>
            <p className={styles.category}>Tools</p>
            <p> {tools} </p>
        </div>

      </div>
      </div>
    );
  };
  
  export default Details;

  