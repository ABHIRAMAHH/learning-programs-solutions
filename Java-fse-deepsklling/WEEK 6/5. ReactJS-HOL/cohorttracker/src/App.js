import React from 'react';
import CohortDetails from './CohortDetails';

function App() {
  const cohorts = [
    {
      name: 'Full Stack Java - Batch 1',
      trainer: 'John Doe',
      technology: 'Java',
      status: 'ongoing',
    },
    {
      name: 'React Bootcamp',
      trainer: 'Jane Smith',
      technology: 'ReactJS',
      status: 'completed',
    },
  ];

  return (
    <div>
      <h1>My Academy Dashboard</h1>
      {cohorts.map((cohort, index) => (
        <CohortDetails key={index} cohort={cohort} />
      ))}
    </div>
  );
}

export default App;
