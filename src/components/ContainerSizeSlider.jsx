import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Verified ISO Container Sizes (SeaRates reference)
const sizes = [
  {
    label: "10ft Standard",
    dims: "2.991m × 2.438m × 2.591m",
    volume: "15.9 m³",
    image: "/photos/container-10ft.jpg",
    desc: "Compact and mobile — ideal for kiosks, security units, or small offices.",
  },
  {
    label: "20ft Standard",
    dims: "6.058m × 2.438m × 2.591m",
    volume: "33.2 m³",
    image: "/photos/container-20ft.jpg",
    desc: "The most common size — perfect for modular homes, offices, and retail pods.",
  },
  {
    label: "40ft Standard",
    dims: "12.192m × 2.438m × 2.591m",
    volume: "67.7 m³",
    image: "/photos/container-40ft.jpg",
    desc: "Excellent for large builds, classrooms, and multi-container complexes.",
  },
  {
    label: "40ft High Cube",
    dims: "12.192m × 2.438m × 2.896m",
    volume: "76.3 m³",
    image: "/photos/container-40ft-hc.jpg",
    desc: "Extra headroom for customized fabrication — ideal for housing, clinics, and offices.",
  },
];

export default function ContainerSizeSlider() {
  const [idx, setIdx] = useState(1);
  const { theme } = useTheme();
  const cur = sizes[idx];
  const touchStartX = useRef(0);

  // Swipe navigation for mobile
  const handleTouchStart = (e) => (touchStartX.current = e.touches[0].clientX);
  const handleTouchEnd = (e) => {
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (delta > 80) prevSlide();
    if (delta < -80) nextSlide();
  };

  const nextSlide = () => setIdx((prev) => (prev + 1) % sizes.length);
  const prevSlide = () => setIdx((prev) => (prev - 1 + sizes.length) % sizes.length);

  return (
    <section
      id="container-sizes"
      className={`relative py-16 px-4 sm:px-6 lg:px-12 transition-colors duration-700 ${
        theme === "dark"
          ? "bg-slate-950 text-white"
          : "bg-gray-50 text-slate-900"
      }`}
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
          Container Sizes & Dimensions
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-10 text-base sm:text-lg">
          Compare container dimensions, capacities, and discover what fits your build.
        </p>

        {/* Main Display */}
        <div
          className={`relative rounded-3xl overflow-hidden shadow-2xl border ${
            theme === "dark"
              ? "border-slate-800 bg-slate-900"
              : "border-gray-200 bg-white"
          } p-6 sm:p-8`}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Image */}
          <div className="relative w-full h-[240px] sm:h-[340px] mb-6 rounded-2xl overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.img
                key={cur.label}
                src={cur.image}
                alt={`${cur.label}`}
                className="absolute inset-0 w-full h-full object-cover rounded-2xl"
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />
            </AnimatePresence>

            {/* Overlay Dimensions */}
            <motion.div
              key={`${cur.label}-overlay`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.2 }}
              className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent text-white py-4 px-6 text-sm sm:text-base"
            >
              <p className="font-semibold">{cur.label}</p>
              <p className="text-gray-200">Dimensions: {cur.dims}</p>
              <p className="text-gray-300">Volume: {cur.volume}</p>
            </motion.div>

            {/* Arrows (Desktop) */}
            <button
              onClick={prevSlide}
              className="hidden sm:flex absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full transition"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextSlide}
              className="hidden sm:flex absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full transition"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Label Selector */}
          <div className="flex justify-between mt-3 text-xs sm:text-sm text-gray-500 dark:text-gray-400 font-medium">
            {sizes.map((s, i) => (
              <div
                key={s.label}
                className={`cursor-pointer transition ${
                  i === idx
                    ? "text-orange-500 dark:text-orange-400 scale-110"
                    : "opacity-70 hover:opacity-100"
                }`}
                onClick={() => setIdx(i)}
              >
                {s.label}
              </div>
            ))}
          </div>

          {/* Description */}
          <motion.p
            key={`${cur.label}-desc`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="mt-6 text-sm sm:text-base text-gray-600 dark:text-gray-300"
          >
            {cur.desc}
          </motion.p>
        </div>
      </div>
    </section>
  );
}
