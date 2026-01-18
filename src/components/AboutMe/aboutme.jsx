import React from 'react';
import styles from "./aboutme.module.css";
import { FadeIn } from '../FadeIn';


const AboutMe = () => {
    return (
    <FadeIn
    content={ <div className={styles.container}>
            <img className={styles.me} src="/assets/me.jpg"></img>

            <div className={styles.text}>
                <h2>Hey, I'm Olivia!</h2>
                <br/><br/>
                <div>
                    I’m a third year at Northeastern University studying Design and Computer Science.
                    <br/><br/>
                    I enjoy exploring how different tools and technologies can come together to create interactive experiences for different communities. By understanding users and experimenting with new ways to bring ideas to life, I want to be able to change the way people interact with the digital world. 
                    <br/><br/>
                </div>
            </div>
        </div>}
        
      />
       

    );
};

export default AboutMe;
