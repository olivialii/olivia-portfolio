import React from "react";
import styles from "./footer.module.css";

export const Footer = () => {
    return (
        <div className={styles.Footer}> 
            <div className={styles.Name}>olivia li</div>
            <u1 className={styles.Socials}>
                
                <li><a href="https://www.linkedin.com/in/olivia-lii" target="_blank">LINKEDIN</a></li>
                <li><a href="#email">EMAIL</a></li>
                <li><a href="#resume">RESUME</a></li>
            </u1>
        </div>
    );
};