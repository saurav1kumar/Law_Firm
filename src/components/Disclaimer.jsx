import { useState, useEffect } from 'react';
import './Disclaimer.css';

const Disclaimer = () => {
  const [showDisclaimer, setShowDisclaimer] = useState(false);

  useEffect(() => {
    const hasAccepted = localStorage.getItem('disclaimerAccepted');
    if (!hasAccepted) {
      setShowDisclaimer(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('disclaimerAccepted', 'true');
    setShowDisclaimer(false);
  };

  if (!showDisclaimer) return null;

  return (
    <div className="disclaimer-overlay">
      <div className="disclaimer-modal">
        <h2>DISCLAIMER</h2>
        <div className="disclaimer-content">
          <p>
            The Bar Council of India does not permit advertisement or solicitation by advocates. 
            By accessing this website (https://www.dkandassociates.com/), you acknowledge and confirm 
            that you are seeking information relating to D K & Associates, Advocates and Legal 
            Consultants (hereinafter referred to as "D K & Associates"), of your own accord and that 
            there has been no form of solicitation, advertisement, or inducement by D K & Associates, 
            or its members. The content of this website is for informational purposes only and should 
            not be interpreted as soliciting or advertising. No material/information provided on this 
            website should be construed as legal advice. D K & Associates shall not be liable for the 
            consequences of any action taken by relying on the material/information provided on this website.
          </p>
        </div>
        <button onClick={handleAccept} className="btn">I accept the above</button>
      </div>
    </div>
  );
};

export default Disclaimer;

