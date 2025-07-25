import React, { useState, useEffect } from 'react';

const images = [
  '/images/car1.jpg',
  '/images/car2.jpg',
  '/images/car3.jpg',
  '/images/car4.jpg',
  '/images/car5.jpg',
  '/images/car6.jpg',
  '/images/car7.jpg',
  '/images/car8.jpg',
  '/images/car9.jpg',
  '/images/car10.jpg',
  '/images/car11.jpg',
  '/images/car12.jpg',
  '/images/car13.jpg',
  '/images/car14.jpg',
  '/images/car15.jpg',
  '/images/car16.jpg',
  '/images/car17.jpg',
  '/images/car18.jpg',
  '/images/car19.jpg',
  '/images/car20.jpg',
  '/images/car21.jpg',
  '/images/car22.jpg',
  '/images/car23.jpg',
];

const Portfolio = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 1000); 

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full max-w-4xl mx-auto mt-8 overflow-hidden rounded-xl shadow-lg">
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="w-full h-[400px] object-cover transition-opacity duration-700"
      />
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 rounded-full ${index === currentIndex ? 'bg-yellow-400' : 'bg-white/50'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
