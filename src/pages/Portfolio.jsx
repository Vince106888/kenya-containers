import React from 'react'
import PortfolioGrid from '../components/PortfolioGrid'

const items = Array.from({length:9}).map((_,i)=>({
  title:`Project ${i+1}`,
  caption:'Container build',
  image:''
}))

export default function Portfolio(){
  return (
    <section className='container py-12'>
      <h1 className='text-3xl font-bold mb-6'>Portfolio</h1>
      <PortfolioGrid items={items} limit={9} />
    </section>
  )
}
