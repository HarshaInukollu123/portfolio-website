import React from "react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Technologies",
      skills: ["HTML", "CSS", "JavaScript (ES6)", "React.js", "Redux", "Material UI", "Tailwind CSS"],
    },
    {
      title: "Backend Technologies",
      skills: ["Node.js", "Express.js", "Django", "Django REST Framework"],
    },
    {
      title: "Databases",
      skills: ["MongoDB", "MySQL"],
    },
    {
      title: "Version Control & Tools",
      skills: ["Git", "GitHub", "JIRA"],
    },
    {
      title: "Testing & Debugging Tools",
      skills: ["Jest", "Postman"],
    },
    {
      title: "Other Skills",
      skills: ["Python", "REST API", "ECMAScript 6"],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">Skills</h1>
      <div className="max-w-4xl mx-auto grid gap-8">
        {skillCategories.map((category, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">{category.title}</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              {category.skills.map((skill, idx) => (
                <li key={idx}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
