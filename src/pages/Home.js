import React from 'react'
import ads from '../assets/images/Ads.png'
import Cards from '../components/Cards'
import Tags from '../components/Tags'

const Home = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <div>
        <img width="980" src={ads} alt="ads" />
      </div>
      <div>
        <div>Recommended Exams</div>
        <Cards />
      </div>
      <div>
      <div>Recent Exams</div>
      <Tags/>
        <Cards />
      </div>
    </div>
  )
}

export default Home