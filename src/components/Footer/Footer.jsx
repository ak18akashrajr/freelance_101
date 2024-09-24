
//inga react-icon package ethika da soumil uh 

import React from 'react';
import './Footer.css';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Travel Agency. All rights reserved.</p>
        <div className="social-media">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebookF />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
