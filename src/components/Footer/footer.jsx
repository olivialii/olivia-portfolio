import React from "react";
import styles from "./footer.module.css";

export const Footer = () => {
    return (
        <div>
            <div className={styles.Footer}> 

                <u1 className={styles.Socials}>
                    
                    <li><a href="https://www.linkedin.com/in/olivia-lii" target="_blank">LINKEDIN</a></li>
                    <li><a href="mailto:li.ol@northeastern.edu">EMAIL</a></li>
                    <li><a href="https://acrobat.adobe.com/id/urn:aaid:sc:VA6C2:9a66768a-1122-42f0-bbe1-366c644eeb1a/?annonBboxWorkflow=false&viewer%21megaVerb=group-edit&filetype=application%2Fpdf" target="_blank">RESUME</a></li>
                </u1>
            </div>

            {/**
            <div className={styles.bottom}>
                <a href="https://github.com/olivial215/olivia-portfolio" target="_blank">
                <img src="/assets/github-mark.png"></img>Made w/ jsx, css, & react.</a>
            </div>
             */}
        </div>
    );
};