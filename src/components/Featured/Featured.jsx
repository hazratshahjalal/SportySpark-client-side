import React, { useState } from 'react';
import toy1 from '../../assets/tennis.jpg';
import toy2 from '../../assets/boy-basket.jpg';
import toy3 from '../../assets/remote-blue.jpg';
import toy4 from '../../assets/motor-orange.jpg';
import toy5 from '../../assets/cycle-moto.jpg';
import toy6 from '../../assets/tennis.jpg';
import toy7 from '../../assets/football1.jpg';
import toy8 from '../../assets/set1.jpg';
import toy9 from '../../assets/tennis1.jpg';
import toy10 from '../../assets/boy-basket.jpg';
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
      <h1 className='text-5xl font-semibold text-center mb-6'>Featured Products</h1>
      <div className="container w-1/2 mx-auto"> <p className="text-center mx-auto pb-10 container text-gray-600 mt-4">
        Explore our collection of featured products and find the perfect toys for your little ones. With a wide range of options available, you can choose from the latest trends in toys. Don't miss out on the opportunity to bring joy and excitement into your child's playtime!
      </p></div>

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
