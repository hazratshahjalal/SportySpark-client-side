import React from 'react';
import NotFoundImage from '../../assets/404page.jpg';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex items-center justify-center  bg-red-400 h-screen">
      <div className=" mx-auto flex flex-col md:flex-row rounded-lg shadow-lg">
        <div className="md:w-1/2 p-8">
          <img src={NotFoundImage} alt="404 Image" className="w-full h-auto rounded-lg" />
        </div>
        <div className="md:w-1/2 p-8 flex flex-col justify-center text-white">
          <h2 className="text-6xl font-bold transform -skew-x-12">
            <span className="text-red-700">404</span> error!
          </h2>
          <p className="text-2xl mt-4">
            Oops! The page you're looking for doesn't exist.
          </p>
          <Link to='/'><button className='btn btn-gray w-1/2 my-5 text-lg'>Go  Back  Home</button></Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
