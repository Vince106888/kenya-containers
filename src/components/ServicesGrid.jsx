// src/components/ServicesGrid.jsx
import React from "react";
import { motion } from "framer-motion";
import ServiceCard from "./ServiceCard";

export default function ServicesGrid({ services = [], onSelect, theme = "light" }) {
  if (!services || services.length === 0) return null;

  return (
    <section className="max-w-7xl mx-auto py-20 px-4 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((service, index) => (
        <motion.div
          key={service.slug}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.15 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="relative rounded-xl overflow-hidden cursor-pointer"
            onClick={() => onSelect(service)}
          >
            {/* Animated Glowing Border */}
            <motion.div
              className="absolute inset-0 rounded-xl pointer-events-none"
              style={{
                background: `linear-gradient(270deg, theme('colors.primary.400'), theme('colors.primary.500'), theme('colors.primary.600'), theme('colors.primary.400'))`,
                backgroundSize: "600% 600%",
                filter: "blur(12px)",
              }}
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            {/* Overlay Gradient (Subtle) */}
            <div
              className={`absolute inset-0 rounded-xl transition-opacity duration-500`}
              style={{
                background:
                  theme === "dark"
                    ? "linear-gradient(135deg, rgba(59,130,246,0.15), rgba(147,197,253,0.1))"
                    : "linear-gradient(135deg, rgba(59,130,246,0.1), rgba(147,197,253,0.05))",
              }}
            />

            {/* Service Card */}
            <ServiceCard
              title={service.title}
              desc={service.desc}
              slug={service.slug}
              img={service.img}
              theme={theme}
            />
          </motion.div>
        </motion.div>
      ))}
    </section>
  );
}
