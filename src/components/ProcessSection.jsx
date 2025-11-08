import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { PencilRuler, Truck, Wrench } from "lucide-react";

const iconMap = {
  "Design & Fabrication": <PencilRuler size={28} className="text-cyan-400" />,
  "Transport & Delivery": <Truck size={28} className="text-cyan-400" />,
  "Installation & Support": <Wrench size={28} className="text-cyan-400" />,
};

export default function ProcessSection({ steps }) {
  const { theme } = useTheme();

  return (
    <section
      className={`relative py-20 px-6 sm:px-10 lg:px-20 ${
        theme === "dark"
          ? "bg-slate-900 text-white"
          : "bg-gradient-to-b from-white via-gray-50 to-gray-100 text-gray-800"
      } transition-colors duration-500`}
    >
      {/* Section Heading */}
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          How We Work
        </h2>
        <p
          className={`max-w-2xl mx-auto mt-4 text-sm sm:text-base ${
            theme === "dark" ? "text-gray-400" : "text-gray-600"
          }`}
        >
          From design to delivery, our process ensures every container project
          meets global standards for quality, safety, and precision.
        </p>
      </div>

      {/* Process Steps */}
      <div className="relative max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            whileHover={{ scale: 1.04 }}
            className={`relative z-10 p-8 rounded-2xl shadow-lg border ${
              theme === "dark"
                ? "bg-slate-800 border-slate-700 hover:border-cyan-400"
                : "bg-white border-gray-200 hover:border-cyan-400"
            } transition`}
          >
            <div className="flex flex-col items-center text-center">
              {/* Icon */}
              <div className="mb-4 flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20">
                {iconMap[step.title] || (
                  <div className="text-cyan-400 font-bold text-xl">{i + 1}</div>
                )}
              </div>

              {/* Title */}
              <h3 className="text-lg sm:text-xl font-semibold text-amber-500 dark:text-amber-400 mb-2">
                {step.title}
              </h3>

              {/* Description */}
              <p
                className={`text-sm sm:text-base ${
                  theme === "dark" ? "text-gray-300" : "text-gray-700"
                } leading-relaxed`}
              >
                {step.desc}
              </p>
            </div>
          </motion.div>
        ))}

        {/* Connecting Line (Desktop only) */}
        <div className="hidden sm:block absolute top-[50%] left-0 w-full border-t border-dashed border-cyan-400/40 -z-10" />
      </div>
    </section>
  );
}
