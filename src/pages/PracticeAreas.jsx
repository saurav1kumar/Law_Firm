import { Link } from 'react-router-dom';
import './PracticeAreas.css';

const PracticeAreas = () => {
  const practiceAreas = [
    {
      title: "Corporate & Commercial",
      description: "Consulting on company formation, mergers and acquisitions, contract negotiation and drafting, corporate restructuring and others.",
      services: [
        "Private Equity",
        "Joint Ventures",
        "Mergers & Acquisitions",
        "Transfer Pricing"
      ]
    },
    {
      title: "Secretarial Services",
      description: "Comprehensive secretarial services including regulatory compliance, certifications, and business setup assistance.",
      services: [
        "Regulatory & Compliance",
        "BIS Certification",
        "GST",
        "Foreign Direct Investment",
        "Business Setup"
      ]
    },
    {
      title: "Dispute Resolution",
      description: "Expert guidance on disputes, crafting agreements, representing in proceedings and managing arbitration awards enforcement.",
      services: [
        "Arbitration",
        "Litigation",
        "Insolvency & Bankruptcy"
      ]
    },
    {
      title: "Intellectual Property",
      description: "Guidance on patent and trademark registration, copyright protection, IP litigation, licensing agreements and trade secret management.",
      services: [
        "Copyrights",
        "Patents",
        "Trademarks",
        "Design",
        "Geographical Indications (GI)"
      ]
    },
    {
      title: "Energy & Infrastructure",
      description: "Consultation on project financing, regulatory compliance, contract negotiation and management, and dispute resolution.",
      services: [
        "Green Hydrogen Mission",
        "Oil & Gas",
        "Renewable Energy"
      ]
    },
    {
      title: "Labour & Employment",
      description: "Comprehensive legal services for employment matters, labor disputes, and workplace compliance.",
      services: []
    },
    {
      title: "Sports & Gaming",
      description: "Legal expertise in sports law, gaming regulations, and related commercial matters.",
      services: []
    },
    {
      title: "Technology, Media & Telecommunications",
      description: "Consultation on data protection and privacy, software and hardware contracts, e-commerce regulations and others.",
      services: []
    },
    {
      title: "Aviation Law",
      description: "Specialized legal services for aviation industry clients including regulatory compliance and commercial transactions.",
      services: []
    },
    {
      title: "Tender Management",
      description: "Assistance with tender processes, bid management, and government contract matters.",
      services: []
    },
    {
      title: "Taxation",
      description: "Expert tax advisory services including corporate tax, tax structuring, and international taxation.",
      services: [
        "Corporate Tax",
        "Tax Structuring",
        "International Taxation"
      ]
    },
    {
      title: "Banking & Finance",
      description: "Comprehensive legal services for banking and financial institutions including regulatory compliance and transactions.",
      services: []
    },
    {
      title: "White Collar Crimes",
      description: "Defense and advisory services for white collar crime matters including investigations and compliance.",
      services: []
    },
    {
      title: "Criminal Law",
      description: "Expert representation in criminal matters with a focus on corporate and white collar crime defense.",
      services: []
    },
    {
      title: "NRI Legal Services",
      description: "Specialized legal services for Non-Resident Indians including succession planning and property matters.",
      services: [
        "Succession Planning"
      ]
    },
    {
      title: "Family Law",
      description: "Comprehensive family law services including matrimonial matters, inheritance, and family disputes.",
      services: []
    },
    {
      title: "High Networth Individuals",
      description: "Tailored legal services for high networth individuals including estate planning and wealth management.",
      services: []
    },
    {
      title: "Feasibility Studies",
      description: "Legal feasibility studies and due diligence services for business ventures and investments.",
      services: []
    }
  ];

  return (
    <div className="practice-areas-page">
      <section className="practice-areas-hero">
        <div className="container">
          <h1>Practice Areas</h1>
          <p className="hero-subtitle">
            Discover the breadth of our legal expertise across various industries and sectors. 
            D K & Associates provides clear, effective legal strategies designed for your unique challenges.
          </p>
        </div>
      </section>

      <section className="section practice-areas-content">
        <div className="container">
          <div className="practice-areas-grid">
            {practiceAreas.map((area, index) => (
              <div key={index} className="practice-area-card">
                <h3>{area.title}</h3>
                <p>{area.description}</p>
                {area.services.length > 0 && (
                  <div className="services-list">
                    <h4>Services Include:</h4>
                    <ul>
                      {area.services.map((service, serviceIndex) => (
                        <li key={serviceIndex}>{service}</li>
                      ))}
                    </ul>
                  </div>
                )}
                <Link to="/contact" className="btn btn-outline">Contact Us</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Need Legal Assistance?</h2>
            <p>Get in touch with our expert team to discuss your legal needs.</p>
            <Link to="/contact" className="btn">Contact Us Now</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PracticeAreas;

