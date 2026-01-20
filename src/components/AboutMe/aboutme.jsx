import React from 'react';
import styles from "./aboutme.module.css";
import { FadeIn } from '../FadeIn';


const AboutMe = () => {
    return (
    <FadeIn
    content={ <div className={styles.container}>
            <img className={styles.me} src="/assets/me2.png"></img>

            <div className={styles.text}>
                <h2>Hey, I'm Olivia!</h2>
                <br/>
                <div>
                I’m a junior at Northeastern University majoring in Design and Computer Science. I love working on projects that serve diverse communities. 
                    <br/><br/>
                    Growing up in Brooklyn, NY, I learned early on the importance of community, creativity, and listening to different perspectives. Now, I carry those values into how I approach design: collaborating with users, experimenting with new ideas, collecting feedback, and creating digital experiences that make everyday life a little more enjoyable.
                    <br/><br/>
                    Outside of UX/UI and product design, I’m picking up more analog hobbies. Current lineup: photography, sketching, and baking. Open to suggestions!
                </div>
            </div>
        </div>}
        
      />
       

    );
};

export default AboutMe;
