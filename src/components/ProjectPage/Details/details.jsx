import React from 'react';
import styles from "./details.module.css";
import Category from '../Category/category';
const Details = ({role, duration, team, tools}) => {

    return (
        <div className={styles.Section}>
      <div className={styles.Details}>

        <div className={styles.column}>
            <Category category='TIMELINE'/>
            <p> {duration} </p>
        </div>

        <div className={styles.column}>
            <Category category='ROLE'/>
            <p> {role} </p>
        </div>

        <div className={styles.column}>
            <Category category='FOR'/>
            <p> {tools} </p>
        </div>



        <div className={styles.column}>
            <Category category='WITH'/>
            <p> {team} </p>
         
        </div>



      </div>
      </div>
    );
  };
  
  export default Details;

  