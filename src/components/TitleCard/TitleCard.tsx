import React, { useRef, useEffect } from 'react';
import title_background from '../../images/title_background.png';
import { apply3DTilt } from './tilt_effects';

const TitleCard: React.FC = () => {
  const cardRef = useRef<HTMLDivElement>(null);
  const lastTilt = useRef({ rotateX: -5, rotateY: -20 }); // Initial tilt values for a left tilt

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (cardRef.current) {
      apply3DTilt(cardRef.current, event);
      const rect = cardRef.current.getBoundingClientRect();
      const offsetX = event.clientX - rect.left;
      const offsetY = event.clientY - rect.top;
      lastTilt.current.rotateX = ((offsetY - rect.height / 2) / rect.height) * 45;
      lastTilt.current.rotateY = ((offsetX - rect.width / 2) / rect.width) * 45;
    }
  };

  const handleMouseLeave = () => {
    if (cardRef.current) {
      cardRef.current.style.transform = `perspective(500px) rotateX(${-lastTilt.current.rotateX}deg) rotateY(${lastTilt.current.rotateY}deg)`;
    }
  };

  useEffect(() => {
    if (cardRef.current) {
      // Set initial tilt to the left when the component mounts
      cardRef.current.style.transform = `perspective(500px) rotateX(${lastTilt.current.rotateX}deg) rotateY(${lastTilt.current.rotateY}deg)`;
    }
  }, []);

  // Define local styles
  const backgroundImage = `url(${title_background})`;
  const cardStyles = {
    backgroundImage,
  };

  return (
    <div className="flex items-center justify-center w-full h-screen px-12 bg-gradient-to-tr from-[#031221] to-[#19395c] gap-8">
      <div className="flex flex-col items-start justify-center flex-[0_1_35%]">
      </div>
      <div
        className="flex-[0_1_30%] max-w-[300px] aspect-square bg-cover bg-center rounded-2xl shadow-lg transition-transform duration-300"
        style={cardStyles}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        ref={cardRef}
      />
    </div>
  );
};

export default TitleCard;
