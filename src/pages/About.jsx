import React from 'react'
import Hero from '../components/Hero'
import WhyUs from '../components/WhyUs'
import Testimonials from '../components/Testimonials'

export default function About(){
  return (
    <div>
      <Hero title='About Kenya Containers' subtitle='We deliver modular container solutions across Kenya' />
      <section className='container py-12'>
        <h2 className='text-2xl font-bold'>Our Story</h2>
        <p className='mt-4 text-gray-700'>Founded in 2015, Kenya Containers has supplied and installed container-based builds across residential and commercial sectors.</p>

        <h3 className='mt-6 font-semibold'>Mission</h3>
        <p className='text-gray-700'>To provide affordable, durable, and rapidly deployable container structures across Kenya.</p>
      </section>

      <WhyUs />
      <Testimonials />
    </div>
  )
}
