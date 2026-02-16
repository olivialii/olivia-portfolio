import styles from './imageCaption.module.css';

const ImageCaption = ({img, caption }) => {
  return (
    <div className={styles.container}>
      <img src={img} alt={caption} className={styles.image} />
      {caption && <p className={styles.caption}>{caption}</p>}
    </div>
  );
};

export default ImageCaption;
