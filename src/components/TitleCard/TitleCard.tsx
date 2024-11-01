// src/components/TitleCard/TitleCard.tsx
import React, { useRef } from 'react';
import titleBackground from '../../images/title_background.png'; // Adjust path accordingly

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
    <div className="flex items-center justify-center w-full h-screen px-12 bg-gradient-to-tr from-[#071b31] to-[#0b4481] gap-8">
      <div className="flex flex-col items-start justify-center flex-[0_1_35%]"> {/* Adjusted flex-basis to 35% */}
        <h1 className="text-white text-[clamp(2.5rem,5vw,4.5rem)] leading-tight font-bold mb-4">
          David Ho
        </h1>
        <p className="text-[#a5b9d4] text-[clamp(1rem,1.5vw,1.5rem)] mb-8">
          professional pooper
        </p>
      </div>
      <div
        className="flex-[0_1_30%] max-w-[300px] aspect-square bg-cover bg-center rounded-2xl shadow-lg transition-transform duration-100"
        style={{ backgroundImage: `url(${titleBackground})` }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        ref={cardRef}
      />
    </div>
  );
};

export default TitleCard;
