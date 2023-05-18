import React from 'react';
import aboutImage from '../../../src/assets/about.jpg'
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section className="py-12">
      <h2 className="text-5xl text-center mb-8">About Us</h2>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className=' bg-slate-50 rounded p-4'>
            <p className="text-3xl mb-6">
              At sportySpark Toy Marketplace, we are passionate about providing the best sports toys for children of all ages.
            </p>
            <p className="mb-6">
              Our mission is to inspire kids to stay active, have fun, and develop their skills through play.
            </p>
            <Link to="/aboutUs"><button className="btn btn-warning">Explore More</button>
            </Link>
          </div>
          <div>
            <div>
              <img className="rounded-lg" src={aboutImage} alt="About Us Image" />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
