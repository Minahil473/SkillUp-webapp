import React from "react";
import ServiceCard from "../components/ServiceCard";

export const services = [
  {
    id: 1,
    title: "Event Management",
    description:
      "From corporate events to social gatherings, we manage everything — planning, logistics, and flawless execution — so you can focus on enjoying the moment.",
  },
  {
    id: 2,
    title: "Workshops & Training",
    description:
      "Boost your skills with our interactive workshops and training sessions, designed to inspire, educate, and empower participants in a hands-on environment.",
  },
  {
    id: 3,
    title: "Consultation & Support",
    description:
      "Get expert guidance at every step — from event strategy and budgeting to execution and post-event evaluation. We’re here to support your vision.",
  },
  {
    id: 4,
    title: "Custom Solutions",
    description:
      "Every event is unique. That’s why we provide tailored solutions, ensuring your event reflects your style, goals, and brand identity perfectly.",
  },
  {
    id: 5,
    title: "Marketing & Promotion",
    description:
      "Reach the right audience with our event marketing strategies — including social media campaigns, branding, and promotional materials that make your event shine.",
  },
  {
    id: 6,
    title: "Virtual & Hybrid Events",
    description:
      "Seamlessly connect audiences across the globe with our cutting-edge virtual and hybrid event solutions, making participation easy and engaging.",
  },
];

function ServicesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 bg-gray-50">
      <h1 className="text-3xl font-bold text-primary mb-12 text-center">
        Our Services
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
}

export default ServicesPage;
