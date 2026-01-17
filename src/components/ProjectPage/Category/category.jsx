import React from 'react';
import styles from "./category.module.css";

const Category = ({category}) => {

    return (
      <div>
        <div className={styles.category}>{category}</div>
      </div>
    );
  };
  
  export default Category;

  