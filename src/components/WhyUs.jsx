import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { Truck, Wrench, ShieldCheck, Star, X } from "lucide-react";

const items = [
  {
    title: "Mint Condition Containers",
    desc: "We source, inspect, and refurbish containers to international quality standards.",
    details:
      "Our containers undergo rigorous inspection and restoration — including structural reinforcement, repainting, and waterproof sealing. We ensure every unit meets international ISO standards for durability and performance.",
    icon: <ShieldCheck size={28} />,
  },
  {
    title: "Nationwide Delivery",
    desc: "Full logistics coverage — transport, crane setup, and site installation across Kenya.",
    details:
      "From Mombasa to Kisumu, our logistics team handles every delivery with precision. We manage permits, site placement, and crane installation, ensuring a smooth, safe setup wherever your project is located.",
    icon: <Truck size={28} />,
  },
  {
    title: "Custom Finishes",
    desc: "From insulation and lighting to plumbing and interiors, every detail is tailored to your project.",
    details:
      "Our fabrication experts transform standard containers into modern spaces — offices, homes, cafés, and more. We offer insulation, electrical wiring, plumbing, tiling, painting, and even custom branding.",
    icon: <Wrench size={28} />,
  },
  {
    title: "100+ Completed Builds",
    desc: "A proven track record of excellence across residential, corporate, and industrial sectors.",
    details:
      "Kenya Containers has delivered projects for leading corporates, NGOs, and government agencies. Our 100+ completed builds showcase reliability, design innovation, and consistent client satisfaction.",
    icon: <Star size={28} />,
  },
];

export default function WhyUs() {
  const { theme } = useTheme();
  const [activeItem, setActiveItem] = useState(null);

  return (
    <section
      id="why-us"
      className={`relative py-16 sm:py-20 lg:py-24 transition-colors duration-700 ${
        theme === "dark"
          ? "bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 text-white"
          : "bg-gradient-to-b from-gray-100 via-white to-gray-50 text-slate-900"
      }`}
    >
      {/* Background Accent */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_center,theme(colors.orange.400),transparent_70%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 bg-gradient-to-r from-orange-400 via-amber-500 to-yellow-400 bg-clip-text text-transparent"
        >
          Why Choose Kenya Containers?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto text-base sm:text-lg mb-10"
        >
          We combine engineering excellence, modern design, and end-to-end project delivery —
          offering Kenya’s most trusted container transformation solutions.
        </motion.p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mt-8">
          {items.map((it, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className={`relative p-6 sm:p-8 rounded-2xl shadow-lg transition-all duration-500 group ${
                theme === "dark"
                  ? "bg-slate-800/60 border border-slate-700 hover:border-orange-400"
                  : "bg-white border border-gray-200 hover:border-orange-400"
              }`}
            >
              {/* Glow Accent */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-500/10 to-yellow-400/10 blur-2xl opacity-0 group-hover:opacity-60 transition" />

              {/* Icon */}
              <div className="mb-4 flex justify-center text-orange-500 dark:text-orange-400">
                {it.icon}
              </div>

              {/* Title */}
              <h4 className="text-lg font-semibold mb-2 bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">
                {it.title}
              </h4>

              {/* Description */}
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed mb-3">
                {it.desc}
              </p>

              {/* Read More link */}
              <button
                onClick={() => setActiveItem(it)}
                className="text-orange-500 hover:text-orange-600 dark:text-orange-400 dark:hover:text-amber-300 text-sm font-medium transition"
              >
                Read more →
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {activeItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4"
            onClick={() => setActiveItem(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className={`relative max-w-md w-full rounded-2xl p-6 sm:p-8 shadow-2xl ${
                theme === "dark"
                  ? "bg-slate-900 text-white border border-slate-700"
                  : "bg-white text-gray-900 border border-gray-200"
              }`}
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveItem(null)}
                className="absolute top-3 right-3 text-gray-400 hover:text-orange-500 transition"
              >
                <X size={22} />
              </button>

              <div className="flex justify-center mb-4 text-orange-500 dark:text-orange-400">
                {activeItem.icon}
              </div>

              <h3 className="text-xl font-semibold mb-3">{activeItem.title}</h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                {activeItem.details}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
