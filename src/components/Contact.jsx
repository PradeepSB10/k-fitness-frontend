import axios from "axios";
import { useState } from "react";
import { createPortal } from "react-dom";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

function Contact({ selectedPlan , setSelectedPlan  }) {
  const planSelected = selectedPlan !== "";
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;

    const enquiryData = {
      name: form.name.value,
      email: form.email.value,
      phone: form.phone.value,
      plan: form.plan.value,
      message: form.message.value,
    };

    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/api/enquiries`, enquiryData);

      setShowPopup(true);
      form.reset();
      setSelectedPlan("");

      setTimeout(() => {
        setShowPopup(false);
      }, 3000);
    } catch (error) {
      console.log(error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (

  <>
    <section className="contact-section" id="contact" data-aos="fade-up">
      <p className="section-tag">CONTACT US</p>

      <h2 className="contact-heading">
        Start Your <span>Fitness Journey</span>
      </h2>

      <p className="contact-subtitle">
        Ready to transform yourself? Contact K FITNESS today and take the first step.
      </p>

      <div className="contact-container">
        <div className="contact-info">
          <div className="contact-card">
            <h3>Call Us</h3>
            <p>+91 9632752145</p>
          </div>

          <div className="contact-card">
            <h3>Email</h3>
            <p>kfitnessbgk@gmail.com</p>
          </div>

          <div className="contact-card">
            <h3>Location</h3>
            <p>Bagalkote, Karnataka</p>
          </div>

          <a
            href="https://maps.app.goo.gl/nhwy6q7mmT4eycQ17"
            target="_blank"
            rel="noopener noreferrer"
            className="map-btn"
          >
            📍 Open in Google Maps
          </a>

          <div className="social-buttons">
            <a
              className="whatsapp-btn"
              href="https://wa.me/919632752145"
              target="_blank"
            >
              <FaWhatsapp />
            </a>

            <a
              className="instagram-btn"
              href="https://www.instagram.com/k__fitness___/"
              target="_blank"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>

          {planSelected && (
              <div className="selected-plan-message">
                Selected Plan : <span>{selectedPlan}</span>
              </div>
            )}

          <input type="text" placeholder="Your Name" name="name" required />

          <input type="email" placeholder="Your Email" name="email" required />

          <input type="tel"
           placeholder="Phone Number" 
           pattern="[0-9]{10}"
           name="phone"
           required />

          <select name="plan" value={selectedPlan}  onChange={(e) => setSelectedPlan(e.target.value)} className={planSelected ? "plan-selected-glow" : ""} required>
            <option value="">Select Plan</option>
            <option value="Basic">Basic</option>
            <option value="Standard">Standard</option>
            <option value="Premium">Premium</option>
            <option value="Elite">Elite</option>
          </select>

          <textarea name="message" placeholder="Your Message"></textarea>

          <button type="submit">Send Enquiry</button>
        </form>
      </div>

    </section>

    {showPopup &&
    createPortal(
      <div className="success-popup">
        ✅ Thank you! We will contact you shortly.
      </div>,
      document.body
    )}
  </>
  );
}

export default Contact;