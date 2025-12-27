import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleDropdownToggle = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const menuItems = [
    {
      name: 'About',
      path: '/about',
      submenu: [
        { name: 'Our Team', path: '/about#team' },
        { name: 'Awards', path: '/about#awards' },
        { name: 'Affiliation', path: '/about#affiliation' },
        { name: 'Gallery', path: '/about#gallery' },
        { name: 'Global Experience', path: '/about#global-experience' },
        { name: 'Corporate Social Responsibility', path: '/about#csr' }
      ]
    },
    {
      name: 'Practice Areas',
      path: '/practice-areas',
      submenu: [
        {
          name: 'Corporate & Commercial',
          submenu: [
            { name: 'Private Equity', path: '/practice-areas/corporate-commercial' },
            { name: 'Joint Ventures', path: '/practice-areas/corporate-commercial' },
            { name: 'Mergers & Acquisitions', path: '/practice-areas/corporate-commercial' },
            { name: 'Transfer Pricing', path: '/practice-areas/corporate-commercial' }
          ]
        },
        {
          name: 'Secretarial Services',
          submenu: [
            { name: 'Regulatory & Compliance', path: '/practice-areas/secretarial' },
            { name: 'BIS Certification', path: '/practice-areas/secretarial' },
            { name: 'GST', path: '/practice-areas/secretarial' },
            { name: 'Foreign Direct Investment', path: '/practice-areas/secretarial' },
            { name: 'Business Setup', path: '/practice-areas/secretarial' }
          ]
        },
        {
          name: 'Dispute Resolution',
          submenu: [
            { name: 'Arbitration', path: '/practice-areas/dispute-resolution' },
            { name: 'Litigation', path: '/practice-areas/dispute-resolution' },
            { name: 'Insolvency & Bankruptcy', path: '/practice-areas/dispute-resolution' }
          ]
        },
        {
          name: 'Intellectual Property',
          submenu: [
            { name: 'Copyrights', path: '/practice-areas/intellectual-property' },
            { name: 'Patents', path: '/practice-areas/intellectual-property' },
            { name: 'Trademarks', path: '/practice-areas/intellectual-property' },
            { name: 'Design', path: '/practice-areas/intellectual-property' },
            { name: 'Geographical Indications (GI)', path: '/practice-areas/intellectual-property' }
          ]
        },
        { name: 'Energy & Infrastructure', path: '/practice-areas/energy-infrastructure' },
        { name: 'Labour & Employment', path: '/practice-areas/labour-employment' },
        { name: 'Sports & Gaming', path: '/practice-areas/sports-gaming' },
        { name: 'Technology, Media & Telecommunications', path: '/practice-areas/technology-media' },
        { name: 'Aviation Law', path: '/practice-areas/aviation' },
        { name: 'Tender Management', path: '/practice-areas/tender-management' },
        { name: 'Taxation', path: '/practice-areas/taxation' },
        { name: 'Banking & Finance', path: '/practice-areas/banking-finance' },
        { name: 'White Collar Crimes', path: '/practice-areas/white-collar-crimes' }
      ]
    },
    {
      name: 'Sectors',
      path: '/sectors',
      submenu: [
        { name: 'Startups', path: '/sectors/startups' },
        { name: 'E-Commerce', path: '/sectors/e-commerce' },
        { name: 'Real Estate', path: '/sectors/real-estate' },
        { name: 'Pharma & Healthcare', path: '/sectors/pharma-healthcare' },
        { name: 'Information Technology', path: '/sectors/information-technology' },
        { name: 'Fashion Law', path: '/sectors/fashion-law' }
      ]
    },
    {
      name: 'Insights',
      path: '/insights',
      submenu: [
        { name: 'Blog', path: '/insights/blog' },
        { name: 'Deals', path: '/insights/deals' },
        { name: 'Press Releases', path: '/insights/press-releases' },
        { name: 'Interviews', path: '/insights/interviews' },
        { name: 'Newsletters', path: '/insights/newsletters' }
      ]
    },
    {
      name: 'International Desk',
      path: '/international-desk',
      submenu: [
        { name: 'German Desk', path: '/international-desk/german-desk' },
        { name: 'Japan Desk', path: '/international-desk/japan-desk' },
        { name: 'USA Desk', path: '/international-desk/usa-desk' }
      ]
    },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-top">
        <div className="container">
          <div className="header-top-content">
            <a href="tel:+917004726852" className="phone-link">
            +91 70047 26852
            </a>
          </div>
        </div>
      </div>
      <nav className="navbar">
        <div className="container">
          <div className="nav-wrapper">
            <Link to="/" className="logo">
              <h1>D K & Associates</h1>
              <p>Advocates and Legal Consultants</p>
            </Link>
            <button 
              className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
            <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
              {menuItems.map((item, index) => (
                <li 
                  key={index} 
                  className={`nav-item ${item.submenu ? 'has-dropdown' : ''} ${location.pathname === item.path ? 'active' : ''}`}
                >
                  <Link 
                    to={item.path}
                    onClick={() => !item.submenu && setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.submenu && (
                    <div className="dropdown">
                      {item.submenu.map((subItem, subIndex) => (
                        <div key={subIndex} className="dropdown-item">
                          {subItem.submenu ? (
                            <>
                              <span className="dropdown-title">{subItem.name}</span>
                              <ul className="dropdown-submenu">
                                {subItem.submenu.map((subSubItem, subSubIndex) => (
                                  <li key={subSubIndex}>
                                    <Link to={subSubItem.path}>{subSubItem.name}</Link>
                                  </li>
                                ))}
                              </ul>
                            </>
                          ) : (
                            <Link to={subItem.path}>{subItem.name}</Link>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

