import React from 'react';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex justify-center items-center w-1/2">
        <div className="max-w-md w-full bg-white shadow-md rounded-md px-8 py-6">
          <h2 className="text-2xl font-bold mb-6">Login</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium">Email</label>
              <input type="email" id="email" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label className="block text-gray-700 font-medium">Password</label>
              <input type="password" id="password" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <button className="bg-gray-600 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" type="submit">Login</button>
          </form>
          <div className="flex space-x-4 py-5">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 flex items-center">
              <FaGoogle className="mr-2" /> Login with Google
            </button>
            <button className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-700 flex items-center">
              <FaGithub className="mr-2" /> Login with GitHub
            </button>

          </div>
          <Link to="" className="text-yellow-800 hover:underline">Forget password? Reset</Link>
        </div>
      </div>
      <div className="flex justify-center items-center w-1/2 flex-col space-y-4">
        <div>
          <h2 className='text-3xl block text-black font-bold'>Don't Have an Account?</h2>
        </div>
        <div>
          <h1>
            <span className='text-2xl text-red-500 font-bold'>Not</span> to Worry
            <span className='text-3xl text-red-500 font-bold'>!</span>
          </h1>
        </div>
        <div>
          <h2 className='text-2xl'>
            <Link to='/register'><button className='btn btn-outline btn-dark'>Register</button></Link><span className="text-3xl font-bold"> Free</span> From Here.
          </h2>
        </div>
      </div>

    </div>
  );
};

export default Login;
