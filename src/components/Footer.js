import React from 'react'

const Footer = () => {
  return (
    <div className='h-[228px] border border-black'>
      <div className='flex justify-center items-center h-full'>
        <div className='flex flex-col justify-center items-center'>
          <div className='text-4xl font-bold'>Subscribe to our newsletter</div>
          <div className='text-2xl font-bold'>Get the latest news and updates</div>
          <div className='flex justify-center items-center'>
            <input className='border border-black rounded-md p-2' type="text" placeholder='Enter your email address' />
            <button className='border border-black rounded-md p-2'>Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer