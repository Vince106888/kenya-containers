// src/components/HeroSection.jsx
import React from 'react'
import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'

export default function HeroSection({ title, subtitle, bg, cta }) {
  const { theme } = useTheme()

  // ✅ Define gradients once — avoids flicker/glitch when switching themes
  const gradientText =
    theme === 'dark'
      ? 'bg-gradient-to-r from-yellow-400 to-yellow-300'
      : 'bg-gradient-to-r from-amber-500 to-amber-300'

  const textColor =
    theme === 'dark' ? 'text-slate-300' : 'text-slate-700'

  return (
    <section
      className={`relative py-10 sm:py-14 text-center overflow-hidden transition-colors duration-500 ${
        theme === 'dark' ? 'bg-dark' : 'bg-primary-50'
      }`}
      style={{
        backgroundImage: bg ? `url(${bg})` : 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 px-4 max-w-3xl mx-auto"
      >
        <h1
          className={`font-display font-extrabold mb-3 sm:mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight bg-clip-text text-transparent ${gradientText}`}
        >
          {title}
        </h1>

        <p className={`text-base sm:text-lg md:text-xl mb-5 sm:mb-6 ${textColor}`}>
          {subtitle}
        </p>

        {cta && (
          <motion.a
            href={cta.link}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="inline-block px-6 py-2.5 sm:px-8 sm:py-3 font-semibold rounded-lg text-black bg-gradient-to-r from-yellow-400 to-yellow-300 shadow-lg shadow-yellow-400/40 hover:shadow-yellow-400/60 transition-all"
          >
            {cta.label}
          </motion.a>
        )}
      </motion.div>
    </section>
  )
}
