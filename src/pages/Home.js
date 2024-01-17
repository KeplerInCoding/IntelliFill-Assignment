import React from 'react'
import ads from '../assets/images/Ads.png'
import Cards from '../components/Cards'
import Tags from '../components/Tags'
import { recentExams, recommendedExams } from '../Data';


const Home = () => {
  return (
    <div>
      <div className='flex flex-col justify-center items-center px-5'>
        <div className='md:w-5/6 pt-10 flex justify-center'>
          <img width="980px" src={ads} alt="ads" />
        </div>

        <div className='md:w-5/6 w-screen flex text-xl font-bold py-6 place-content-between'>
          <div>Recommended Exams</div>
          <div className='text-blue-500'>See all</div>
        </div>

        <div className=' overflow-x-scroll md:w-5/6 w-screen no-scrollbar'>
          <Cards exams={recommendedExams}/>
        </div>

        <div className='md:w-5/6 w-screen flex text-xl font-bold py-6 place-content-between'>
          <div>Recent Exams</div>
          <div className='text-blue-500'>See all</div>
        </div>
        <div className='md:w-5/6 w-screen pb-5'>
        <Tags/>
        </div>
        
        <div className=' overflow-x-scroll md:w-5/6 w-screen no-scrollbar'>
          <Cards exams={recentExams}/>
        </div>
      </div>
    </div>
  )
}

export default Home