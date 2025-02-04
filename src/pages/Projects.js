// src/pages/Projects.js
import React from 'react';
import blogImage from "../assets/blog-platform.jpg"
import ecommerceImage from "../assets/ecommerce-platform.jpg"
import financialImage from "../assets/financial dashboard.jpg"
import salesImage from "../assets/sales and inventory.jpg"
import eventImage from "../assets/ticket booking system.jpg"

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Blog Platform',
      description: 'A comprehensive e-commerce platform designed to cater to a wide range of users, offering an intuitive and seamless shopping experience. Key features include real-time inventory management to prevent overselling, a secure and user-friendly payment gateway supporting multiple payment methods,and personalized product recommendations powered by a machine learning model. The platform boasts a responsive design, advanced search and filtering options, and a detailed order tracking system to enhance user engagement and satisfaction. This project demonstrates expertise in full-stack development and integration of third-party APIs for payment and shipping',
      github: 'https://github.com/HarshaInukollu123/blog-app',
      demo: 'https://blog-app-mu-five-16.vercel.app/', // Add the live demo link when deployed
      image: blogImage
    },
    {
      id: 2,
      title: 'E-commerce Website',
      description: 'A comprehensive e-commerce platform designed to cater to a wide range of users, offering an intuitive and seamless shopping experience. Key features include real-time inventory management to prevent overselling, a secure and user-friendly payment gateway supporting multiple payment methods, and personalized product recommendations powered by a machine learning model. The platform boasts a responsive design, advanced search and filtering options, and a detailed order tracking system to enhance user engagement and satisfaction. This project demonstrates expertise in full-stack development and integration of third-party APIs for payment and shipping.',
      github: 'https://github.com/HarshaInukollu123/ecomsite',
      demo: 'https://ecomsite-pearl.vercel.app/',
      image : ecommerceImage
    },
    {
      id: 3,
      title: 'Financial Dashboard',
      description: 'A dynamic financial dashboard tailored for organizations to track key performance indicators,financial trends, and insights in real-time. The dashboard features interactive charts and graphs,custom reporting tools, and seamless integration with live APIs for fetching data. Role-based access control ensures security, while its user-friendly interface allows stakeholders to customize views based on their preferences. Designed with scalability in mind, the dashboard supports multiple data sources and showcases the ability to create visually appealing and functional web applications with robust data visualization capabilities.',
      github: 'https://github.com/HarshaInukollu123/finance-app',
      demo: 'https://finance-app-iota-azure.vercel.app/',
      image : financialImage
    },
    {
      id: 4,
      title: 'Sales and Inventory Management System',
      description: ' A robust application built to manage and track sales and inventory across multiple outlets in real-time.The system offers detailed analytics for sales trends, inventory levels, and automated alerts for low-stock items. Features include multi-user access with role-based permissions, comprehensive reporting tools,and seamless integration with third-party accounting and ERP systems. This project emphasizes scalability and reliability, catering to businesses of varying sizes.',
      github: 'https://github.com/HarshaInukollu123/sales-inventory',
      demo: 'https://sales-inventory-eosin.vercel.app/',
      image : salesImage
    },
    {
      id: 5,
      title: 'Event Management and Ticket Booking System',
      description: ' A feature-rich platform designed for organizing and managing events, including ticket booking and seat reservations. The system supports dynamic event creation, attendee management, and real-time ticket availability updates. Built with an intuitive user interface, it allows organizers to track event performance while offering attendees a seamless booking experience. Integrated payment systems  and email notifications ensure efficiency and user engagement.`',
      github: 'https://github.com/HarshaInukollu123/event-management',
      demo: 'https://event-management-beta-eosin.vercel.app/',
      image : eventImage
    },
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-12">Projects</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden transition hover:shadow-xl"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  {project.title}
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex space-x-4">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg shadow hover:bg-gray-300 transition"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
