import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Disclaimer from './components/Disclaimer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import PracticeAreas from './pages/PracticeAreas';
import ContactForm from './components/ContactForm';
import Careers from './components/Careers';
import Newsletters from './components/Newsletters';
import './App.css';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Disclaimer />
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/practice-areas" element={<PracticeAreas />} />
            <Route path="/contact" element={<ContactForm />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/insights/newsletters" element={<Newsletters />} />
            <Route path="/sectors" element={<div className="section"><div className="container"><h1>Sectors</h1><p>Coming soon...</p></div></div>} />
            <Route path="/insights/blog" element={<div className="section"><div className="container"><h1>Blog</h1><p>Coming soon...</p></div></div>} />
            <Route path="/international-desk" element={<div className="section"><div className="container"><h1>International Desk</h1><p>Coming soon...</p></div></div>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
