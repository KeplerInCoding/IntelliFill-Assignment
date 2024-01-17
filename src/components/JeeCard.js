import React from 'react'
import jee from '../assets/logo/nta.png'

const JeeCard = () => {
  return (
    <div className=" md:w-[520px] h-[196px]  mr-4 shadow bg-white shadow-gray-300 mb-5 py-3 rounded-2xl flex flex-col items-center justify-center">
      <div className="md:w-[460px] w-[320px] h-[190px] flex flex-col items-center">
        <div className="md:w-[460px] w-full flex place-content-between items-center pb-2 ">
          <div className='flex gap-5'>

          <img src={jee} alt="logo" className="w-[50px] h-[50px] border border-gray-500 rounded-xl" />
          <div>
            <h2 className="text-lg font-semibold">JEE Mains {2023}</h2>
            <p className=" text-[12px] text-blue-500 font-semibold">National Testing Agency</p>
          </div>
          </div>
          <div className='flex gap-5'>
          <div className="text-blue-500 ">
                <i className="fa-regular fa-bookmark text-2xl"></i>
                </div>
                <div>
                <i class="fa-solid fa-share-nodes"></i>
                </div>
          </div>
        </div>

        <div className="flex flex-col place-content-between w-full h-full pt-2">
            <div className='border-b-[1.5px] border-gray-200 pb-2 flex flex-col gap-1'>
                <div className="flex gap-2 my-1">
                    <div>
                    <i class="fa-regular fa-calendar-days"></i>
                    </div>
                    <p className="font-semibold">Exam Date: {23} March, {2023}</p>
                </div>
                <div className="flex gap-2">
                    <div>
                    <i className="fa-solid fa-users"></i>
                    </div>
                    <p className="font-semibold">More than 20 Lakhs</p>
                </div>
            </div>

            <div className="flex items-center gap-5 place-content-between text-blue-500 text-[12px] font-semibold">
                <div className='text-gray-400'>Posted on {50} days ago, ends on {31} Dec</div>
                <button className='p-3 py-2 rounded-full bg-blue-500 text-white'>Apply now</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default JeeCard