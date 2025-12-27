import './Careers.css';

const Careers = () => {
  return (
    <div className="careers-page">
      <section className="careers-hero">
        <div className="container">
          <h1>Careers</h1>
          <p className="hero-subtitle">
            Join our team of dedicated legal professionals and be part of a firm that values 
            excellence, integrity, and client success.
          </p>
        </div>
      </section>

      <section className="section careers-content">
        <div className="container">
          <div className="careers-text">
            <h2>Why Work With Us?</h2>
            <p>
            D K & Associates. offers a dynamic and collaborative work environment where 
              professionals can grow and excel in their legal careers. We value diversity, 
              innovation, and commitment to excellence.
            </p>
            
            <h2>Current Openings</h2>
            <p>
              We are always looking for talented individuals to join our team. If you are 
              interested in working with us, please send your resume to 
              <a href="mailto:careers@maheshwariandco.com"> careers@maheshwariandco.com</a>
            </p>
            
            <div className="benefits">
              <h2>Benefits</h2>
              <ul>
                <li>Competitive compensation packages</li>
                <li>Professional development opportunities</li>
                <li>Collaborative work environment</li>
                <li>Work-life balance</li>
                <li>Health and wellness programs</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;

