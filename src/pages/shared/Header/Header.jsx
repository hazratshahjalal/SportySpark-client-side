import React from 'react';
import logo from '../../../../src/assets/logo.png';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logOut()
      .then(() => {
        console.log('User logged out successfully');
        navigate('/'); // Redirect to the home page after logout
      })
      .catch((error) => {
        console.error('Logout error:', error);
      });
  };

  return (
    <div className="bg-slate-100">
      <div className="navbar container mx-auto flex flex-col sm:flex-row justify-between items-center">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link to="/" className="w-40">
            <img src={logo} alt="Logo" />
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="flex gap-4 text-lg font-semibold text-black">
          <Link to="/">Home</Link>
          <Link to="/allToys">All Toys</Link>
          {user && <Link to="/myToys">My Toys</Link>}
          {user && <Link to="/addToy">Add a Toy</Link>}
          <Link to="/blogs">Blogs</Link>
          <Link to="/contact">Contact Us</Link>
        </div>

        {/* User Actions */}
        <div className="flex gap-3 items-center">
          {user ? (
            <div className="flex gap-3 items-center">
              {/* User Avatar */}
              <label className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img title={user.name} src={user.photoURL} alt="User Avatar" />
                </div>
              </label>
              {/* Logout Button */}
              <button onClick={handleLogout} className="btn btn-outline btn-gray">
                Log Out
              </button>
            </div>
          ) : (
            <div className="flex gap-3">
              {/* Sign In Button */}
              <Link to="/login">
                <button className="btn btn-outline btn-gray">Sign In</button>
              </Link>
              {/* Register Button */}
              <Link to="/register">
                <button className="btn btn-gray">Register Now</button>
              </Link>
            </div>
          )}
        </div>
      </div>

    </div>
  );
};

export default Header;
