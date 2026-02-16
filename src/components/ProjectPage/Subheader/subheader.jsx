
import styles from "./subheader.module.css";
import { FadeIn } from '../../FadeIn';
import { Link } from 'react-router-dom';


const Subheader = ({ desc, subheader}) => {

    return (
        <FadeIn
        content={
        <div className={styles.content}>

         <div>
            <Link class={styles.link} to={"/Projects"}> PROJECTS </Link> 
            <h2 className={styles.title}> {subheader} </h2>
        </div>
                  
        <p className={styles.desc}> {desc} </p>
        </div>
        }
        />
    );
  };
  
  export default Subheader;