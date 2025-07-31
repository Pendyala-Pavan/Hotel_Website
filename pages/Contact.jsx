import React from "react";
import "../src/components/Contact.css";

const Contact = () => (
  <section className="contact-section">
    {/* LEFT SIDE - About Section with Overlay */}
    <div className="contact-about-side">
      <div className="about-overlay">
        <h2>About Us</h2>
        <h3>
          <strong>Welcome to Sri Veeranjaneya Mess</strong>
        </h3>
        <p>శ్రీ వీరాంజనేయ మెస్‌కి స్వాగతం!</p>
        <p>
          20 సంవత్సరాలుగా స్వచ్ఛమైన శాకాహార భోజనాన్ని ప్రేమతో, నిబద్ధతతో
          అందిస్తున్న మా హోటల్‌కు మీకు హృదయపూర్వక స్వాగతం.
        </p>
        <p>
          పౌష్టికమైన, రుచికరమైన భోజనాలను మేము సాంప్రదాయ పద్ధతుల్లో, తాజా
          పదార్థాలతో సిద్ధం చేస్తాం.
        </p>
        <p>మా గౌరవనీయమైన కస్టమర్లకు మాతో తిరిగి రావడానికి ముఖ్యమైన కారణాలు:</p>
        <ul>
          <li>ఉదయం టిఫిన్లు – ఇడ్లీ, దోస, వడ, ఉప్మా</li>
          <li>
            మధ్యాహ్న భోజనం – ఇంటి భోజనంలా ఆరోగ్యకరమైన మరియు తృప్తికరమైన మెనూ
          </li>
          <li>సాయంత్రం టిఫిన్లు – ఇడ్లీ, దోస, వడ, పునుగులు</li>
        </ul>
        <p>
          మీ రోజు ఎప్పుడైనా కావొచ్చు – మా భోజనం మీ రుచిచూడుళ్లను తృప్తి
          పరుస్తుంది, ఇంటి ఆత్మీయతను గుర్తుచేస్తుంది.
        </p>
        <p>
          <strong>మా ప్రయాణంలో భాగమైనందుకు ధన్యవాదాలు!</strong>
        </p>
      </div>
    </div>

    {/* RIGHT SIDE - Contact Form */}
    <div className="contact-form-side">
      <div className="contact-overlay">
        <h2 className="contact-title">Contact Us</h2>

        <form className="contact-form">
          <label htmlFor="name">Your Name</label>
          <input id="name" type="text" placeholder="Enter your name" required />

          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            required
          />

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            placeholder="Write your message here..."
            rows="4"
            required
          ></textarea>

          <button type="submit" className="contact-button">
            Send Message
          </button>
        </form>

        <div className="contact-info">
          <p>
            <strong>📞 Phone:</strong> +91-9876543210
          </p>
          <p>
            <strong>📧 Email:</strong> info@myrestaurant.com
          </p>
        </div>

        <div className="contact-map">
          <iframe
            title="Restaurant Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.0198724874025!2d78.47400407497647!3d17.440081983391604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb97352fd4e03f%3A0xa6d521f51b62464e!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1690870302300!5m2!1sen!2sin"
            width="100%"
            height="250"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
