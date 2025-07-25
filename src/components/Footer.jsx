import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";


import './Footer.css'
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container container">
        <div className="footer-about">
          <h2>World Atlas</h2>
          <p>
            Your guide to countries, cultures, and geography. Explore the world with detailed maps, facts, and stats.
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Continents</a></li>
            <li><a href="#">Countries</a></li>
            <li><a href="#">World Maps</a></li>
            <li><a href="#">Capitals</a></li>
            <li><a href="#">Time Zones</a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>Email: info@worldatlas.com</p>
          <p>Phone: +1-800-555-ATLAS</p>
        </div>

        <div className="footer-social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#">{<FaFacebookSquare size={24} color='#3b5998' />}</a>
            <a href="#">{<FaSquareTwitter size={24} color='#00acee' />}</a>
            <a href="#">{<FaInstagramSquare size={24} color='#C13584' />}</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 World Atlas. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer