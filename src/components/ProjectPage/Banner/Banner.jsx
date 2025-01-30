import React from 'react';
import styles from "./banner.module.css";


const Banner = () => {

    return (
        <div className={styles.banner}>
            <img className={styles.bannerImage} src='/assets/search/searchBanner.png'></img>
            <img className={styles.logo} src='/assets/search/sbLogo.png'></img>
            <img className={styles.searchDog} src='/assets/search/searchDog.png'></img>
        </div>
    );
  };
  
  export default Banner;