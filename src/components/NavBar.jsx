import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav style={styles.nav}>
      <div style={styles.brand}>Sri Veeranjaneya Mess</div>
      <div style={styles.linkContainer}>
        <Link style={styles.link} to="/">
          Home
        </Link>
        <Link style={styles.link} to="/menu">
          Menu
        </Link>
        <Link style={styles.link} to="/gallery">
          Gallery
        </Link>
        <Link style={styles.link} to="/contact">
          Contact
        </Link>
        <Link style={styles.link} to="/reserve">
          Reserve
        </Link>
      </div>
    </nav>
  );
};

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#333",
    padding: "15px 40px",
    position: "sticky",
    top: 0,
    zIndex: 1000,
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)", // optional: subtle shadow
  },
  brand: {
    color: "#f4c10f",
    fontWeight: "bold",
    fontSize: "24px",
    textDecoration: "none", // optional: make brand a link if needed
  },
  linkContainer: {
    display: "flex",
    gap: "20px",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "16px",
  },
};

export default NavBar;
