import React from 'react';

// Skill data with logos
const skills = [
  {
    category: 'Frontend Development',
    items: [
      { skill: 'React.js', level: 90, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { skill: 'HTML', level: 95, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
      { skill: 'CSS', level: 90, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
      { skill: 'Tailwind CSS', level: 85, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg' },
    ],
  },
  {
    category: 'Version Control',
    items: [
      { skill: 'Git', level: 90, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
      { skill: 'GitHub', level: 85, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
    ],
  },
  {
    category: 'Backend Development',
    items: [
      { skill: 'Node.js', level: 80, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
      { skill: 'Express.js', level: 75, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
      { skill: 'MongoDB', level: 70, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    ],
  },
  {
    category: 'Testing',
    items: [
      { skill: 'Jest', level: 75, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg' },
    ],
  },
];

const Skills = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Skills</h1>
      <div className="max-w-4xl mx-auto">
        {skills.map((category, index) => (
          <div key={index} className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">{category.category}</h2>
            <div className="space-y-4">
              {category.items.map((skill, skillIndex) => (
                <div key={skillIndex} className="flex items-center gap-4">
                  <img
                    src={skill.logo}
                    alt={skill.skill}
                    className="w-8 h-8"
                    title={skill.skill}
                  />
                  <div className="w-full">
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-800">{skill.skill}</span>
                      <span className="text-gray-600">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-300 rounded-full h-4">
                      <div
                        className="bg-blue-500 h-4 rounded-full"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
