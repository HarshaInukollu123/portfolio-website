// src/pages/EmploymentHistory.js

import React from 'react';

const EmploymentHistory = () => {
  return (
    <section className="p-8">
      <h2 className="text-3xl font-bold">Employment History</h2>
      <div className="mt-4">
        {/* Example content */}
        <ul className="list-disc pl-6">
          <li>
            <strong>React Developer at Infinite Computer Solutions</strong> (June 2022 - May 2023)
            <ul>
              <li>Worked on React, Redux, Node.js, and MongoDB</li>
              <li>Handled incident management for Verizon DBSS</li>
              <li>Enforced Agile methodologies</li>
            </ul>
          </li>
          <li>
            <strong>React Developer at WML IT Solutions</strong> (Sep 2019 - June 2022)
            <ul>
              <li>Developed web apps using React JS and Redux</li>
              <li>Worked with Axios, Material UI, and Tailwind CSS</li>
              <li>Followed TDD with Jest for end-to-end testing</li>
            </ul>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default EmploymentHistory;
