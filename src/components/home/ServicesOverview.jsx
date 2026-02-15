import React from "react";

const services = [
  {
    title: "Elderly Care",
    description: "Professional caregivers for senior support and companionship.",
  },
  {
    title: "Babysitting",
    description: "Trusted babysitters to care for your little ones safely.",
  },
  {
    title: "Home Assistance",
    description: "Reliable help for daily household needs and tasks.",
  },
];

const ServicesOverview = () => {
  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Our Services
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 bg-white shadow-lg rounded-xl hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
