import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BatchComponent = () => {
  const [batches, setBatches] = useState([]);

  useEffect(() => {
    const fetchBatches = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:5000/api/batch', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setBatches(response.data);
      } catch (error) {
        console.error('Error fetching batches:', error);
      }
    };

    fetchBatches();
  }, []);

  return (
    <div>
      <h2>Batches</h2>
      <ul>
        {batches.map(batch => (
          <li key={batch.id}>{batch.batchName}</li>
        ))}
      </ul>
    </div>
  );
};

export default BatchComponent;
