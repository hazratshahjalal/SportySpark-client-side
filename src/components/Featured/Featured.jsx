import React, { useState } from 'react';
import toy1 from '../../assets/tennis.jpg';
import toy2 from '../../assets/Transformer-Toy-Car.jpg';
import toy3 from '../../assets/tennis1.jpg';
import toy4 from '../../assets/tennis1.jpg';
import toy5 from '../../assets/tennis1.jpg';
import toy6 from '../../assets/tennis1.jpg';
import toy7 from '../../assets/tennis1.jpg';
import toy8 from '../../assets/tennis1.jpg';
import toy9 from '../../assets/tennis1.jpg';
import toy10 from '../../assets/tennis1.jpg';
import '../Featured/Featured.css';

const Featured = () => {
  const toys = [toy10, toy9, toy8, toy7, toy6, toy5, toy4, toy3, toy2, toy1];
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div className="overflow-hidden my-12">
      <h1 className='text-5xl font-semibold text-center my-6'>Featured Products</h1>
      <div className="flex w-full gap-20 space-x-20 animate-marquee justify-end">
        {toys.map((toy, index) => (
          <img
            key={index}
            src={toy}
            alt={`Toy ${index + 1}`}
            className={`w-50 h-40 transition-transform ${hoveredIndex === index ? 'scale-110' : ''}`}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          />
        ))}
      </div>
    </div>
  );
};

export default Featured;
