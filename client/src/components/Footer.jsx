// Footer.jsx
import React from 'react';
import './Styles/Footer.css'; // Import the CSS file

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="container text-center">
        <h4 className="footer-text">&copy; {new Date().getFullYear()} Inventory App</h4>
      </div>
    </footer>
  );
};

export default Footer;
