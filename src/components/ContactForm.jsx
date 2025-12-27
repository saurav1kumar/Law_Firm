import { useState } from 'react';
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message. We will get back to you soon!');
    setFormData({ name: '', phone: '', email: '', message: '' });
  };

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="container">
          <h1>Contact Us</h1>
          <p className="hero-subtitle">
            Ready for a legal partner who truly listens? Reach out to D K & Associates today 
            for personalized service and expert advice tailored to your world.
          </p>
        </div>
      </section>

      <section className="section contact-content">
        <div className="container">
          <div className="contact-wrapper">
            <div className="contact-form-section">
              <h2>Get in Touch</h2>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn">Send Message</button>
              </form>
            </div>

            <div className="contact-info-section">
              <h2>Our Offices</h2>
              
              <div className="office-card">
                <h3>Corporate Office</h3>
                <p><strong>Address:</strong> B 7/1, Safdarjung Enclave Extension, New Delhi 110029</p>
                <p><strong>Tel:</strong> <a href="tel:+911146013853">+91-11-4601-3853</a></p>
                <p><strong>Email:</strong> <a href="mailto:info@maheshwariandco.com">info@maheshwariandco.com</a></p>
              </div>

              <div className="office-card">
                <h3>Mumbai Office</h3>
                <p><strong>Address:</strong> G Block, Plot C 59, 11th Floor, Platina, Bandra Kurla Complex, Mumbai, Maharashtra – 400 051</p>
                <p><strong>Tel:</strong> <a href="tel:+912268841510">+91-22-6884-1510</a></p>
                <p><strong>Email:</strong> <a href="mailto:mumbai@maheshwariandco.com">mumbai@maheshwariandco.com</a></p>
              </div>

              <div className="office-card">
                <h3>USA Office</h3>
                <p><strong>Address:</strong> 640 Fifth Avenue, New York, NY 10019, USA</p>
                <p><strong>Email:</strong> <a href="mailto:usa@maheshwariandco.com">usa@maheshwariandco.com</a></p>
              </div>

              <div className="whatsapp-link">
                <a href="https://wa.me/919643106874" target="_blank" rel="noopener noreferrer" className="btn">
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactForm;

