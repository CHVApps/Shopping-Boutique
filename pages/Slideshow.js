import React, { useState, useEffect } from "react";

const images = [
  "/Images/ad_f21r6lcd_vivid_violet_2.jpg",
  "/Images/ad_fw20ab011lcd_burgundy_velvet_1.jpg",
  "/Images/F24AR18_Blue_1.jpg",
];

export default function Slideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        width: "100%",
        height: "700px",
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
