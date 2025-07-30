import React from 'react'
import Logo from './nested-components/Logo'
import MenuItems from './nested-components/MenuItems';
import { Link } from 'react-router-dom';

import '../styles/desktop/Footer.scss';
import '../styles/tablet/Footer.scss';
import '../styles/mobile/Footer.scss';

const Footer = ({ setIsMenuOpened }) => {
  const handleFavoritesClick = () => {
    window.scrollTo(0, 0)
    setIsMenuOpened(false)
  }

  return (
    <footer>
      <div className="footer-container">
        <div className="about">
          <h2>KaloriCare</h2>
          <p>Your go-to platform for managing and tracking your calories for a healthy life.</p>
        </div>
        <div className="quick-links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className="legal">
          <h3>Legal</h3>
          <ul>
            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
            <li><Link to="/terms-of-service">Terms of Service</Link></li>
          </ul>
        </div>

        <div className="credits">
          <h3>Developed by</h3>
          <a href='https://leenillar.netlify.app' target='_blank'>Lee Nillar</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>@2025 KaloriCare | All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
