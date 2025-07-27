import React from 'react';
import styles from '../CohortDetails.module.css'; // Adjust path if needed

const CohortDetails = ({ cohort }) => {
  // Inline style for status color
  const statusStyle = {
    color: cohort.status === 'ongoing' ? 'green' : 'blue',
  };

  return (
    <div className={styles.box}>
      <h3 style={statusStyle}>{cohort.name}</h3>
      <dl>
        <dt>Trainer:</dt>
        <dd>{cohort.trainer}</dd>
        <dt>Technology:</dt>
        <dd>{cohort.technology}</dd>
        <dt>Status:</dt>
        <dd>{cohort.status}</dd>
      </dl>
    </div>
  );
};

export default CohortDetails;
