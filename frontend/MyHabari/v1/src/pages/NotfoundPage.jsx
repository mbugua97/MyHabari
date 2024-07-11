// NotFoundPage.js
import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="notfound-container">
      <h1>404</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link to="/">Go to Home</Link>
    </div>
  );
};

export default NotFoundPage;
