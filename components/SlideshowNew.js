import React, { useState, useEffect } from "react";

const images = [
  "/Images/Bridesmaid_WEB_22-Nov.jpg",
  "/Images/Ready_to_ship_WEB.jpg",
];

export default function SlideshowNew() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        width: "100%",
        height: "500px", 
        overflow: "hidden",
        borderRadius: "15px",
        boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.5)",
      }}
    >
      <img
        src={images[currentIndex]}
        alt="Slideshow"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transition: "opacity 0.8s ease-in-out",
        }}
      />
    </div>
  );
}
