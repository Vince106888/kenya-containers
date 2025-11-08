import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import PortfolioGrid from "../components/PortfolioGrid";
import { ArrowRight } from "lucide-react";

export default function PortfolioSection({ items = [] }) {
  const { theme } = useTheme();

  return (
    <section
      className={`relative py-20 px-6 sm:px-10 lg:px-20 text-center transition-colors duration-500 ${
        theme === "dark"
          ? "bg-slate-950 text-white"
          : "bg-gradient-to-b from-white via-gray-50 to-gray-100 text-gray-800"
      }`}
    >
      {/* --- Section Heading --- */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
          Featured Projects
        </h2>
        <p
          className={`max-w-3xl mx-auto text-sm sm:text-base ${
            theme === "dark" ? "text-gray-400" : "text-gray-600"
          }`}
        >
          Explore a few of our signature container builds — designed and delivered
          across Kenya and East Africa, combining durability, functionality, and design excellence.
        </p>
      </motion.div>

      {/* --- Portfolio Grid --- */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto"
      >
        <PortfolioGrid items={items} limit={3} />
      </motion.div>

      {/* --- CTA Button --- */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-10"
      >
        <a
          href="/portfolio"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold hover:scale-[1.03] hover:shadow-lg transition"
        >
          View All Projects <ArrowRight size={18} />
        </a>
      </motion.div>

      {/* --- Decorative accent --- */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400" />
    </section>
  );
}
