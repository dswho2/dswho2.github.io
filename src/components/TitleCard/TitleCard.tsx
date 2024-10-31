// src/components/TitleCard/TitleCard.tsx
import React, { useRef } from 'react';
import styles from './TitleCard.module.css';

const TitleCard = () => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (event: React.MouseEvent) => {
    if (cardRef.current) {
      const { offsetX, offsetY } = event.nativeEvent;
      const { clientWidth, clientHeight } = cardRef.current;
      const rotateX = ((offsetY - clientHeight / 2) / clientHeight) * 30;
      const rotateY = ((offsetX - clientWidth / 2) / clientWidth) * -30;
      cardRef.current.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    }
  };

  const handleMouseLeave = () => {
    if (cardRef.current) {
      cardRef.current.style.transform = 'rotateX(0) rotateY(0)';
    }
  };

  return (
    <div className={styles.heroContainer}>
      <div className={styles.textContent}>
        <h1 className={styles.name}>David Ho</h1>
        <p className={styles.subtitle}>professional pooper</p>
      </div>
      <div
        className={styles.imageCard}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        ref={cardRef}
      />
    </div>
  );
};

export default TitleCard;