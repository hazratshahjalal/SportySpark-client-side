import React from 'react';

const LatestNews = () => {
  const newsItems = [
    {
      title: 'Exciting New Product Launch',
      date: 'May 10, 2023',
      description: 'We are thrilled to announce the launch of our latest product, the XYZ Sports Ball. Check it out now!',
      imageUrl: 'https://www.linkpicture.com/q/news_6.jpg',
    },
    {
      title: 'Upcoming Events and Tournaments',
      date: 'May 15, 2023',
      description: 'Stay tuned for our upcoming events and tournaments. Join us for thrilling competitions and unforgettable experiences.',
      imageUrl: 'https://www.linkpicture.com/q/upcoming.jpg',
    },
  ];

  return (
    <section className="latest-news py-12 container mx-auto">
      <h2 className="text-4xl text-yellow-500 font-bold mb-6">Latest News</h2>
      <div className="grid grid-cols-2 gap-4">
        {newsItems.map((item, index) => (
          <div className="bg-slate-100 rounded-lg p-4 shadow-md" key={index}>
            <img src={item.imageUrl} alt={item.title} className="w-full object-cover h-48 object-cover rounded-md mb-4" />
            <h3 className="text-lg text-secondary-focus font-bold mb-2">{item.title}</h3>
            <p className="text-gray-500 mb-2">{item.date}</p>
            <p className="text-gray-700">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LatestNews;
