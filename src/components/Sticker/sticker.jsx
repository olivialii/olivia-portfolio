import React, { useEffect, useRef } from "react";
import styles from "./sticker.module.css";

export const Sticker = ({ img, alt = "Sticker", initialX, initialY}) => {
  const stickerRef = useRef(null);

  useEffect(() => {
    const sticker = stickerRef.current;
    if (!sticker) return;

    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

    const dragMouseDown = (e) => {
      e.preventDefault();
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      document.onmousemove = elementDrag;
    };

    const elementDrag = (e) => {
      e.preventDefault();
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      sticker.style.top = sticker.offsetTop - pos2 + "px";
      sticker.style.left = sticker.offsetLeft - pos1 + "px";
    };

    const closeDragElement = () => {
      document.onmouseup = null;
      document.onmousemove = null;
    };

    sticker.onmousedown = dragMouseDown;

    return () => {
      sticker.onmousedown = null;
    };
  }, []);

  return (
    <div ref={stickerRef} 
        className={styles.sticker}
        style={{ top: initialY, left: initialX}}>
      <img src={img} alt={alt} className={styles.stickerImg} />
    </div>
  );
};