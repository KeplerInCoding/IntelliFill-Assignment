import React from 'react';
import { useNavigate } from 'react-router-dom';
import JeeCard from '../components/JeeCard';
import Description from '../components/Description';
import Interested from '../components/Interested';

const ExamDetails = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className='w-screen flex justify-center'>
      <div className='md:w-5/6 w-screen p-5'>
        <div className='flex gap-5 items-center font-bold' onClick={handleGoBack} style={{ cursor: 'pointer' }}>
          <i className="fa-solid fa-arrow-left"></i>
          <div className='text-lg my-3'>Back</div>
        </div>
        <div className='flex flex-wrap'>
          <div>
            <JeeCard/>
            <Description/>
          </div>
          <Interested/>
        </div>
      </div>
    </div>
  );
}

export default ExamDetails;
