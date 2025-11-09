// src/pages/ServiceDetail.jsx
import React from 'react'
import { useParams } from 'react-router-dom'
import HeroSection from '../components/HeroSection'
import QuoteForm from '../components/QuoteForm'
import PortfolioGrid from '../components/PortfolioGrid'

const sample = {
  'container-homes': {
    title: 'Container Homes — 20ft & 40ft',
    subtitle: 'Turnkey container homes, fully insulated & finished',
    features: [
      'Insulated walls for comfort',
      'Electrical fit-out ready',
      'Plumbing & sanitation included',
      'Custom interior finishes',
      'Eco-friendly and modular design'
    ],
    projects: [
      { title: '20ft Home — Nairobi', caption: 'Private residence', image: '' },
      { title: '40ft Family Home — Eldoret', caption: 'Spacious family unit', image: '' },
    ]
  }
}

export default function ServiceDetail() {
  const { slug } = useParams()
  const data = sample[slug] || sample['container-homes']

  return (
    <div className="w-full">
      {/* Hero Section */}
      <HeroSection
        title={data.title}
        subtitle={data.subtitle}
        bg="bg-orange-600 text-white"
        cta={{ text: "Request a Quote", link: "#quote" }}
      />

      {/* Features Section */}
      <section className="container mx-auto py-12 px-4 md:px-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Why Choose This Service</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white shadow-lg rounded-xl p-6 flex items-center space-x-4 hover:shadow-xl transition-shadow duration-300"
            >
              <span className="text-orange-600 text-2xl font-bold">✓</span>
              <p className="text-gray-700 font-medium">{feature}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="container mx-auto py-12 px-4 md:px-8">
        <h3 className="text-2xl font-semibold mb-6 text-gray-800">Recent Projects</h3>
        <PortfolioGrid items={data.projects} limit={6} />
      </section>

      {/* Quote Form */}
      <section id="quote" className="container mx-auto py-12 px-4 md:px-8 bg-gray-50 rounded-xl shadow-inner">
        <h4 className="text-2xl font-semibold mb-4 text-gray-800 text-center">Request a Quote</h4>
        <p className="text-center text-gray-600 mb-8">Fill out the form and our team will get back to you within 24 hours.</p>
        <QuoteForm />
      </section>
    </div>
  )
}
