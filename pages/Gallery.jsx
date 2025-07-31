import React from "react";
import "../src/components/Gallery.css";

const Gallery = () => {
 const images = [
   "/images/food16.jpg",
   "/images/food10.jpg",
   "/images/food14.jpg",
   "/images/food15.jpg",
   "/images/food1.jpg",
   "/images/food17.jpg",
   "/images/food13.jpg",
   "/images/food11.jpg",
   "/images/food12.jpg",
   "/images/food13.jpg",
   "/images/food15.jpg",
   "/images/food4.jpg",
   "/images/food3.jpg",
   "/images/food2.jpg",
 ];

  return (
    <section className="gallery-section">
      <div className="gallery-overlay">
        <h2 className="gallery-heading">Our Gallery</h2>
        <div className="gallery-grid">
          {images.map((src, index) => (
            <div key={index} className="gallery-item">
              <img src={src} alt={`Gallery ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
