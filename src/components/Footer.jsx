import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/about#team">Our Team</Link></li>
              {/* <li><Link to="/about#awards">Awards</Link></li> */}
              {/* <li><Link to="/about#affiliation">Affiliation</Link></li> */}
              <li><Link to="/about#gallery">Gallery</Link></li>
              {/* <li><Link to="/about#global-experience">P Experience</Link></li> */}
              {/* <li><Link to="/about#csr">Corporate Social Responsibility</Link></li> */}
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>Practice Areas</h3>
            <ul>
              {/* <li><Link to="/practice-areas">Corporate & Commercial</Link></li> */}
              <li><Link to="/practice-areas">Criminal Law</Link></li>
              <li><Link to="/practice-areas">Civil Law</Link></li>
              <li><Link to="/practice-areas">Family Law</Link></li>
              <li><Link to="/practice-areas">Dispute Resolution</Link></li>
              <li><Link to="/practice-areas">Cyber Law</Link></li>
             <li><Link to="/practice-areas">Economic Offences</Link></li>
             
              <li><Link to="/practice-areas">Labour & Employment</Link></li>
              
              <li><Link to="/practice-areas">Banking & Finance</Link></li>
              <li><Link to="/practice-areas">White Collar Crimes</Link></li>
            </ul>
          </div>
          
         
        
          
          
          
          <div className="footer-section">
            <h3>Other Links</h3>
            <ul>
              <li><Link to="/careers">Careers</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/faqs">FAQs</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-contact">
          <div className="footer-office">
            <h4>Corporate Office</h4>
            <p>Patna City Civil Court, Bihar Judicial Academy, Gai Ghat, Patna, Bihar, 800007</p>
            <p>Tel: +917004726852</p>
            <p>Email: <a href="mailto:info@dkandassociates.com">info@dkandassociates.com</a></p>
          </div>
          
          <div className="footer-office">
            <h4>Patna District and Session Court</h4>
            <p>Patna District and Session Court, Patna, Bihar, 800001</p>
            <p>Tel: +91 7004726852</p>
            <p>Email: <a href="mailto:patna@dkandassociates.com">patna@dkandassociates.com</a></p>
          </div>
        </div>
        
        <div className="footer-locations">
          <h4>Other Territories</h4>
          <div className="locations-list">
            <span>Ahmedabad</span>
            <span>Bangalore</span>
            <span>Chandigarh</span>
         
            <span>Delhi</span>
            
            <span>Gurgaon</span>
            <span>Hyderabad</span>
           
            <span>Kolkata</span>
            <span>Mumbai</span>
            <span>Pune</span>
          </div>
        </div>
        
        <div className="footer-social">
          <h4>Stay Connected with Us!</h4>
          <div className="social-links">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              LinkedIn
            </a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 Copyright by <strong>D K & Associates Advocates and Legal Consultants</strong> All Rights Reserved</p>
          <div className="footer-links">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <span>|</span>
            <Link to="/terms-conditions">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

