import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import app from '../../firebase/firebase.config';


const Registration = () => {

  const { registerUser } = useContext(AuthContext);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [photoURL, setPhotoURL] = useState('');
  const [passError, setPassError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSignUp = (event) => {
    event.preventDefault();
    if (!/^(?=.*[A-Za-z])/.test(password)) {
      setPassError('Password must be 8 characters');
      setSuccessMessage('');
      return;
    }

    registerUser(email, password, name) // Use registerUser from AuthContext
      .then((result) => {
        // Handle successful registration
        console.log(result.user);
        setPassError('');
        setName('');
        setEmail('');
        setPassword('');
        setPhotoURL('');
        setSuccessMessage('User has been created successfully.');
      })
      .catch((error) => {
        // Handle registration error
        console.error(error);
        setPassError(error.message);
        setSuccessMessage('');
      });
  };




  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex justify-center items-center w-1/2">
        <div className="max-w-md w-full bg-white shadow-md rounded-md px-8 py-6">
          <h2 className="text-2xl font-bold mb-6">Registration</h2>
          <form onSubmit={handleSignUp} className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium">Name</label>
              <input type="text"
                placeholder="Enter your name"
                name="name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                required
                id="name"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label className="block text-gray-700 font-medium">Email</label>
              <input type="email"
                placeholder="Enter email"
                name='email'
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
                id="email"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label className="block text-gray-700 font-medium">Password</label>
              <input type="password"
                placeholder="Password"
                name='password'
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
                pattern="(?=.{6,}"
                id="password"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label className="block text-gray-700 font-medium">Image URL</label>
              <input type="text"
                placeholder="Enter photo URL"
                name='photoURL'
                value={photoURL}
                onChange={(event) => setPhotoURL(event.target.value)}
                required
                id="imageUrl"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2  focus:ring-blue-500" />
            </div>
            <p className="text-lg text-green-500">{successMessage}<Link to='/login'><br></br><span className='text-lg p-1 text-black bg-green-500 font-semibold'>Login Now</span></Link> </p>
            <p className="text-lg text-red-500">{passError}</p>
            <button className="bg-gray-600 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" type="submit">Register</button>
          </form>
          <p className="text-gray-600 mt-4">
            Already have an account?{' '}
            <Link to="/login" className="text-yellow-500 font-medium hover:underline">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Registration;
