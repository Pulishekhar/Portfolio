// src/components/Home.jsx
import React from 'react';

function Home() {
  return (
    <section
      id="home"
      className="h-screen flex flex-col items-center justify-center bg-gray-900 text-white bg-cover bg-center"
      style={{
        backgroundImage: "url('/R.jpg')",  // Path to your image in public folder
      }}
    >
      <div className=" p-8 rounded-md text-center">
        <h1 className="text-5xl font-bold">PULISHEKHAR MULINTI</h1>
        <p className="text-xl mt-4">A Passionate Developer</p>
      </div>
    </section>
  );
}

export default Home;
