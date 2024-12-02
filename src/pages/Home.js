import React from 'react';
import profilePic from '../assets/profile.jpg'; // Replace with your image path
import HarshaResume from "../assets/HarshaVardhanReddy_Inukollu.pdf"; // Adjust the path if needed
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";


const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="flex items-center justify-between p-10 bg-gray-100">
        <div className="w-full md:w-1/2 p-6">
          <h1 className="text-4xl font-bold text-blue-600">Hi, I'm Harsha</h1>
          <p className="mt-4 text-gray-600 text-lg">
            I'm a skilled React JS developer with 5+ years of experience. I
            specialize in building interactive and user-friendly web
            applications. Let me take you through my work and experience!
          </p>
          <div className="mt-6 flex gap-4">
            {/* View Resume Button */}
            <a
              href={HarshaResume}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg shadow hover:bg-gray-300 transition"
            >
              View Resume
            </a>

            {/* Download Resume Button */}
            <a
              href={HarshaResume}
              download="Harsha_Resume.pdf"
              className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition"
            >
              Download Resume
            </a>
          </div>
        </div>
        <div className="w-full md:w-1/2 p-6">
          <img
            src={profilePic}
            alt="Harsha"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Career Highlights Section */}
      <section className="mt-12 px-4 text-center">
        <h2 className="text-3xl font-semibold text-blue-600">Career Highlights</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white shadow rounded-lg hover:scale-105 transition transform duration-300">
            <h3 className="text-2xl font-bold text-blue-500">5+</h3>
            <p className="mt-2 text-gray-600">Years of Experience</p>
          </div>
          <div className="p-6 bg-white shadow rounded-lg hover:scale-105 transition transform duration-300">
            <h3 className="text-2xl font-bold text-blue-500">10+</h3>
            <p className="mt-2 text-gray-600">Completed Projects</p>
          </div>
          <div className="p-6 bg-white shadow rounded-lg hover:scale-105 transition transform duration-300">
            <h3 className="text-2xl font-bold text-blue-500">15+</h3>
            <p className="mt-2 text-gray-600">Technologies Mastered</p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white px-6 md:px-16" data-aos="fade-right">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          My Approach
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-gray-100 shadow rounded-lg text-center">
            <h3 className="text-xl font-semibold text-blue-500">Understanding</h3>
            <p className="mt-2 text-gray-600">
              I prioritize understanding client requirements and expectations
              before starting any project.
            </p>
          </div>
          <div className="p-6 bg-gray-100 shadow rounded-lg text-center">
            <h3 className="text-xl font-semibold text-blue-500">Planning</h3>
            <p className="mt-2 text-gray-600">
              I create a roadmap and break tasks into achievable milestones.
            </p>
          </div>
          <div className="p-6 bg-gray-100 shadow rounded-lg text-center">
            <h3 className="text-xl font-semibold text-blue-500">Execution</h3>
            <p className="mt-2 text-gray-600">
              Combining creativity and technology to deliver high-quality
              solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-12 bg-gray-100 px-6 md:px-16" data-aos="fade-left">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Case Studies
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-white shadow rounded-lg">
            <h3 className="text-xl font-semibold text-blue-500">
              E-Commerce Platform
            </h3>
            <p className="mt-2 text-gray-600">
              Developed a scalable e-commerce platform with secure payment
              gateway integration and personalized user experiences.
            </p>
            <a
              href="#"
              className="text-blue-500 mt-4 inline-block hover:underline"
            >
              View Details &rarr;
            </a>
          </div>

          <div className="p-6 bg-white shadow rounded-lg">
            <h3 className="text-xl font-semibold text-blue-500">
              Blog Management System
            </h3>
            <p className="mt-2 text-gray-600">
              Designed and implemented a full-stack blog platform with
              moderation features and analytics.
            </p>
            <a
              href="#"
              className="text-blue-500 mt-4 inline-block hover:underline"
            >
              View Details &rarr;
            </a>
          </div>

          <div className="p-6 bg-white shadow rounded-lg">
            <h3 className="text-xl font-semibold text-blue-500">
               Financial Dashboard
            </h3>
            <p className="mt-2 text-gray-600">
               An analytics dashboard displaying financial data with charts and interactive widgets
            </p>
            <a
              href="#"
              className="text-blue-500 mt-4 inline-block hover:underline"
            >
              View Details &rarr;
            </a>
          </div>

          <div className="p-6 bg-white shadow rounded-lg">
            <h3 className="text-xl font-semibold text-blue-500">
            Event Management System
            </h3>
            <p className="mt-2 text-gray-600">
             A platform for event ticket booking with user-friendly management features.
            </p>
            <a
              href="#"
              className="text-blue-500 mt-4 inline-block hover:underline"
            >
              View Details &rarr;
            </a>
          </div>

          <div className="p-6 bg-white shadow rounded-lg">
            <h3 className="text-xl font-semibold text-blue-500">
              Sales and Inventory Management
            </h3>
            <p className="mt-2 text-gray-600">
              A web app to track sales, manage inventory, and generate reports for businesses.
            </p>
            <a
              href="#"
              className="text-blue-500 mt-4 inline-block hover:underline"
            >
              View Details &rarr;
            </a>
          </div>

        </div>
      </section>

      {/* Contact Me Section */}
      <section className="mt-12 px-4 bg-gray-100 py-12">
        <h2 className="text-3xl font-semibold text-center text-blue-600">
          Contact Me
        </h2>
        <div className="max-w-2xl mx-auto mt-8">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full p-4 border border-gray-300 rounded-lg mt-2"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-4 border border-gray-300 rounded-lg mt-2"
                placeholder="Your Email"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                className="w-full p-4 border border-gray-300 rounded-lg mt-2"
                placeholder="Your Message"
              />
            </div>
            <div className="text-center">
              <button className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-300">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="py-6 text-center">
        <div className="container mx-auto">
          <p className="text-lg">Connect with me</p>
          <div className="mt-4 flex justify-center gap-6">
            <a
              href="https://www.linkedin.com/in/harsha-inukollu-a0ab82156/"
              className="text-gray-600 hover:text-blue-500 transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={30} />
            </a>
            <a
              href="https://github.com/HarshaInukollu123"
              className="text-gray-600 hover:text-blue-500 transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={30} />
            </a>
            <a
              href="https://twitter.com/harsha"
              className="text-gray-600 hover:text-blue-500 transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter size={30} />
            </a>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default Home;
