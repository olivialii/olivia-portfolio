import React from 'react';
import styles from "./details.module.css";

const Details = ({role, duration, team1, team2, team3, tools1, tools2}) => {

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
            <p> {team1} </p>
            <p> {team2} </p>
            <p> {team3} </p>
         
        </div>

        <div className={styles.column}>
            <p className={styles.category}>Tools</p>
            <p> {tools1} </p>
            <p> {tools2} </p>
        </div>

      </div>
      </div>
    );
  };
  
  export default Details;

  