import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { Hammer, Building2, Globe2 } from "lucide-react";

export default function AboutSection() {
  const { theme } = useTheme();
  const [current, setCurrent] = useState(0);

  const images = [
    "/photos/about-hero.jpg",
    "/photos/fabrication.jpg",
    "/photos/installation.jpg",
    "/photos/final-project.jpg",
  ];

  // Simple auto-slide logic
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section
      id="about"
      className={`relative overflow-hidden py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-12 transition-colors duration-700
        ${theme === "dark" ? "bg-slate-950 text-white" : "bg-gray-50 text-slate-900"}`}
    >
      {/* Background Accent */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,theme(colors.orange.500),transparent_70%)]" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* === LEFT COLUMN === */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-3xl sm:text-5xl font-extrabold bg-gradient-to-r from-amber-400 via-orange-500 to-yellow-400 bg-clip-text text-transparent leading-tight">
            Redefining Modular Innovation in Africa
          </h2>

          <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-lg">
            <span className="font-semibold text-orange-500 dark:text-orange-400">Kenya Containers</span> leads the region in premium container fabrication and modular design — transforming standard containers into <span className="font-medium">bespoke homes, offices, and commercial spaces</span> that inspire productivity and sustainability.
          </p>

          <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-lg">
            With over a decade of engineering experience, we combine speed, precision, and creativity to deliver modern spaces that empower businesses, communities, and Africa’s growing cities.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 pt-4">
            <Stat icon={<Hammer size={26} />} value="10+" label="Years Experience" />
            <Stat icon={<Building2 size={26} />} value="500+" label="Projects Delivered" />
            <Stat icon={<Globe2 size={26} />} value="Regional" label="Across E.A." />
          </div>
        </motion.div>

        {/* === RIGHT COLUMN: SLIDING IMAGE GALLERY === */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative group rounded-3xl overflow-hidden shadow-2xl border border-slate-700/20"
        >
          {/* Gallery */}
          <div className="relative w-full h-[420px] sm:h-[480px] overflow-hidden rounded-3xl">
            {images.map((src, index) => (
              <motion.img
                key={index}
                src={src}
                alt={`Kenya Containers project ${index + 1}`}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                  index === current ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
          </div>

          {/* Overlay Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 via-black/20 to-transparent text-white text-lg font-medium"
          >
            Crafting the Future — One Container at a Time
          </motion.div>

          {/* Hover glow accent */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-orange-500/10 to-yellow-400/10 blur-2xl opacity-0 group-hover:opacity-60 transition" />
        </motion.div>
      </div>
    </section>
  );
}

/* === Small Stat Card Subcomponent === */
const Stat = ({ icon, value, label }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="flex flex-col items-center justify-center p-3 bg-white/5 dark:bg-slate-800/60 rounded-xl border border-slate-200/10 backdrop-blur-sm"
  >
    <div className="mb-2 text-orange-500 dark:text-orange-400">{icon}</div>
    <h3 className="text-xl sm:text-2xl font-bold text-amber-400 dark:text-amber-300">{value}</h3>
    <p className="text-sm text-gray-500 dark:text-gray-400">{label}</p>
  </motion.div>
);
