import React from 'react';

const Telehealth = () => {
  return (
    <section className="hero-section flex items-center justify-between px-8 py-16 bg-gray-100">
      <div className="hero-content w-1/2">
        <h1 className="text-4xl font-bold mb-4">Welcome to Amwell</h1>
        <p className="text-lg mb-6">Your trusted partner in telehealth solutions.</p>
        <button className="bg-blue-900 text-white py-2 px-4 rounded mr-4 hover:bg-blue-700">Request Demo</button>
        <button className="bg-transparent border border-blue-900 text-blue-900 py-2 px-4 rounded hover:bg-blue-900 hover:text-white">Learn More</button>
      </div>
      <div className="hero-image w-1/2">
        <img
          src="https://business.amwell.com/siteassets/images---new/mastheads/960x650_homepage_masthead-with-background-image_enabling-hybrid-care-at-scale.png"
          alt="Hero Background"
          className="w-full h-auto"
        />
      </div>
    </section>
  );
};

export default Telehealth;
