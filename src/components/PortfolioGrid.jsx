import React from 'react'

export default function PortfolioGrid({items = [], limit = 6}) {
  const show = items.slice(0, limit)
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
      {show.map((it, idx) => (
        <div key={idx} className='rounded overflow-hidden shadow'>
          <img src={it.image || 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1200&auto=format&fit=crop'} alt={it.title} className='w-full h-44 object-cover'/>
          <div className='p-3'>
            <h4 className='font-semibold'>{it.title}</h4>
            <p className='text-sm text-gray-600'>{it.caption}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
