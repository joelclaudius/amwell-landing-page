import React from "react";

const ClientEmpowerment = () => {
  return (
    <section className=" py-12">
      <div className="container mx-auto px-4 flex items-center">
        <div className="w-1/2">
          <img
            src="https://business.amwell.com/siteassets/images---new/three-stack-card/580-x-450_homepage_content-with-three-cards_we-are-empowering-our-clients.png"
            alt="We are empowering our clients"
            className="w-full h-auto rounded"
          />
        </div>
        <div className="w-1/2 pl-8">
          <h2 className="text-3xl font-bold mb-8 text-blue-500">
            We are empowering our clients
          </h2>

          <div className="bg-white p-5 shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out rounded-lg py-4 mb-4 h-100">
            <h3 className="text-2xl font-semibold mb-4 text-blue-500">
              Phone patient
            </h3>
            <p className="mb-4">Improving financial & clinical performance</p>
            <p className="mb-4">
              In one year, Corewell Health saved more than $1 million in
              emergency room revisits with Amwell Automated Care Programs.
            </p>
            <a href="#" className="text-blue-700 hover:underline">
              Read case study
            </a>
          </div>

          <div className="bg-white p-5 shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out rounded-lg py-4 mb-4 h-100">
            <h3 className="text-2xl font-semibold mb-4 text-blue-500">
              Optimizing workforce
            </h3>
            <p className="mb-4">
              M Health Fairview simplified its digital care workflow by deeply
              embedding the Converge platform within its Epic EHR, driving
              2,100+ providers to adopt the technology with a 90% satisfaction
              rate.
            </p>
            <a href="#" className="text-blue-700 hover:underline">
              Read case study
            </a>
          </div>

          <div className="bg-white p-5 shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out rounded-lg py-4 mb-4 h-100">
            <h3 className="text-2xl font-semibold mb-4 text-blue-500">
              Achieving digital care success
            </h3>
            <p className="mb-4">
              In just 18 months, more than 1 million visits were completed on
              the Converge platform by over 20,000 providers. Find out why
              clients say our future-ready platform is “easy to adopt” and
              “truly life altering.”
            </p>
            <a href="#" className="text-blue-700 hover:underline">
              Watch video
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientEmpowerment;
