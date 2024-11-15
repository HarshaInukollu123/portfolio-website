// src/pages/Skills.js
import React from 'react';

const Skills = () => {
  const skills = [
    'HTML', 'CSS', 'JavaScript (ES6)', 'React.js', 'Redux', 'Material UI', 
    'Tailwind CSS', 'Jest', 'REST API', 'MongoDB', 'Python', 'Django',
  ];

  return (
    <section className="max-w-4xl mx-auto my-10 p-6 bg-white shadow-md rounded-md">
      <h2 className="text-3xl font-semibold text-gray-800 mb-4">Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-4">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-center shadow-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Skills;
