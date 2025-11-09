import React from "react";
import HeroSection from "../components/HeroSection";
import PortfolioGrid from "../components/PortfolioGrid";

const heroBg = "/images/portfolio-hero.jpg"; // replace with your real hero image

const items = [
  {
    title: "Office Conversion Project",
    caption: "Customized office space from 40ft container",
    image: "/images/portfolio/office.jpg",
  },
  {
    title: "Mobile Clinic",
    caption: "Portable health facility container design",
    image: "/images/portfolio/clinic.jpg",
  },
  {
    title: "Classroom Block",
    caption: "Sustainable modular learning spaces",
    image: "/images/portfolio/classroom.jpg",
  },
  {
    title: "Cold Storage Unit",
    caption: "Temperature-controlled container build",
    image: "/images/portfolio/cold-storage.jpg",
  },
  {
    title: "Luxury Container Home",
    caption: "Modern residential container build",
    image: "/images/portfolio/home.jpg",
  },
  {
    title: "Security Office Unit",
    caption: "Guard house container fabrication",
    image: "/images/portfolio/security.jpg",
  },
  {
    title: "Workshop Unit",
    caption: "Heavy-duty fabrication workshop container",
    image: "/images/portfolio/workshop.jpg",
  },
  {
    title: "Café Container",
    caption: "Custom container restaurant setup",
    image: "/images/portfolio/cafe.jpg",
  },
  {
    title: "Logistics Storage",
    caption: "Industrial container storage setup",
    image: "/images/portfolio/storage.jpg",
  },
];

export default function Portfolio() {
  return (
    <div>
      {/* Hero */}
      <HeroSection
        title="Our Portfolio"
        subtitle="Explore some of the unique container transformations and projects we’ve delivered across Kenya and beyond."
        bg={heroBg}
      />

      {/* Intro Section */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-center text-gray-700">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">
          Crafting Innovative Container Solutions
        </h2>
        <p className="max-w-3xl mx-auto text-gray-600 mb-12">
          From modern office spaces and mobile clinics to housing, cafés, and storage units — we’ve
          turned simple containers into functional, beautiful, and durable solutions tailored to
          our clients’ needs. Each project reflects our commitment to precision, creativity, and
          quality.
        </p>

        <PortfolioGrid items={items} limit={9} />
      </section>

      {/* CTA */}
      <section className="bg-orange-700 text-white py-16 text-center">
        <h2 className="text-2xl font-semibold mb-4">
          Have a project in mind?
        </h2>
        <p className="mb-6 text-white/90">
          Let’s help you transform your idea into a functional, stylish container solution.
        </p>
        <a
          href="/contact"
          className="inline-block bg-white text-orange-700 font-medium px-6 py-3 rounded-xl shadow hover:bg-gray-100 transition"
        >
          Talk to Our Team
        </a>
      </section>
    </div>
  );
}
