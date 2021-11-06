import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import carbonLeaf from '../images/carbon-leaf.png'

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-section">
                <div className="user-location">
                    <p>Nigeria</p>
                </div>
                <div className="footer-links">
                    <div className="about-links">
                        <Link to="/" className="footer-link">About</Link>
                        <Link to="/" className="footer-link">Advertising</Link>
                        <Link to="/" className="footer-link">Business</Link>
                        <Link to="/" className="footer-link">How search works</Link>
                    </div>
                    <div className="carbon-neutral">
                        <Link to="/" className="footer-link"><img src={carbonLeaf} className="leaf-img" alt=""/>Carbon neutral since 2007</Link>
                    </div>
                    <div className="terms">
                        <Link to="/" className="footer-link">Terms</Link>
                        <Link to="/" className="footer-link">Privacy</Link>
                        <Link to="/" className="footer-link">Settings</Link>
                    </div>
                </div>
            </div>

            
        </div>
    )
}

export default Footer
