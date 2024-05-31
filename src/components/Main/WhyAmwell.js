import React from "react";

const WhyAmwell = () => {
  return (
    <div>
      <section className="bg-gray-100 py-12 px-[100]">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="w-1/2">
            <video
              controls
              className="w-full h-auto rounded"
              src="https://media.istockphoto.com/id/1472788295/video/happy-positive-doctor-woman-giving-support-to-senior-patient.mp4?s=mp4-640x640-is&k=20&c=lVzqI9tlepiVG2JRyHHBy3SZhWWyAVv2JbPFckt9vkU="
            >
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="w-1/2 text-right">
            <h2 className="text-3xl font-bold mb-6 text-blue-500">
              Why Amwell
            </h2>
            <p className="mb-8">
              We’re here to digitally empower your healthcare ambitions. Our
              comprehensive, future-ready Converge™ platform enables hybrid care
              delivery at scale, anytime and any place—a care experience so
              seamless that it becomes simply healthcare.
            </p>
          </div>
        </div>
      </section>
      <section className="px-[150px] py-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-6xl font-bold text-blue-600 mb-3">115+</h3>
            <p className="font-semibold">Health Systems in U.S.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg ">
            <h3 className="text-6xl font-bold text-blue-600 mb-3">103K</h3>
            <p className="font-semibold">
              Active Providers completed visits on platform in 2023
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg ">
            <h3 className="text-6xl font-bold text-blue-600 mb-3">50+</h3>
            <p className="font-semibold">Health Plan Partners</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-6xl font-bold text-blue-600 mb-3">100M+</h3>
            <p className="font-semibold">
              Members have Amwell as a covered benefit
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyAmwell;
