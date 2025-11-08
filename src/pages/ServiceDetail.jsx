import React from 'react'
import { useParams } from 'react-router-dom'
import Hero from '../components/Hero'
import QuoteForm from '../components/QuoteForm'
import PortfolioGrid from '../components/PortfolioGrid'

const sample = {
  'container-homes': {
    title: 'Container Homes — 20ft & 40ft',
    subtitle: 'Turnkey container homes, insulated and finished',
    features: ['Insulated walls', 'Electrical fit-out', 'Plumbing & sanitation', 'Custom finishes'],
    projects: [
      {title:'20ft Home — Nairobi', caption:'Private residence', image:''},
      {title:'40ft Family Home — Eldoret', caption:'Spacious family unit', image:''},
    ]
  }
}

export default function ServiceDetail(){
  const {slug} = useParams()
  const data = sample[slug] || sample['container-homes']
  return (
    <div>
      <Hero title={data.title} subtitle={data.subtitle} />
      <section className='container py-12'>
        <h3 className='font-semibold'>Features</h3>
        <ul className='list-disc ml-6 mt-3'>
          {data.features.map((f,idx)=> <li key={idx}>{f}</li>)}
        </ul>

        <h3 className='mt-6 font-semibold'>Recent projects</h3>
        <PortfolioGrid items={data.projects} limit={6} />

        <div className='mt-8'>
          <h4 className='font-semibold'>Request a quote for this service</h4>
          <QuoteForm />
        </div>
      </section>
    </div>
  )
}
