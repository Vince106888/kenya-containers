import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Instagram, Youtube, Send } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

export default function Footer() {
  const { theme } = useTheme();

  return (
    <footer
      className={`relative ${
        theme === "dark"
          ? "bg-gradient-to-b from-slate-900 via-slate-950 to-black text-gray-300"
          : "bg-gradient-to-b from-gray-100 via-white to-gray-50 text-gray-700"
      } pt-16 pb-10 transition-colors duration-500`}
    >
      {/* === GRID CONTENT === */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* === BRAND COLUMN === */}
        <div>
          <h4 className="text-2xl font-bold text-orange-500 mb-4">Kenya Containers</h4>
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
            className="inline-block mt-6 px-5 py-2.5 bg-gradient-to-r from-orange-500 to-amber-400 text-white font-semibold rounded-full shadow hover:shadow-lg hover:scale-[1.02] transition"
          >
            Request a Quote
          </Link>
        </div>

        {/* === QUICK LINKS === */}
        <div>
          <h5 className="text-lg font-semibold mb-4 text-orange-500">Quick Links</h5>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                to="/services"
                className="hover:text-orange-400 transition-colors"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/portfolio"
                className="hover:text-orange-400 transition-colors"
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-orange-400 transition-colors">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-orange-400 transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* === SOLUTIONS === */}
        <div>
          <h5 className="text-lg font-semibold mb-4 text-orange-500">Solutions</h5>
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
          <h5 className="text-lg font-semibold mb-4 text-orange-500">Contact</h5>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <Phone size={15} className="text-orange-400" /> +254 700 000 000
            </li>
            <li className="flex items-center gap-2">
              <Mail size={15} className="text-orange-400" /> info@kenyacontainers.com
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={15} className="text-orange-400" /> Nairobi, Kenya
            </li>
          </ul>

          {/* Socials */}
          <div className="flex gap-4 mt-6">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-400 transition"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-400 transition"
            >
              <Instagram size={20} />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-400 transition"
            >
              <Youtube size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* === MAP & SUBSCRIBE ROW === */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mt-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Map */}
        <div className="rounded-xl overflow-hidden shadow-lg h-56 sm:h-72 border border-slate-700">
          <iframe
            title="Kenya Containers Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.859326704305!2d36.8219463!3d-1.2920659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d28df9f7d5%3A0x123456789abcdef!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2ske!4v1699999999999!5m2!1sen!2ske"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            className="border-0"
          ></iframe>
        </div>

        {/* Subscribe */}
        <div>
          <h5 className="text-lg font-semibold text-orange-500 mb-4">
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
              alert("Subscribed successfully!");
            }}
            className="flex flex-col sm:flex-row items-center gap-3"
          >
            <input
              type="email"
              placeholder="Enter your email"
              required
              className={`flex-1 px-4 py-2 rounded-full outline-none border ${
                theme === "dark"
                  ? "bg-slate-800 border-slate-700 text-gray-200"
                  : "bg-white border-gray-300 text-gray-700"
              } focus:ring-2 focus:ring-orange-400`}
            />
            <button
              type="submit"
              className="px-4 py-2 rounded-full bg-gradient-to-r from-orange-500 to-amber-400 text-white font-semibold flex items-center gap-2 hover:scale-[1.03] transition"
            >
              <Send size={16} /> Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* === COPYRIGHT === */}
      <div
        className={`border-t mt-12 pt-6 text-center text-sm ${
          theme === "dark" ? "border-slate-800 text-gray-500" : "border-gray-200 text-gray-500"
        }`}
      >
        © {new Date().getFullYear()}{" "}
        <span className="text-orange-500 font-semibold">Kenya Containers</span>.
        All Rights Reserved.
      </div>

      {/* === Gradient Accent === */}
      <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-orange-500 via-amber-400 to-yellow-400" />
    </footer>
  );
}
