import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { Home, Briefcase, Truck, Droplet, Wrench } from "lucide-react";

export default function ServicesSection({ services }) {
  const { theme } = useTheme();

  // Define icons for matching service titles
  const iconMap = {
    "Container Homes": <Home size={32} />,
    "Office & Commercial": <Briefcase size={32} />,
    "Transport & Crane": <Truck size={32} />,
    "Ablution Blocks & Parks": <Droplet size={32} />,
    "Custom Fabrication": <Wrench size={32} />,
  };

  return (
    <section
      id="services"
      className={`relative py-16 sm:py-20 lg:py-24 transition-colors duration-700
        ${theme === "dark" ? "bg-slate-900 text-white" : "bg-gray-100 text-slate-900"}`}
    >
      {/* Background Accent */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_center,theme(colors.orange.400),transparent_70%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-amber-400 to-orange-600 bg-clip-text text-transparent"
        >
          Our Core Services
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-gray-600 dark:text-gray-400 mt-3 mb-10 text-base sm:text-lg max-w-3xl mx-auto"
        >
          From concept to completion — we deliver modern, modular, and sustainable
          container-based solutions for businesses and communities across Africa.
        </motion.p>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 mt-10">
          {services.map((service, i) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05, rotateX: 2, rotateY: -2 }}
              className={`group relative p-8 rounded-3xl shadow-lg border transition-all duration-500
                ${
                  theme === "dark"
                    ? "bg-slate-800 border-slate-700 hover:border-orange-400"
                    : "bg-white border-slate-200 hover:border-orange-400"
                }`}
            >
              {/* Icon */}
              <div className="flex justify-center mb-6 text-orange-500 dark:text-orange-400">
                {iconMap[service.title] || <Wrench size={32} />}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-3 bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {service.desc}
              </p>

              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-orange-400/10 to-yellow-300/10 blur-2xl opacity-0 group-hover:opacity-70 transition" />

              {/* Call-to-action */}
              <a
                href={`/services/${service.slug}`}
                className="text-sm font-semibold text-orange-500 dark:text-orange-400 hover:underline relative z-10"
              >
                Learn More →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
