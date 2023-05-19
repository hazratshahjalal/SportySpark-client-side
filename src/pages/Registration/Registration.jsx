import React from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle, FaGithub } from 'react-icons/fa';

const Registration = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex justify-center items-center w-1/2">
        <div className="max-w-md w-full bg-white shadow-md rounded-md px-8 py-6">
          <h2 className="text-2xl font-bold mb-6">Registration</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium">Name</label>
              <input type="text" id="name" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label className="block text-gray-700 font-medium">Email</label>
              <input type="email" id="email" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label className="block text-gray-700 font-medium">Password</label>
              <input type="password" id="password" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label className="block text-gray-700 font-medium">Image URL</label>
              <input type="text" id="imageUrl" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <button className="bg-gray-600 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" type="submit">Register</button>
          </form>
          <p className="text-gray-600 mt-4">
            Already have an account?{' '}
            <Link to="/login" className="text-yellow-500 hover:underline">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Registration;
