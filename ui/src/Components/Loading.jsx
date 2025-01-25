import React from 'react';
import './Loading.css';

const Loading = ({ text }) => {
  return (
    <div className="loading-container">
      <div className="loading-overlay"></div>
      <div className="loading-content">
        <div className="loading-spinner"></div>
        <p className="loading-text">{text}</p>
      </div>
    </div>
  );
};

export default Loading;
