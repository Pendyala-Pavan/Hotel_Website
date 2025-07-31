import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section style={styles.container}>
      <div style={styles.hero}>
        <h1 style={styles.title}>Welcome to Our Hotel</h1>
        <p style={styles.subtitle}>Delicious food made with passion</p>
        <Link to="/menu" style={styles.button}>
          Explore Menu
        </Link>
      </div>
    </section>
  );
};

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "calc(100vh - 80px)",
    paddingTop: "100px",
    padding: "30px",
    border: "3px solid #fff",
    marginBottom: "2px",
    borderRadius: "15px",
    boxSizing: "border-box",

    backgroundImage:
      "linear-gradient(rgba(114, 112, 112, 0.4), rgba(92, 89, 89, 0.4)), url('https://images.healthshots.com/healthshots/en/uploads/2021/08/17180017/rajat-sarki-nnNCCQfSNsc-unsplash-1600x900.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  },

  hero: {
    backgroundColor: "rgba(81, 80, 80, 0.6)",
    padding: "40px",
    borderRadius: "10px",
    textAlign: "center",
    color: "#fff",
  },
  title: {
    fontSize: "48px",
    marginBottom: "20px",
    color: "#0ff4d9ff",
  },
  subtitle: {
    fontSize: "24px",
    marginBottom: "30px",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#f4c10f",
    color: "#000",
    textDecoration: "none",
    fontWeight: "bold",
    borderRadius: "5px",
  },
};

export default Home;


