import React from 'react';
import { Link } from 'react-router-dom';
import { FiAlertTriangle } from 'react-icons/fi';
import './Error404.css';

const Error404 = () => {
  return (
    <div className="error-container">
      <div className="error-content">
        <FiAlertTriangle className="error-icon" />
        <h1 className="error-code">404</h1>
        <h2 className="error-title">Page Not Found</h2>
        <p className="error-message">The page you are looking for doesn't exist or has been moved.</p>
        <Link to="/" className="btn btn-primary">Go to Home</Link>
      </div>
    </div>
  );
};

export default Error404;
