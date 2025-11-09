import React from "react";
import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Instagram,
  Youtube,
  Send,
} from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { motion } from "framer-motion";

export default function Footer() {
  const { theme } = useTheme();

  return (
    <footer
      className={`relative overflow-hidden ${
        theme === "dark"
          ? "bg-gradient-to-b from-slate-950 via-slate-900 to-black text-gray-300"
          : "bg-gradient-to-b from-white via-gray-50 to-gray-100 text-gray-700"
      } pt-20 pb-10 transition-colors duration-500`}
    >
      {/* === GRID CONTENT === */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* === BRAND COLUMN === */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h4 className="text-2xl font-extrabold text-orange-600 mb-4">
            Kenya Containers
          </h4>
          <p
            className={`text-sm leading-relaxed ${
              theme === "dark" ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Transforming shipping containers into world-class spaces — homes,
            offices, schools, ablution blocks, and infrastructure projects
            across Kenya and East Africa.
          </p>

          <Link
            to="/quote"
            className="inline-block mt-6 px-6 py-2.5 bg-gradient-to-r from-orange-600 to-amber-500 text-white font-semibold rounded-full shadow hover:shadow-md hover:scale-[1.03] transition-transform"
          >
            Request a Quote
          </Link>
        </motion.div>

        {/* === QUICK LINKS === */}
        <div>
          <h5 className="text-lg font-semibold mb-4 text-orange-600">
            Quick Links
          </h5>
          <ul className="space-y-2 text-sm">
            {[
              { to: "/services", label: "Services" },
              { to: "/portfolio", label: "Portfolio" },
              { to: "/about", label: "About" },
              { to: "/contact", label: "Contact" },
            ].map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="hover:text-orange-500 transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* === SOLUTIONS === */}
        <div>
          <h5 className="text-lg font-semibold mb-4 text-orange-600">
            Solutions
          </h5>
          <ul className="space-y-2 text-sm">
            <li>Container Homes</li>
            <li>Commercial & Office Units</li>
            <li>Ablution Blocks & Parks</li>
            <li>Custom Fabrication</li>
            <li>Transport & Crane Hire</li>
          </ul>
        </div>

        {/* === CONTACT === */}
        <div>
          <h5 className="text-lg font-semibold mb-4 text-orange-600">Contact</h5>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <Phone size={15} className="text-orange-500" />{" "}
              <a
                href="tel:+254706872269"
                className="hover:text-orange-500 transition-colors"
              >
                +254 706 872 269
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={15} className="text-orange-500" />{" "}
              <a
                href="mailto:sales@kenyacontainers.com"
                className="hover:text-orange-500 transition-colors"
              >
                sales@kenyacontainers.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={15} className="text-orange-500" /> GK Building,
              Lunga Lunga Rd, Nairobi
            </li>
          </ul>

          {/* Socials */}
          <div className="flex gap-4 mt-6">
            {[Linkedin, Instagram, Youtube].map((Icon, idx) => (
              <motion.a
                key={idx}
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 3 }}
                className="p-2 rounded-full border border-orange-500/30 hover:border-orange-500 hover:bg-orange-500/10 transition"
              >
                <Icon size={20} className="text-orange-500" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      {/* === MAP & SUBSCRIBE ROW === */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mt-20 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Map */}
        <div className="rounded-2xl overflow-hidden shadow-lg h-60 sm:h-72 border border-gray-200 dark:border-slate-800">
          <iframe
            title="Kenya Containers Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63821.24002309879!2d36.83047669485311!3d-1.276930319980503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f134bdfcce719%3A0x45c908493b40cabf!2sKenya%20Containers!5e0!3m2!1sen!2ske!4v1762726423601!5m2!1sen!2ske"
            width="100%"
            height="100%"
            allowFullScreen
            loading="lazy"
            className="border-0 w-full h-full"
          ></iframe>
        </div>

        {/* Subscribe */}
        <div>
          <h5 className="text-lg font-semibold text-orange-600 mb-4">
            Get Project Updates
          </h5>
          <p
            className={`text-sm mb-4 ${
              theme === "dark" ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Stay informed about our latest container builds, innovations, and
            project showcases across Africa.
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thank you for subscribing!");
            }}
            className="flex flex-col sm:flex-row items-center gap-3"
          >
            <input
              type="email"
              placeholder="Enter your email"
              required
              className={`flex-1 px-4 py-2.5 rounded-full outline-none border ${
                theme === "dark"
                  ? "bg-slate-800 border-slate-700 text-gray-200"
                  : "bg-white border-gray-300 text-gray-800"
              } focus:ring-2 focus:ring-orange-500 transition`}
            />
            <button
              type="submit"
              className="px-5 py-2.5 rounded-full bg-gradient-to-r from-orange-600 to-amber-500 text-white font-semibold flex items-center gap-2 hover:scale-[1.03] transition-transform"
            >
              <Send size={16} /> Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* === COPYRIGHT === */}
      <div
        className={`border-t mt-14 pt-6 text-center text-sm ${
          theme === "dark"
            ? "border-slate-800 text-gray-500"
            : "border-gray-200 text-gray-500"
        }`}
      >
        © {new Date().getFullYear()}{" "}
        <span className="text-orange-600 font-semibold">Kenya Containers</span>.{" "}
        All Rights Reserved.
      </div>

      {/* === Gradient Accent === */}
      <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-orange-600 via-amber-500 to-yellow-400" />
    </footer>
  );
}
