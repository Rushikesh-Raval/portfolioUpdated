import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";

const Footer = () => {
  useEffect(() => {
    const floatingBtn = document.querySelector(".floating-btn");
    const section = document.querySelector(".footer");

    function checkScroll() {
      const sectionRect = section.getBoundingClientRect();
      
      if (sectionRect.bottom <= window.innerHeight) {
        floatingBtn.classList.remove("sticky");
      } else {
        floatingBtn.classList.add("sticky");
      }
    }

    window.addEventListener("scroll", checkScroll);
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  return (
    <footer className="footer">
      <div className="footer-content">
        <h2>Let's Connect</h2>
        <p className="footer-description">
          I'm Rushikesh Raval, an expert frontend developer, open to new
          opportunities and collaborations.
        </p>
        <div className="footer-links">
          <a href="mailto:rushikeshprof25@gmail.com">rushikeshprof@gmail.com</a>
          <span className="footer-separator">|</span>
          <span className="number">+91 9326580094</span>
        </div>

        <div className="social-icons">
          <a
            href="https://www.linkedin.com/in/rushikesh-raval-b9808a1bb/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>

        {/* Hire Me Button */}
        <a
          href="https://wa.me/919326580094"
          target="_blank"
          className="hire-btn floating-btn"
        >
          Hire Me
        </a>

        <small>&copy; 2025 Rushikesh Raval. All Rights Reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
