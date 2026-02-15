import React from "react";

const testimonials = [
  {
    name: "Sarah Ahmed",
    feedback:
      "CareConnect made it so easy to find a reliable caregiver for my mother. Highly recommended!",
  },
  {
    name: "Rahim Khan",
    feedback:
      "The babysitter we booked was professional and caring. Great experience!",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          What Our Clients Say
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-xl shadow-md"
            >
              <p className="text-gray-600 mb-4">
                "{item.feedback}"
              </p>
              <h4 className="font-semibold">
                — {item.name}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
