// src/components/ServiceModal.jsx
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

export default function ServiceModal({ open, onClose, title, children }) {
  const { theme } = useTheme();

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Overlay */}
          <div
            className="absolute inset-0 cursor-pointer"
            onClick={onClose}
            style={{
              backgroundColor: theme === "dark" ? "rgba(0,0,0,0.6)" : "rgba(0,0,0,0.4)",
            }}
          />

          {/* Modal Content */}
          <motion.div
            className={`relative z-10 rounded-xl p-6 w-11/12 max-w-3xl transition-colors duration-500 ${
              theme === "dark" ? "bg-slate-900 text-white" : "bg-white text-slate-900"
            }`}
            initial={{ y: -50, opacity: 0, scale: 0.95 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 50, opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            <button
              onClick={onClose}
              className={`absolute top-4 right-4 text-xl font-bold transition-colors ${
                theme === "dark" ? "text-slate-300 hover:text-white" : "text-gray-500 hover:text-gray-900"
              }`}
            >
              ✕
            </button>

            <h3 className="text-2xl font-extrabold mb-4">{title}</h3>
            <div className="space-y-4">{children}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
