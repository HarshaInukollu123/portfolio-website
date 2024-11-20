import React from 'react';
import profilePic from '../assets/profile.jpg'; // Replace with your image path
import HarshaResume from "../assets/HarshaVardhanReddy_Inukollu.pdf"; // Adjust the path if needed
import Highlights from './Highlights';


const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-blue-200 text-gray-800">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center gap-8 px-4">
        {/* Image */}
        <div className="w-40 h-40 md:w-60 md:h-60">
          <img
            src={profilePic}
            alt="Harsha Profile"
            className="w-full h-full rounded-full shadow-lg"
          />
        </div>

        {/* Introduction */}
        <div className="text-center md:text-left max-w-lg">
          <h1 className="text-3xl md:text-5xl font-bold">
            Hi, I'm <span className="text-blue-500">Harsha</span>
          </h1>
          <p className="mt-4 text-lg">
            A passionate Full Stack Developer specializing in building scalable
            and user-friendly web applications. Let's build something amazing
            together!
          </p>
          <div className="mt-6 flex gap-4 justify-center md:justify-start">
            {/* View Resume */}
            <a
              href={HarshaResume}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg shadow hover:bg-gray-300 transition"
            >
              View Resume
            </a>

            {/* Download Resume */}
            <a
              href={HarshaResume}
              download="Harsha_Resume.pdf"
              className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>

      {/* Highlights Section */}
      <Highlights/>
      
    </div>
  );
};

export default Home;
