// src/pages/Services.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import HeroSection from "../components/HeroSection";
import ServiceCard from "../components/ServiceCard";
import ServiceModal from "../components/ServiceModal";
import WhyUs from "../components/WhyUs";
import ServicesGrid from "../components/ServicesGrid";

// ====== Static Data ======
const services = [
  {
    title: "Container Homes",
    desc: "Luxury, modular 20ft & 40ft homes built sustainably from shipping containers.",
    slug: "container-homes",
    img: "/images/container-homes.jpg",
    details:
      "Kenya Containers designs, fabricates, and delivers fully finished container homes with insulation, plumbing, electrical systems, and custom interiors — ready for installation.",
  },
  {
    title: "Office & Commercial",
    desc: "Modern, mobile offices, cafes, and retail units tailored to your brand.",
    slug: "office-commercial",
    img: "/images/office-commercial.jpg",
    details:
      "We provide office pods, pop-up shops, and commercial units that are stylish, durable, and cost-effective — built to your exact specifications.",
  },
  {
    title: "Transport & Crane",
    desc: "Safe, nationwide delivery with our in-house cranes and transport fleet.",
    slug: "transport-crane",
    img: "/images/transport-crane.jpg",
    details:
      "From lifting to transportation and precise on-site placement, our logistics network ensures your containers are delivered safely anywhere in Kenya.",
  },
  {
    title: "Ablution Blocks & Parks",
    desc: "Durable sanitation and recreational units for sites and events.",
    slug: "ablution-parks",
    img: "/images/ablution-parks.jpg",
    details:
      "Our ablution units and container parks prioritize hygiene, comfort, and durability — perfect for schools, worksites, and event setups.",
  },
];

// ====== Services Page ======
export default function Services() {
  const { theme } = useTheme();
  const [selectedService, setSelectedService] = useState(null);

  return (
    <main
      className={`relative min-h-screen transition-colors duration-700
      ${
        theme === "dark"
          ? "bg-gradient-to-b from-slate-950 via-slate-900 to-slate-800 text-white"
          : "bg-gradient-to-b from-white via-gray-100 to-gray-200 text-slate-900"
      }`}
    >
      {/* ===== HERO ===== */}
      <HeroSection
        title="Our Services"
        subtitle="Delivering high-quality, custom container solutions across Kenya."
        bg="/images/services-hero.jpg"
        cta={{ label: "Get a Quote", link: "#contact" }}
      />

      {/* ===== SERVICES GRID ===== */}
      <ServicesGrid
        services={services} // ✅ pass the array
        onSelect={setSelectedService} // callback for modal
      />

      {/* ===== WHY US ===== */}
      <WhyUs />

      {/* ===== MODAL POPUP ===== */}
      <ServiceModal
        open={!!selectedService}
        onClose={() => setSelectedService(null)}
        title={selectedService?.title}
      >
        <p className="text-base leading-relaxed">{selectedService?.details}</p>
        {selectedService?.img && (
          <img
            src={selectedService.img}
            alt={selectedService.title}
            className="mt-6 w-full rounded-lg object-cover shadow-lg"
          />
        )}
      </ServiceModal>
    </main>
  );
}
