import React from 'react';
import './footer.css';

const Footer = () => (
    <footer className="footer">
        <div className="footer-main">
            <div className="footer-col brand-col">
                <div className="footer-brand">
                    <span className="brand-highlight">Quiz</span>Master
                </div>
                {/* <div className="footer-contact">
                    <span className="contact-label">Contact</span><br />
                    <span className="contact-email">quizmaster@gmail.com</span>
                </div> */}
                <div className="footer-social">
                    <a href="/" aria-label="Instagram" className="footer-social-icon">
                        <svg width="22" height="22" fill="none" viewBox="0 0 22 22"><rect x="3" y="3" width="16" height="16" rx="5" stroke="#fff" strokeWidth="1.5" /><circle cx="11" cy="11" r="4" stroke="#fff" strokeWidth="1.5" /><circle cx="16.2" cy="5.8" r="1" fill="#fff" /></svg>
                    </a>
                    <a href="/" aria-label="GitHub" className="footer-social-icon">
                        <svg width="22" height="22" fill="none" viewBox="0 0 22 22"><circle cx="11" cy="11" r="10" stroke="#fff" strokeWidth="1.5" /><path d="M8 17c-1-1-2-2-2-4 0-2 1-3 3-3h2c2 0 3 1 3 3 0 2-1 3-2 4" stroke="#fff" strokeWidth="1.2" /><circle cx="8.5" cy="9.5" r="1" fill="#fff" /><circle cx="13.5" cy="9.5" r="1" fill="#fff" /></svg>
                    </a>
                    <a href="/" aria-label="Blog" className="footer-social-icon">
                        <svg width="22" height="22" fill="none" viewBox="0 0 22 22"><rect x="4" y="5" width="14" height="12" rx="2" stroke="#fff" strokeWidth="1.5" /><rect x="7" y="8" width="8" height="2" rx="1" fill="#fff" /><rect x="7" y="12" width="5" height="2" rx="1" fill="#fff" /></svg>
                    </a>
                </div>
            </div>
            <div className="footer-col">
                <div className="footer-heading">Help & Info</div>
                <ul className="footer-links">
                    <li><a href="/">About Us</a></li>
                    <li><a href="/">Sign Up</a></li>
                    <li><a href="/">Sign In</a></li>
                    <li><a href="/">FAQ</a></li>
                </ul>
            </div>
            <div className="footer-col">
                <div className="footer-heading">Quick Links</div>
                <ul className="footer-links">
                    <li><a href="/">Profile</a></li>
                    <li><a href="/">Play Quiz</a></li>
                    <li><a href="/">Categories</a></li>
                    <li><a href="/">Leaderboard</a></li>
                </ul>
            </div>
        </div>
        <hr className="footer-divider" />
        <div className="footer-bottom">
            <div className="footer-copyright">
                &copy; 2025 <span className="brand-highlight">Quiz</span>Master. All rights reserved.
            </div>
            <div className="footer-legal">
                <a href="/">Privacy Policy</a>
                <a href="/">Terms of Service</a>
                <a href="/">Cookies</a>
            </div>
        </div>
    </footer>
);

export default Footer;
