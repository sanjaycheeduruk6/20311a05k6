import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Schedule = () => {
  const [trains, setTrains] = useState([]);

  useEffect(() => {
    const fetchTrains = async () => {
      try {
        const response = await axios.get('http://104.211.219.98/train/trains');
        setTrains(response.data);
      } catch (error) {
        console.error('Error fetching trains:', error);
      }
    };

    fetchTrains();
  }, []);

  return (
    <div>
      <h2>Train Schedule</h2>
      <ul>
        {trains.map((train) => (
          <li key={train.id}>{train.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Schedule;
