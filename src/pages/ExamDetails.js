import React from 'react'
import JeeCard from '../components/JeeCard'
import Description from '../components/Description'
import Interested from '../components/Interested'

const ExamDetails = () => {
  return (
    <div className='w-screen flex justify-center'>
      <div className='md:w-5/6 w-screen p-5'>
        <div className='flex gap-5 items-center font-bold'>
          <i class="fa-solid fa-arrow-left"></i>
          <div className='text-lg my-3'>Back</div>
        </div>
        <div className='flex'>
          <div>
            <JeeCard/>
            <Description/>
          </div>
          <Interested/>
        </div>
      </div>
    </div>
  )
}

export default ExamDetails