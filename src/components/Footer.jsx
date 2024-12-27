import React from 'react'

const Footer = () => {
  return (
    <div className='flex gap-5 w-full h-screen bg-zinc-900 p-20'>
      <div className="w-1/2">
      <div className="heading">
        <h1 className='text-[5vw] font-semibold uppercase leading-none -mb-3'>Virtual-</h1>
        <h1 className='text-[5vw] font-semibold uppercase leading-none -mb-3'>Octopus</h1>
      </div>
      </div>
      <div className="w-1/2">
        <h1 className='text-[6vw] font-semibold uppercase leading-none -mb-5'>Presentation</h1>
        <div className="dets mt-10">
          <a className='block font-light text-lg'  href='#'>Facebook</a>
          <a className='block font-light text-lg' href='#'>Instagram</a>
          <a className='block font-light text-lg' href='#'>Twitter</a>
          <a className='block font-light text-lg' href='#'>Pinterest</a>
        </div>
      </div>
    </div>
  )
}

export default Footer