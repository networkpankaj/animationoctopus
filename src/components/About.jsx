import React from 'react'

const About = () => {
  return (
    <div  className='w-full p-20 bg-[#E6D3C4] rounded-tl-3xl rounded-tr-3xl  text-black'>

        <h1 className='font-[Neue_Montreal] text-[3vw] leading-[4.5vw] tracking-tight'>
        Ochi is a strategic presentation agency for forward-thinking businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.
        </h1>

        <div className='w-full flex gap-5 border-t-[2px] mt-20 border-[#73675d]'>
          <div className='w-1/2 mt-4'>
          <h1 className='text-7xl'>OUR APPROACH</h1>
          <button className='flex uppercase items-center gap-10 px-10 py-6 bg-zinc-900  mt-10 rounded-full text-white'>Read More
             <div className='w-3 h-3 bg-red-100 rounded-full'>
            </div>
            </button>
          </div>
          <div className='w-1/2 h-[70vh] mt-4 rounded-3xl bg-[#685d55]'></div>
        </div>
    </div>
  )
}
export default About