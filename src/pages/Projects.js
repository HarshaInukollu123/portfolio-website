// src/pages/Projects.js
import React from 'react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Blog Platform',
      description: 'A platform for creating, editing, and managing blogs with user authentication and role-based access control.',
      github: 'https://github.com/HarshaInukollu123/blog-app',
      demo: 'https://blog-app-mu-five-16.vercel.app/', // Add the live demo link when deployed
    },
    {
      id: 2,
      title: 'E-commerce Website',
      description: 'A responsive online shopping platform with product management, cart, and checkout functionalities.',
      github: 'https://github.com/HarshaInukollu123/ecomsite',
      demo: 'https://ecomsite-pearl.vercel.app/',
    },
    {
      id: 3,
      title: 'Financial Dashboard',
      description: 'A data visualization dashboard showcasing financial metrics, charts, and real-time analytics.',
      github: 'https://github.com/HarshaInukollu123/finance-app',
      demo: 'https://finance-app-iota-azure.vercel.app/',
    },
    {
      id: 4,
      title: 'Sales and Inventory Management System',
      description: 'A robust system for managing inventory, tracking sales, and generating insightful reports.',
      github: 'https://github.com/HarshaInukollu123/sales-inventory',
      demo: 'https://sales-inventory-eosin.vercel.app/',
    },
    {
      id: 5,
      title: 'Event Management and Ticket Booking System',
      description: 'A streamlined event management platform with online ticket booking and attendee tracking.',
      github: 'https://github.com/HarshaInukollu123/event-management',
      demo: 'https://event-management-beta-eosin.vercel.app/',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <h1 className="text-3xl font-bold text-center mb-8">Projects</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow"
          >
            <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
            <p className="text-gray-700 mb-4">{project.description}</p>
            <div className="flex space-x-4">
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
              >
                Live Demo
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-900 transition"
              >
                View on GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
