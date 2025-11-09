import React from 'react'

export default function Hero() {
  return (
    <div className='bg-[url("src/assets/logoheroimg.png")] h-screen bg-cover bg-black relative'>
      <div className='text-black'>
         <div className=' flex flex-col justify-center items-start h-screen ml-5 gap-5'>
        <div className='gap-5 flex flex-col w-1/2'>
           <h1 className='text-6xl font-bold'>Step Into <span className='text-blue-500'>Style</span> </h1>
           <p>Step into ultimate style and comfort with our premium sneakers. Designed for performance, durability, and confidence — perfect for every move and every moment in your journey.
</p>
             <div>
                <button className='text-white bg-black px-5 py-2 rounded hover:bg-black/70'>Explore Now</button>
             </div>
        </div>
       
      </div>
      </div>
     
    </div>
  )
}
