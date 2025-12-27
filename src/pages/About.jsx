import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="container">
          <h1>About & CO.</h1>
          <p className="hero-subtitle">
            Experience the difference with D K & Associates, where every client's story is heard 
            and every legal challenge is met with unwavering dedication.
          </p>
        </div>
      </section>

      <section className="section about-content">
        <div className="container">
          <div className="about-text">
            <h2>Our Story</h2>
            <p>
            D K & Associates is a full-service law firm with a commitment to providing 
              exceptional legal services across various practice areas. With offices in New Delhi, 
              Mumbai, and New York, we serve clients globally with expertise, integrity, and dedication.
            </p>
            <p>
              Our team of experienced attorneys brings together decades of combined experience 
              in corporate law, dispute resolution, intellectual property, and many other areas 
              of legal practice. We pride ourselves on our client-centric approach and our 
              ability to deliver practical, effective solutions.
            </p>
          </div>
        </div>
      </section>

      <section id="team" className="section team-section">
        <div className="container">
          <h2 className="section-title">Our Team</h2>
          <div className="team-grid">
            <div className="team-card">
              <div className="team-image">
                <div className="placeholder-image">Sahil Singh</div>
              </div>
              <div className="team-info">
                <h3>Sahil Singh</h3>
                <p>Managing Partner</p>
              </div>
            </div>
            <div className="team-card">
              <div className="team-image">
                <div className="placeholder-image">Laila Kazmi</div>
              </div>
              <div className="team-info">
                <h3>Laila Kazmi</h3>
                <p>Head - Corporate Practice</p>
              </div>
            </div>
            <div className="team-card">
              <div className="team-image">
                <div className="placeholder-image">Dhananjay Anant Athavale</div>
              </div>
              <div className="team-info">
                <h3>Dhananjay Anant Athavale</h3>
                <p>Partner</p>
              </div>
            </div>
            <div className="team-card">
              <div className="team-image">
                <div className="placeholder-image">Praveen Maratha</div>
              </div>
              <div className="team-info">
                <h3>Praveen Maratha</h3>
                <p>Partner</p>
              </div>
            </div>
            <div className="team-card">
              <div className="team-image">
                <div className="placeholder-image">J B Singh</div>
              </div>
              <div className="team-info">
                <h3>J B Singh</h3>
                <p>Partner</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="awards" className="section awards-section">
        <div className="container">
          <h2 className="section-title">Awards & Accolades</h2>
          <div className="awards-grid">
            <div className="award-card">
              <div className="award-icon">🏆</div>
              <p>2024 IFLR 1000 - Banking and Mergers & Acquisitions</p>
            </div>
            <div className="award-card">
              <div className="award-icon">🏆</div>
              <p>Ranked For Technology and Telecommunication by Asia Law</p>
            </div>
            <div className="award-card">
              <div className="award-icon">🏆</div>
              <p>Featured in ALB Asia M&A Rankings 2024</p>
            </div>
            <div className="award-card">
              <div className="award-icon">🏆</div>
              <p>Benchmark 2024 Award</p>
            </div>
            <div className="award-card">
              <div className="award-icon">🏆</div>
              <p>Acclaimed for Corporate and M&A by Asialaw Profiles 2022</p>
            </div>
            <div className="award-card">
              <div className="award-icon">🏆</div>
              <p>Awarded as "Corporate & Commercial Law Firm of the Year" by Worldwide Financial Advisors Magazine' Superiors 2022</p>
            </div>
            <div className="award-card">
              <div className="award-icon">🏆</div>
              <p>Ranked for M&A in the IFLR1000 Asia Pacific ranking 2022</p>
            </div>
          </div>
        </div>
      </section>

      <section id="affiliation" className="section affiliation-section">
        <div className="container">
          <h2 className="section-title">Affiliation</h2>
          <p className="section-description">
          D K & Associates maintains strategic affiliations and partnerships with leading 
            law firms and legal organizations worldwide to provide comprehensive legal services 
            to our clients.
          </p>
        </div>
      </section>

      <section id="gallery" className="section gallery-section">
        <div className="container">
          <h2 className="section-title">Gallery</h2>
          <div className="gallery-grid">
            <div className="gallery-item">
              <div className="placeholder-image">Gallery Image 1</div>
            </div>
            <div className="gallery-item">
              <div className="placeholder-image">Gallery Image 2</div>
            </div>
            <div className="gallery-item">
              <div className="placeholder-image">Gallery Image 3</div>
            </div>
            <div className="gallery-item">
              <div className="placeholder-image">Gallery Image 4</div>
            </div>
          </div>
        </div>
      </section>

      <section id="global-experience" className="section global-experience-section">
        <div className="container">
          <h2 className="section-title">Global Experience</h2>
          <p className="section-description">
            With offices in New Delhi, Mumbai, and New York, D K & Associates has extensive 
            experience in handling cross-border transactions and international legal matters. 
            Our global presence allows us to serve clients across multiple jurisdictions.
          </p>
        </div>
      </section>

      <section id="csr" className="section csr-section">
        <div className="container">
          <h2 className="section-title">Corporate Social Responsibility</h2>
          <p className="section-description">
            At D K & Associates, we believe in giving back to the community. Our CSR initiatives 
            focus on legal education, pro bono services, and supporting various social causes 
            that align with our values and commitment to justice.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;

