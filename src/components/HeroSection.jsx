// src/components/HeroSection.jsx
import React from 'react'
import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'

export default function HeroSection({ title, subtitle, bg, cta }) {
  const { theme } = useTheme()

  return (
    <section
      className={`relative py-16 sm:py-20 text-center overflow-hidden transition-all duration-500 ${
        theme === 'dark' ? 'bg-dark' : 'bg-primary-50'
      }`}
      style={{
        backgroundImage: bg ? `url(${bg})` : 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 px-4 max-w-3xl mx-auto"
      >
        <h1
          className="font-display font-extrabold mb-3 sm:mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight"
          style={{
            background: theme === 'dark'
              ? 'linear-gradient(90deg, #facc15, #eab308)'
              : 'linear-gradient(90deg, #fbbf24, #fcd34d)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          {title}
        </h1>

        <p
          className={`text-base sm:text-lg md:text-xl mb-5 sm:mb-6 ${
            theme === 'dark' ? 'text-slate-300' : 'text-slate-700'
          }`}
        >
          {subtitle}
        </p>

        {/* Optional CTA */}
        {cta && (
          <motion.a
            href={cta.link}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="relative inline-block px-8 py-3 font-semibold rounded-lg text-black overflow-hidden"
            style={{
              background: 'linear-gradient(90deg, #facc15, #eab308)',
              boxShadow: '0 0 25px rgba(250,204,21,0.5)',
            }}
          >
            <span className="relative z-10">{cta.label}</span>
          </motion.a>
        )}
      </motion.div>
    </section>
  )
}
