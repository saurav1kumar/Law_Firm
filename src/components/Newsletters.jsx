import './Newsletters.css';

const Newsletters = () => {
  const newsletters = [
    {
      title: "Legal Updates - November 2025",
      date: "November 2025",
      description: "Stay updated with the latest legal developments and regulatory changes."
    },
    {
      title: "Corporate Law Newsletter - October 2025",
      date: "October 2025",
      description: "Insights on corporate governance, M&A trends, and regulatory updates."
    },
    {
      title: "IP Law Digest - September 2025",
      date: "September 2025",
      description: "Recent developments in intellectual property law and landmark cases."
    }
  ];

  return (
    <div className="newsletters-page">
      <section className="newsletters-hero">
        <div className="container">
          <h1>Newsletters</h1>
          <p className="hero-subtitle">
            Stay informed with our monthly newsletters covering the latest legal developments, 
            regulatory updates, and industry insights.
          </p>
        </div>
      </section>

      <section className="section newsletters-content">
        <div className="container">
          <div className="newsletters-grid">
            {newsletters.map((newsletter, index) => (
              <div key={index} className="newsletter-card">
                <div className="newsletter-date">{newsletter.date}</div>
                <h3>{newsletter.title}</h3>
                <p>{newsletter.description}</p>
                <a href="#" className="read-more">Read More →</a>
              </div>
            ))}
          </div>
          
          <div className="subscribe-section">
            <h2>Subscribe to Our Newsletter</h2>
            <p>Get the latest legal insights delivered to your inbox</p>
            <form className="subscribe-form">
              <input type="email" placeholder="Enter your email address" required />
              <button type="submit" className="btn">Subscribe</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Newsletters;

