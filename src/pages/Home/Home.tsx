// src/pages/Home/Home.tsx
import React from 'react';
import TitleCard from '../../components/TitleCard/TitleCard';

const Home = () => {
  return (
    <div className="flex flex-col w-full min-h-screen overflow-x-hidden">
      <section id="home" className="w-full min-h-screen flex justify-center items-center scroll-mt-16">
        <TitleCard />
      </section>
    </div>
  );
};

export default Home;
