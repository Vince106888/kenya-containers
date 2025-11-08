// src/components/ServiceCard.jsx
import React from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'

export default function ServiceCard({ title, desc, slug, img }) {
  const { theme } = useTheme()

  return (
    <div
      className={`relative rounded-xl p-6 transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl ${
        theme === 'dark'
          ? 'bg-slate-800 text-white border-slate-700'
          : 'bg-white text-slate-900 border-gray-200'
      }`}
    >
      {/* Optional Image */}
      {img && (
        <div className="w-full h-40 rounded-lg overflow-hidden mb-4">
          <img
            src={img}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
          />
        </div>
      )}

      <h3 className="font-extrabold text-xl mb-2">{title}</h3>
      <p className={`text-sm sm:text-base ${theme === 'dark' ? 'text-slate-300' : 'text-gray-600'}`}>
        {desc}
      </p>
      <Link
        to={`/services/${slug}`}
        className="mt-4 inline-block text-blue-600 hover:text-blue-800 font-medium transition-colors"
      >
        Learn more →
      </Link>
    </div>
  )
}
