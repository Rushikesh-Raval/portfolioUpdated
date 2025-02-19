import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h2>Let's Connect</h2>
        <p className="footer-description">
          I'm Rushikesh Raval, an expert frontend developer, open to new opportunities and collaborations.
        </p>
        <div className="footer-links">
          <a href="mailto:rushikesh@example.com">rushikeshprof25@gmail.com</a>
          <span className="footer-separator">|</span>
          <span>+91 9326580094</span>
        </div>

        <div className="social-icons">
          <a href="https://www.linkedin.com/in/rushikesh-raval-b9808a1bb/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>

        <button className="hire-btn">Hire Me</button>
        <small>&copy; 2024 Rushikesh Raval. All Rights Reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
