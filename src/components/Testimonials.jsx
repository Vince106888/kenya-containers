import React from 'react'

const data = [
  {name:'Grace — Nairobi', quote:'Very professional team and fast delivery.'},
  {name:'Peter — Mombasa', quote:'Quality finish and excellent communication.'},
  {name:'Amina — Nakuru', quote:'Affordable and reliable service.'},
]

export default function Testimonials(){
  return (
    <section className='container py-12'>
      <h2 className='text-2xl font-bold mb-6'>What clients say</h2>
      <div className='grid md:grid-cols-3 gap-4'>
        {data.map((t,idx)=>(
          <div key={idx} className='p-4 border rounded'>
            <p className='text-sm'>“{t.quote}”</p>
            <p className='mt-3 text-sm font-medium'>— {t.name}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
