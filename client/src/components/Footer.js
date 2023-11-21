// Clien/src/components/Footer.js - Footer component

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-light text-center py-3">
      <p className="mb-0">&copy; {new Date().getFullYear()} Inventory App</p>
    </footer>
  );
};

export default Footer;
