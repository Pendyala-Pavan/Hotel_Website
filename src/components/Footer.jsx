import React from "react";

const Footer = () => (
  <footer style={styles.footer}>
    <div style={styles.container}>
      <h3 style={styles.title}>Hotel Restaurant</h3>
      <p style={styles.text}>
        Serving delicious vegetarian food for over 20 years
      </p>
      <div style={styles.contact}>
        <p style={styles.info}>📞 +91 9866448734</p>
        <p style={styles.info}>📧 contact@Veeranjaneyamess@gmail.com</p>
        <p style={styles.info}>📍 Hyderabad, Telangana, India</p>
      </div>
      <p style={styles.copy}>
        &copy; {new Date().getFullYear()} Hotel Restaurant. All rights reserved.
      </p>
    </div>
  </footer>
);

const styles = {
  footer: {
    background: "linear-gradient(135deg, #111, #333)",
    color: "#fff",
    padding: "20px 20px",
    marginTop: "5px",
    border: "3px solid #fff",
    borderRadius: "15px",
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    textAlign: "center",
  },
  title: {
    fontSize: "28px",
    marginBottom: "10px",
    fontWeight: "bold",
    color: "#f4c10f",
  },
  text: {
    fontSize: "16px",
    marginBottom: "20px",
    color: "#ccc",
  },
  contact: {
    marginBottom: "20px",
  },
  info: {
    fontSize: "15px",
    margin: "5px 0",
    color: "#ddd",
  },
  copy: {
    fontSize: "14px",
    color: "#888",
  },
};

export default Footer;
