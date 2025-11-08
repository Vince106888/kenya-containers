import React from 'react'
import { Link } from 'react-router-dom'
export default function NotFound(){
  return (
    <section className='container py-20 text-center'>
      <h1 className='text-4xl font-bold'>404 — Page not found</h1>
      <p className='mt-4'>The page you are looking for doesn't exist.</p>
      <Link to='/' className='mt-6 inline-block bg-action text-white px-4 py-2 rounded'>Back home</Link>
    </section>
  )
}
