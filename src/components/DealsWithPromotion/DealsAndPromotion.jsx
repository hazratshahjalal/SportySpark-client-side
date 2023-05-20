import React from 'react';

const DealsAndPromotion = () => {
  return (
    <section className="bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl text-center font-semibold mb-4">Deals and Promotions</h2>
        <p className="text-md text-gray-600 pb-6 mx-auto text-center w-2/3">Unleash the spark of excitement with exclusive deals and promotions at Sporty Spark. Discover incredible discounts and offers on top-quality sports toys. Shop now and ignite your passion for active play.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Deal/Promotion Card 1 */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold mb-2">Limited Time Offer</h3>
            <p className="text-gray-600 mb-4">Get 20% off on all outdoor sports equipment.</p>
            <a href="#" className="text-blue-500 hover:text-blue-700 font-medium">Shop Now</a>
          </div>

          {/* Deal/Promotion Card 2 */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold mb-2">Free Shipping</h3>
            <p className="text-gray-600 mb-4">Enjoy free shipping on orders over $50.</p>
            <a href="#" className="text-blue-500 hover:text-blue-700 font-medium">Learn More</a>
          </div>

          {/* Deal/Promotion Card 3 */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold mb-2">Bundle Discount</h3>
            <p className="text-gray-600 mb-4">Buy a sports toy and get 50% off on accessories.</p>
            <a href="#" className="text-blue-500 hover:text-blue-700 font-medium">Shop Bundles</a>
          </div>

          {/* Deal/Promotion Card 4 */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold mb-2">Clearance Sale</h3>
            <p className="text-gray-600 mb-4">Save up to 70% on selected items.</p>
            <a href="#" className="text-blue-500 hover:text-blue-700 font-medium">View Clearance</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DealsAndPromotion;
