import React from "react";
import QuoteForm from "./QuoteForm";
import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactCard() {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl shadow-xl p-6 md:p-8 space-y-6">
      {/* Contact Info */}
      <div className="space-y-3 text-gray-800 dark:text-gray-200">
        <div className="flex items-center gap-3">
          <Phone className="w-6 h-6 text-cyan-600" />
          <span className="text-lg">+254 700 000 000</span>
        </div>
        <div className="flex items-center gap-3">
          <Mail className="w-6 h-6 text-cyan-600" />
          <span className="text-lg">info@kenyacontainers.com</span>
        </div>
        <div className="flex items-center gap-3">
          <MapPin className="w-6 h-6 text-cyan-600" />
          <span className="text-lg">GK Building, Lunga Lunga Road, Nairobi, Kenya</span>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-gray-200 dark:border-gray-700" />

      {/* Quote Form */}
      <div>
        <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">
          Request a Free Quote
        </h4>
        <QuoteForm />
      </div>
    </div>
  );
}
