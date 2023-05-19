import React from 'react';
import bannerImage from '../../assets/red-cover.jpg';
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <div className="relative">
      <img
        src={bannerImage}
        alt="Banner"
        className="object-cover w-full h-64 sm:h-96"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-white">
        <h1 className="text-3xl sm:text-5xl font-bold mb-4">Welcome to SportySpark</h1>
        <p className="text-lg sm:text-2xl mb-6 text-warning">Discover the world of sports toys!</p>
        <div className="w-1/2 mx-auto pb-4"><small className="text-base sm:text-lg mb-6">Get ready for endless fun and excitement with our wide range of sports toys. Whether you're into soccer, basketball, or racing, we have something for everyone.</small></div>

        <Link to="/allToys"><button className="btn btn-gray">Shop Now</button>
        </Link>
      </div>
    </div>
  );
};

export default Banner;
