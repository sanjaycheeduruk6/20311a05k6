import React, { useState } from 'react';
import './index.css';

const HomePage = () => {
  const [source, setSource] = useState('');
  const [destination, setDestination] = useState('');

  const handleSourceChange = (e) => {
    setSource(e.target.value);
  };

  const handleDestinationChange = (e) => {
    setDestination(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log('Source:', source);
    console.log('Destination:', destination);
  };

  return (
    <div className="container">
      <h1 className="title">Train Booking System</h1>
      <h2 className="subtitle">Plan your journey</h2>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="label" htmlFor="source">Source:</label>
          <input
            className="input"
            type="text"
            id="source"
            value={source}
            onChange={handleSourceChange}
          />
        </div>
        <div className="form-group">
          <label className="label" htmlFor="destination">Destination:</label>
          <input
            className="input"
            type="text"
            id="destination"
            value={destination}
            onChange={handleDestinationChange}
          />
        </div>
        <button className="button" type="submit">Search Trains</button>
      </form>
    </div>
  );
};

export default HomePage;
