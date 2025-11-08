import React from "react";
import { Link, NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/services", label: "Services" },
    { to: "/portfolio", label: "Portfolio" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-white/80 dark:bg-slate-900/70 border-b border-gray-200 dark:border-slate-800 shadow-sm transition-theme">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        {/* === LOGO === */}
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary-500 text-white font-bold flex items-center justify-center rounded-md shadow">
            KC
          </div>
          <span className="font-display text-lg font-semibold text-gray-900 dark:text-white">
            Kenya Containers
          </span>
        </Link>

        {/* === DESKTOP NAV === */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `transition font-medium ${
                  isActive
                    ? "text-primary-500 dark:text-primary-400"
                    : "text-gray-700 dark:text-gray-300 hover:text-primary-400"
                }`
              }
            >
              {label}
            </NavLink>
          ))}

          {/* CTA */}
          <Link
            to="/contact"
            className="ml-3 inline-block bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-md font-medium shadow-sm transition"
          >
            Get a Quote
          </Link>

          {/* Theme Toggle */}
          <ThemeToggle />
        </nav>

        {/* === MOBILE MENU BUTTON === */}
        <button
          aria-label="menu"
          onClick={() => setMenuOpen((o) => !o)}
          className="md:hidden p-2 rounded-md text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-slate-800 transition"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* === MOBILE MENU OVERLAY === */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              key="mobile-menu"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute top-16 left-0 right-0 bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-slate-800 shadow-lg md:hidden"
            >
              <div className="flex flex-col py-3 space-y-1">
                {navLinks.map(({ to, label }) => (
                  <NavLink
                    key={to}
                    to={to}
                    onClick={() => setMenuOpen(false)}
                    className={({ isActive }) =>
                      `block px-6 py-3 text-sm font-medium ${
                        isActive
                          ? "text-primary-500 dark:text-primary-400 bg-gray-50 dark:bg-slate-800"
                          : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800"
                      }`
                    }
                  >
                    {label}
                  </NavLink>
                ))}

                <Link
                  to="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="mx-6 my-3 text-center bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-md font-medium transition"
                >
                  Get a Quote
                </Link>

                <div className="flex justify-center pb-3">
                  <ThemeToggle />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
