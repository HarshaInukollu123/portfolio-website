// src/pages/Home.js
import React from 'react';
// import profilePic from '../assets/images/your-profile-pic.jpg';

const Home = () => {
  return (
    <section className="flex flex-col items-center justify-center h-screen text-center bg-gray-100">
      {/* <img
        src={profilePic}
        alt="Profile"
        className="w-32 h-32 rounded-full mb-4"
      /> */}
      <h1 className="text-4xl font-bold text-gray-800 mb-2">Hello, I'm Harsha!</h1>
      <p className="text-lg text-gray-600 mb-4">
        A passionate React Developer with expertise in creating seamless, interactive web applications.
      </p>
    </section>
  );
};

export default Home;
