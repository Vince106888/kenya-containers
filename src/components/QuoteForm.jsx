import React from 'react'

export default function QuoteForm({compact}) {
  return (
    <form className={compact? 'max-w-md':'max-w-lg'}>
      <div className='grid grid-cols-1 gap-3'>
        <input className='border rounded px-3 py-2' placeholder='Full name' />
        <input className='border rounded px-3 py-2' placeholder='Phone or WhatsApp' />
        <input className='border rounded px-3 py-2' placeholder='Email' />
        <select className='border rounded px-3 py-2'>
          <option>Choose service</option>
          <option>Container Homes</option>
          <option>Office & Commercial</option>
          <option>Transport & Crane</option>
          <option>Ablution Blocks</option>
        </select>
        <textarea className='border rounded px-3 py-2' placeholder='Message (site, size, brief)...' rows={4}></textarea>
        <button type='button' className='bg-action text-white px-4 py-2 rounded-md font-semibold'>Request Quote</button>
      </div>
    </form>
  )
}
