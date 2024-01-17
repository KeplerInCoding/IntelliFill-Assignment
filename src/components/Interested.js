import React from 'react'
import { interestedExams }  from '../Data'

const Interested = () => {
  return (
    <div className="flex flex-col gap-4 bg-white shadow-md p-6 rounded-md w-[420px]  border-[1.5px] border-gray-200">
    {interestedExams.map((interestedExams, index) => (
      <div key={index} className=' border-b border-gray-300 pb-2'>
        <div className="flex items-center mb-1">
          <img src={interestedExams.logo} alt="logo" className="w-10 h-10 mr-4" />
          <div >
            <h2 className="text-lg font-bold">{interestedExams.name}</h2>
            <p className="text-gray-500">{interestedExams.organization}</p>
          </div>
        </div>
        
        <div className="flex items-center mb-4 text-gray-500">
          <div className="flex items-center gap-2">
            <i className="fa-solid fa-users"></i>
            <p className="font-semibold ">{interestedExams.participants}</p>
          </div>
        </div>

        <div className="flex items-center mb-4 text-gray-500">
          <div className="flex items-center gap-2">
            <i className="fa-solid fa-wallet"></i>
            <p className="font-semibold">{interestedExams.fee}</p>
          </div>
        </div>

        <div className="flex items-center justify-end text-blue-500 text-[12px] font-semibold">
          <div>View details</div>
          <i className="fa-solid fa-angle-right ml-2"></i>
        </div>
        
      </div>

    ))}
<div className='flex justify-center w-full'>
<button className='p-7 border-[3px] border-blue-500 py-3 w-fit  rounded-full text-blue-500 font-bold'>View all</button>

</div>
  </div>
  )
}

export default Interested