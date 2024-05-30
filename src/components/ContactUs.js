import React from 'react';

const ContactUs = () => {
    return (
        <section className="bg-blue-600 py-12 relative">
            <div className="container mx-auto px-4 text-center">
                <div className="absolute top-0 left-0 p-4">
                    <img src="https://business.amwell.com/icons/cms/blocks/cta-footer/doctor-with-headset-icon.svg" alt="Contact Icon" className="w-16 h-16" />
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">Contact us</h2>
                <p className="text-lg text-white mb-8">
                    Let's talk about how we can digitally empower your healthcare ambitions.
                </p>
                <button className="bg-white text-blue-600 px-6 py-2 rounded-full font-semibold hover:bg-gray-200 transition duration-300">
                    Contact Us
                </button>
            </div>
        </section>
    );
}

export default ContactUs;
