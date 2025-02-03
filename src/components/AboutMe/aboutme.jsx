import React from 'react';
import styles from "./aboutme.module.css";


const AboutMe = () => {
    return (
        <div className={styles.container}>
            <img className={styles.me} src="/assets/me.png"></img>

            <div className={styles.text}>
                <h2>Hey, I'm Olivia!</h2>
                <br/><br/>
                <div>
                    I’m from Brooklyn, NY, and I’m a second year at Northeastern University studying CS + Design 🩷
                    <br/><br/>
                    I’m passionate about exploring how different tools and technologies can come together to create interactive experiences for different communities. By understanding users and experimenting with new ways to bring ideas to life, I want to be able to change the way people interact with the digital world. 
                    <br/><br/>
                    Beyond that, I’m always looking for new ways to learn and grow, whether it’s through creative projects or just diving into something unfamiliar. In my free time, you’ll probably find me playing video games, drawing, trying out new recipes, or wandering the city in search of the perfect cafe. ☕️
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
