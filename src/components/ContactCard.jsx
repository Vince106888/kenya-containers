import React from "react";
import QuoteForm from "./QuoteForm";
import { Phone, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-6 md:p-8 space-y-8 border border-gray-100 dark:border-gray-800"
    >
      {/* Contact Info */}
      <div className="space-y-5">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          Contact Information
        </h3>
        <p className="text-gray-600 dark:text-gray-400">
          Reach out to us through the following channels or fill out the form below — 
          we’ll get back to you promptly.
        </p>

        <div className="space-y-4 pt-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-orange-100 dark:bg-orange-900/40 rounded-full">
              <Phone className="w-5 h-5 text-orange-700 dark:text-orange-400" />
            </div>
            <a
              href="tel:+254706872269"
              className="text-lg font-medium text-gray-800 dark:text-gray-200 hover:text-orange-700 transition-colors"
            >
              +254 706 872 269
            </a>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-2 bg-orange-100 dark:bg-orange-900/40 rounded-full">
              <Mail className="w-5 h-5 text-orange-700 dark:text-orange-400" />
            </div>
            <a
              href="mailto:sales@kenyacontainers.com"
              className="text-lg font-medium text-gray-800 dark:text-gray-200 hover:text-orange-700 transition-colors"
            >
              sales@kenyacontainers.com
            </a>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-2 bg-orange-100 dark:bg-orange-900/40 rounded-full">
              <MapPin className="w-5 h-5 text-orange-700 dark:text-orange-400" />
            </div>
            <span className="text-lg font-medium text-gray-800 dark:text-gray-200">
              GK Building, Lunga Lunga Road, Nairobi, Kenya
            </span>
          </div>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-gray-200 dark:border-gray-700" />

      {/* Quote Form */}
      <div>
        <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
          Request a Free Quote
        </h4>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Fill in your details below and we’ll prepare a tailored quote for your container needs.
        </p>
        <QuoteForm />
      </div>
    </motion.div>
  );
}
