// src/pages/Home.tsx
import React from 'react';
// import TitleCard from '../components/TitleCard/TitleCard';
import pfp from '../images/pfp.png';

const Home = () => {
  return (
    <div className="max-w-lg">
      <div className="rounded-3xl overflow-hidden shadow-2xl">
        {/* <TitleCard /> */}
        <img
          src={pfp}
          alt="pfp"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Home;