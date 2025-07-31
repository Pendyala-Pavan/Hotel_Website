import React from "react";
import "../src/components/Menu.css";

const Menu = () => {
  const menuItems = [
    { name: "Idly/Sambar", price: "₹50", image: "/images/food1.jpg" },
    { name: "Vada", price: "₹25", image: "/images/food6.jpg" },
    { name: "Dosa", price: "₹20", image: "/images/food17.jpg" },
    { name: "Ravva Dosa", price: "₹30", image: "/images/food15.jpg" },
    { name: "Onion Dosa", price: "₹30", image: "/images/food18.jpg" },
    { name: "Puri", price: "₹30", image: "/images/food13.jpg" },
    { name: "Bonda", price: "₹25", image: "/images/food6.jpg" },
    { name: "Mysore Bonda", price: "₹30", image: "/images/food6.jpg" },
    { name: "Chapathi", price: "₹25", image: "/images/food3.jpg" },
    { name: "Single Meals", price: "₹90", image: "/images/food4.jpg" },
    { name: "Full Meals", price: "₹110", image: "/images/food4.jpg" },
  ];

  return (
    <section className="menu-page">
      <div className="menu-overlay">
        <h2 className="menu-title">Our Menu</h2>
        <p className="menu-subtitle">
          Explore our delicious vegetarian offerings
        </p>
        <div className="menu-grid">
          {menuItems.map((item, index) => (
            <div key={index} className="menu-card">
              <img src={item.image} alt={item.name} className="menu-image" />
              <h3 className="menu-item-name">{item.name}</h3>
              <p className="menu-price">{item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
