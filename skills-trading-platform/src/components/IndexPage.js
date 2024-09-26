
import React from 'react';

const IndexPage = () => {
  const skills = ['Web Development', 'Digital Marketing', 'Data Science', 'Graphic Design', 'Language Learning', 'Photography'];

  return (
    <div>
      <h2>Available Skills</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
};

export default IndexPage;