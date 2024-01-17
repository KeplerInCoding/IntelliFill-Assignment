import React from 'react'
import ads from '../assets/images/Ads.png'
import Cards from '../components/Cards'
import Tags from '../components/Tags'
import { recentExams, recommendedExams } from '../Data';


const Home = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <div>
        <img width="980" src={ads} alt="ads" />
      </div>
      <div className=' overflow-x-scroll px-5 md:w-5/6 w-screen'>
        <div className='font-bold py-5 text-xl'>Recommended Exams</div>
        <Cards exams={recommendedExams}/>
      </div>
      <div className=' overflow-x-scroll p-5 md:w-5/6 w-screen'>
      <div className='font-bold py-5 text-xl'>Recent Exams</div>
      <Tags/>
        <Cards exams={recentExams}/>
      </div>
    </div>
  )
}

export default Home