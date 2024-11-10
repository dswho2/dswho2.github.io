import React from 'react';
// import TitleCard from '../components/TitleCard/TitleCard';
import pfp from '../images/pfp.png';

const Home = () => {
  return (
    <div className="flex justify-center lg:justify-start w-full">
      <div className="max-w-md w-auto rounded-3xl overflow-hidden shadow-2xl">
        {/* <TitleCard /> */}
        <img
          src={pfp}
          alt="pfp"
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  );
};

export default Home;
