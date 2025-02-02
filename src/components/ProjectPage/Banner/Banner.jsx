import React from 'react';
import styles from "./banner.module.css";


const Banner = ({banner, logo, other}) => {

    return (
        <div className={styles.banner}>
            <img className={styles.bannerImage} src={banner}></img>
            <img className={styles.logo} src={logo}></img>
            <img className={styles.other} src={other}></img>
        </div>
    );


    return (
        <div className={styles.banner}>
            <img className={styles.bannerImage} src='/assets/search/searchBanner.png'></img>
            <img className={styles.logo} src='/assets/search/sbLogo.png'></img>
            <img className={styles.searchDog} src='/assets/search/searchDog.png'></img>
        </div>
    );

  };
  
  export default Banner;