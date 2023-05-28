import React from 'react'

export default function Success() {
  return (
    <div className='w-[80%] lg:w-[40%] mx-auto mt-[4rem] flex flex-col items-center'>
        <div className='relative h-[8rem] w-[8rem] flex justify-center items-center bg-purple-800 rounded-full before:w-[4rem] 
        before:h-[2rem] before:absolute before:border-l-[6px]  before:border-l-white before:border-b-[6px]  before:border-b-white before:-rotate-45'></div>
       <p className='text-[1.5rem] text-center lg:text-[2rem] font-[700] text-purple-800'>Thanks for registering</p> 
       <p className='text-[.8rem] font-[500] text-purple-500'>Proudly powered by comrade Anderson</p>
    </div>
  )
}
