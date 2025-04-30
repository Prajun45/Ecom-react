import React, { useState, useEffect } from "react";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    { src: "./images/banner/b1.png", text: "Welcome To Smart World" },
    { src: "./images/banner/b2.png", text: "Explore the Future" },
    { src: "./images/banner/b3.png", text: "Innovate with Us" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const moveToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <main className="mt-20 px-4 md:px-20">
      <section className="banner relative w-full max-w-8xl mx-auto overflow-hidden">
        <div className="relative">
          <div
            className="slider flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div key={index} className="slide relative w-full flex-shrink-0">
                <img src={slide.src} alt={`Banner ${index + 1}`} className="w-full h-auto" />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                  <h1 className="text-white font-bold text-5xl">{slide.text}</h1>
                </div>
              </div>
            ))}
          </div>
          {/* Dots for navigation */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`dot w-4 h-4 bg-white rounded-full opacity-50 hover:opacity-100 ${
                  index === currentIndex ? "opacity-100" : ""
                }`}
                onClick={() => moveToSlide(index)}
              ></button>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Slider;
