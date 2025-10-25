import React from "react";

function ServiceCard({ service }) {
  return (
    <div
      className="bg-white shadow-md rounded-lg p-6 transition-transform transform hover:-translate-y-2 hover:shadow-xl duration-300"
    >
      <h3 className="text-xl font-semibold text-primary mb-3">
        {service.title}
      </h3>
      <p className="text-gray-600">{service.description}</p>
    </div>
  );
}

export default ServiceCard;
