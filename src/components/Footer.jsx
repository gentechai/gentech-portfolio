import { useState } from "react"
import ContactModal from "./ContactModal"
import { useScrollReveal } from "../hooks/useScrollReveal"

function Footer() {
  const [open, setOpen] = useState(false)
  const [ref, visible] = useScrollReveal()

  const currentYear = new Date().getFullYear()

  return (
    <>
      <footer 
        ref={ref}
        className={`footer reveal ${visible ? "active" : ""}`}
      >
        <div className="container">
          <div className="footer-content">
            
            {/* FOOTER SECTION 1: Company Info */}
            <div className="footer-section">
              <h3>GenTech AI</h3>
              <p>Driving innovation with Generative AI, Computer Vision & Deep Learning solutions</p>
              <div className="footer-address">
                <p><i className="fas fa-map-marker-alt"></i> Indore, Madhya Pradesh, India</p>
                <p><i className="fas fa-envelope"></i> <a href="mailto:info@gentechai.com">info@gentechai.com</a></p>
                <p><i className="fas fa-phone"></i> <a href="tel:+91-XXXXXXXXXX">Contact Us</a></p>
              </div>
            </div>

            {/* FOOTER SECTION 2: Quick Links */}
            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul className="footer-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#team">Team</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>

            {/* FOOTER SECTION 3: Services */}
            <div className="footer-section">
              <h4>Services</h4>
              <ul className="footer-links">
                <li><a href="#projects">Generative AI Solutions</a></li>
                <li><a href="#projects">Computer Vision Systems</a></li>
                <li><a href="#projects">ML Model Development</a></li>
                <li><a href="#projects">Data Analysis & Insights</a></li>
                <li><a href="#projects">API Integration</a></li>
                <li><a href="#projects">Cloud Infrastructure</a></li>
              </ul>
            </div>

            {/* FOOTER SECTION 4: Social & Newsletter */}
            <div className="footer-section">
              <h4>Connect With Us</h4>
              <div className="social-links">
                <a href="https://www.linkedin.com/company/gen-tech-ai" target="_blank" rel="noreferrer" className="social-link" title="LinkedIn">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="https://github.com/GenTechai" target="_blank" rel="noreferrer" className="social-link" title="GitHub">
                  <i className="fab fa-github"></i>
                </a>
                <a href="#contact" className="social-link" title="Email">
                  <i className="fas fa-envelope"></i>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noreferrer" className="social-link" title="Twitter">
                  <i className="fab fa-twitter"></i>
                </a>
              </div>
              <div className="newsletter">
                <p>Stay updated with our latest innovations</p>
                <button onClick={() => setOpen(true)} className="btn btn-newsletter">
                  Get In Touch
                </button>
              </div>
            </div>

          </div>

          {/* FOOTER DIVIDER */}
          <div className="footer-divider"></div>

          {/* FOOTER BOTTOM */}
          <div className="footer-bottom">
            <div className="footer-bottom-content">
              <p>&copy; {currentYear} GenTech AI. All rights reserved.</p>
              <div className="footer-bottom-links">
                <a href="#">Privacy Policy</a>
                <span className="divider">•</span>
                <a href="#">Terms of Service</a>
                <span className="divider">•</span>
                <a href="#">Sitemap</a>
              </div>
            </div>
          </div>

        </div>
      </footer>

      {open && <ContactModal close={() => setOpen(false)} />}
    </>
  )
}

export default Footer