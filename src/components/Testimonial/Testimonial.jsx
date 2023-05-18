import React from 'react';

const Testimonial = () => {
  const testimonialsData = [
    {
      id: 1,
      name: 'Sheikh Jubayer',
      position: 'Parent',
      testimonial: 'I found the sportySpark toy marketplace to be the perfect place to find sports toys for my kids. The website is user-friendly, and the variety of toys available is impressive.',
    },
    {
      id: 2,
      name: 'M Abdullah',
      position: 'Sports Coach',
      testimonial: 'As a sports coach, I highly recommend the sportySpark toy marketplace. They have a great selection of sports-related toys that are both educational and fun. My students love them!',
    },
    {
      id: 3,
      name: 'Emily Davis',
      position: 'Toy Collector',
      testimonial: 'I am a toy collector, and I must say that the sportySpark toy marketplace has exceeded my expectations. The quality of the toys and the attention to detail is outstanding. I couldn\'t be happier with my purchases.',
    },
  ];

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl text-center mb-8">Client Experiences</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonialsData.map(testimonial => (
            <div key={testimonial.id} className="bg-white rounded-lg shadow-md p-6">
              <p className="text-lg mb-4">{testimonial.testimonial}</p>
              <h4 className="text-xl text-secondary-focus font-bold">{testimonial.name}</h4>
              <p className="text-gray-500">{testimonial.position}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
