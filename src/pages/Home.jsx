import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import slider1 from '../assets/Home_Slider_1.png';
// Import additional slider images if you have them
 import slider2 from '../assets/Home_Slider_2.png';
 import slider3 from '../assets/Home_Slider_3.png';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Experience the difference with D K & Associates",
      subtitle: "where every client's story is heard and every legal challenge is met with unwavering dedication. We're here to defend your rights and secure your future.",
      heading: "Expert Legal Advisory:",
      subheading: "Your Rights, Our Priority",
      cta: "Learn More About Us",
      image: slider1 // Add your first slider image
    },
    {
      title: "Discover the breadth of our legal expertise",
      subtitle: "across various industries and sectors. D K & Associates provides clear, effective legal strategies designed for your unique challenges.",
      heading: "Explore Our Services:",
      subheading: "Every Sector, Every Need",
      cta: "Explore Our Practice Areas",
      image: slider2 // Replace with slider2 when you have it
    },
    {
      title: "Ready for a legal partner who truly listens?",
      subtitle: "Reach out to D K & Associates today for personalized service and expert advice tailored to your world.",
      heading: "Connect with Confidence:",
      subheading: "We're Here to Help",
      cta: "Contact Us Now",
      image: slider3 // Replace with slider3 when you have it
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const practiceAreas = [
    {
      title: "Corporate & Commercial",
      description: "Consulting on company formation, mergers and acquisitions, contract negotiation and drafting, corporate restructuring and others.",
      image: "corporate and commercial",
      link: "/practice-areas"
    },
    {
      title: "Litigation",
      description: "Counsel on case evaluation, pleadings and motions filing, court representation and management of appeals, and settlements.",
      image: "litigation",
      link: "/practice-areas"
    },
    {
      title: "Arbitration",
      description: "Guidance on disputes, crafting agreements, representing in proceedings and managing arbitration awards enforcement.",
      image: "arbitration",
      link: "/practice-areas"
    },
    {
      title: "Energy & Infrastructure",
      description: "Consultation on project financing, regulatory compliance, contract negotiation and management, and dispute resolution.",
      image: "energy and infrastructure",
      link: "/practice-areas"
    },
    {
      title: "Intellectual Property",
      description: "Guidance on patent and trademark registration, copyright protection, IP litigation, licensing agreements and trade secret management.",
      image: "intellectual property",
      link: "/practice-areas"
    },
    {
      title: "Information Technology",
      description: "Consultation on data protection and privacy, software and hardware contracts, e-commerce regulations and others.",
      image: "information technology",
      link: "/practice-areas"
    }
  ];

  const whyChooseUs = [
    {
      icon: "📚",
      title: "Extensive Experience",
      description: "With a rich history of handling complex legal issues, we bring a depth of knowledge and insight. This vast experience allows us to foresee potential challenges and craft strategies that safeguard your interests while maximizing opportunities."
    },
    {
      icon: "👥",
      title: "Client-Centric Approach",
      description: "We prioritize our clients' needs, ensuring personalized and effective legal solutions. Your success is our priority, and we're committed to standing by your side every step of the way."
    },
    {
      icon: "⚖️",
      title: "Comprehensive Service Range",
      description: "From corporate law to dispute resolution, we offer a wide spectrum of legal services. This diversity allows us to serve as a one-stop legal shop, ensuring consistency and quality across all your legal needs while simplifying the legal process for you."
    }
  ];

  const teamMembers = [
    {
      name: "Sahil Singh",
      position: "Managing Partner",
      image: "Sahil-singh"
    },
    {
      name: "Laila Kazmi",
      position: "Head - Corporate Practice",
      image: "laila-kazmi"
    },
    {
      name: "Dhananjay Anant Athavale",
      position: "Partner",
      image: "dhananjay-anant-athavale"
    },
    {
      name: "Praveen Maratha",
      position: "Partner",
      image: "praveen-maratha"
    },
    {
      name: "J B Singh",
      position: "Partner",
      image: "j-b-singh"
    }
  ];

  const awards = [
    "2024 IFLR 1000 - Banking and Mergers & Acquisitions",
    "Ranked For Technology and Telecommunication by Asia Law",
    "Featured in ALB Asia M&A Rankings 2024",
    "Benchmark 2024 Award",
    "Acclaimed for Corporate and M&A by Asialaw Profiles 2022",
    "Awarded as \"Corporate & Commercial Law Firm of the Year\" by Worldwide Financial Advisors Magazine' Superiors 2022",
    "Ranked for M&A in the IFLR1000 Asia Pacific ranking 2022"
  ];

  const testimonials = [
    {
      text: "I Thanks a lot Mr. Ketan Joshi and Team for expediting the process and delivering us the legal opinion. We are indeed grateful. The legal opinion has helped us immensely. I'll refer people to you if I come across anyone seeking legal help/opinions.",
      author: "Siddharth Shah",
      position: "Partnerships Manager (Grid Master)"
    },
    {
      text: "I personally joined the scheduled last hearing and was thoroughly impressed by the exceptional presentation delivered by the assigned team. I wish them continued success in their future endeavors.",
      author: "Gurpreet Singh",
      position: "National Highways & Infrastructure Development Corporation Limited"
    },
    {
      text: "Instituto Cervantes-Embassy of Spain has received consultation services from D K & Associates and we are really happy with the outcome. This law firm is really professional and understands the needs of their client.",
      author: "Alejandro Palma Allepuz",
      position: "Administrator, Instituto Cervantes New Delhi"
    }
  ];

  const blogs = [
    {
      category: "Labour Codes",
      title: "India implements Four New Labour Codes: A transformative Shift in the Workforce Framework",
      author: "Navya Saxena",
      date: "November 22, 2025",
      excerpt: "India's labour governance structure has undergone a radical change with the implementation of its four labour…"
    },
    {
      category: "Personality Rights in India",
      title: "The Evolving Landscape of Personality Rights in India",
      author: "Himanshu Sachdeva",
      date: "November 20, 2025",
      excerpt: "Imagine waking up one morning to discover your face selling toothpaste in a country you've never…"
    },
    {
      category: "DPDP Act",
      title: "DPDP Act Compliance Mandate",
      author: "Ketan Joshi",
      date: "November 19, 2025",
      excerpt: "After two years of anticipation, India has formally brought the Digital Personal Data Protection Act, 2023…"
    }
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-slider">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
              style={{
                backgroundImage: slide.image ? `url(${slide.image})` : 'none',
              }}
            >
              <div className="hero-overlay"></div>
              <div className="hero-content">
                <h1>{slide.heading}</h1>
                <h2>{slide.subheading}</h2>
                <p>{slide.subtitle}</p>
                <Link to={index === 0 ? "/about" : index === 1 ? "/practice-areas" : "/contact"} className="btn">
                  {slide.cta}
                </Link>
              </div>
            </div>
          ))}
          <div className="hero-dots">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Practice Areas Section */}
      <section className="section practice-areas-section">
        <div className="container">
          <h2 className="section-title">Practice Areas</h2>
          <div className="practice-areas-grid">
            {practiceAreas.map((area, index) => (
              <div key={index} className="practice-area-card">
                <div className="practice-area-image">
                  <div className="placeholder-image">{area.image}</div>
                </div>
                <div className="practice-area-content">
                  <h3>{area.title}</h3>
                  <p>{area.description}</p>
                  <Link to={area.link} className="btn btn-outline">View More</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <h3>500+</h3>
              <p>Criminal Cases</p>
            </div>
            <div className="stat-item">
              <h3>245+</h3>
              <p>Matrimonial Disputes</p>
            </div>
            <div className="stat-item">
              <h3>100+</h3>
              <p>White Collar Crimes</p>
            </div>
            <div className="stat-item">
              <h3>200+</h3>
              <p>Civil Cases</p>
            </div>
            <div className="stat-item">
              <h3>150+</h3>
              <p>Economic Offences</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section why-choose-section">
        <div className="container">
          <h2 className="section-title">Why Choose Us?</h2>
          <div className="why-choose-grid">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="why-choose-card">
                <div className="why-choose-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section team-section">
        <div className="container">
          <h2 className="section-title">Meet Our Attorneys</h2>
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-card">
                <div className="team-image">
                  <div className="placeholder-image">{member.image}</div>
                </div>
                <div className="team-info">
                  <h3>{member.name}</h3>
                  <p>{member.position}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center" style={{ marginTop: '40px' }}>
            <Link to="/about#team" className="btn">Meet the Team</Link>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="section awards-section">
        <div className="container">
          <h2 className="section-title">Awards & Accolades</h2>
          <div className="awards-grid">
            {awards.map((award, index) => (
              <div key={index} className="award-card">
                <div className="award-icon">🏆</div>
                <p>{award}</p>
              </div>
            ))}
          </div>
          <div className="text-center" style={{ marginTop: '40px' }}>
            <Link to="/about#awards" className="btn btn-outline">All Awards</Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section testimonials-section">
        <div className="container">
          <h2 className="section-title">Clients' Testimonials</h2>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="testimonial-quote">"</div>
                <p>{testimonial.text}</p>
                <div className="testimonial-author">
                  <strong>{testimonial.author}</strong>
                  <span>{testimonial.position}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Blogs Section */}
      <section className="section blogs-section">
        <div className="container">
          <h2 className="section-title">Recent Blogs</h2>
          <div className="blogs-grid">
            {blogs.map((blog, index) => (
              <div key={index} className="blog-card">
                <div className="blog-category">{blog.category}</div>
                <h3>{blog.title}</h3>
                <div className="blog-meta">
                  <span>{blog.author}</span>
                  <span>{blog.date}</span>
                </div>
                <p>{blog.excerpt}</p>
                <Link to="/insights/blog" className="read-more">READ MORE →</Link>
              </div>
            ))}
          </div>
          <div className="text-center" style={{ marginTop: '40px' }}>
            <Link to="/insights/blog" className="btn btn-outline">All Blogs</Link>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="section contact-cta-section">
        <div className="container">
          <div className="contact-cta-content">
            <h2>Get in Touch with Us!</h2>
            <p>Let our experience pave the path to your success.</p>
            <Link to="/contact" className="btn">Contact Us Now</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

