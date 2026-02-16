
import styles from './card.module.css';
import { FadeIn } from '../../FadeIn';



const Card = ({ img, number, title, desc }) => {
  return (
    <FadeIn
      content={
      
          <div className={styles.card}>
            <div className={styles.content}>

              {img && <img className={styles.image} src={img} />}

              <div className={styles.header}>
                {number && <div className={styles.number}> {number} </div>}
                <h2 className={styles.title}>{title}</h2>
              </div>

              <div className={styles.desc}>
                {desc}
              </div>
            </div>
          </div>
      }
    />
  );
};

export default Card;
