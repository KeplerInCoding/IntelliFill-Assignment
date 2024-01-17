import React from 'react'; 
import { NavLink } from 'react-router-dom';

const Cards = ({ exams }) => {
  return (
    <div className='flex'>
      {exams.map((exam, index) => (
        <div key={index} className="flex-shrink-0 w-[300px] h-[230px] mr-4 border-[1.5px] bg-white border-gray-300 rounded-2xl flex flex-col items-center justify-center">
            <div className='w-[268px] h-[190px] flex flex-col items-center'>
                <div className='w-[268px] flex place-content-between items-center pb-2 border-b-[1.5px] border-gray-200 '>
                    <img src={exam.logo} alt="logo" className="w-[50px] h-[50px] border border-gray-500 rounded-xl" />
                    <div>
                        <h2 className="text-lg font-semibold">{exam.name}</h2>
                        <p className="text-gray-500 text-[12px]">{exam.organization}</p>
                    </div>
                    <div className='text-blue-500'>
                        <i class="fa-regular fa-bookmark text-2xl"></i>
                    </div>
                </div>

                <div className='flex flex-col place-content-between h-full pt-2'>
                    <div className='flex gap-2'>
                        <div><i class="fa-solid fa-users"></i></div>
                            <p className="font-semibold">{exam.participants}</p>
                    </div>
                    <div className='flex gap-2'>
                        <div><i class="fa-solid fa-wallet"></i></div>
                            <p className=" font-semibold">{exam.fee}</p>
                        </div>
                    
                    <p className='flex gap-3'>
                        {exam.tags.map((tag, index) => (
                            <span key={index}  className="border border-gray-400 p-[4px] px-3 rounded-xl text-sm text-gray-500 font-semibold">
                            {tag}
                            </span>
                        ))}
                    </p>
                    <div className='flex items-center gap-5 text-blue-500 text-[12px] font-semibold'>
                        <div>
                            {exam.name==='JEE Mains 2023' ? (
                                <NavLink to={`/exam`}>View details</NavLink>
                                ) : (
                                <div>View details</div>
                            )}
                        </div>
                        <i class="fa-solid fa-angle-right"></i>
                    </div>
                </div>
            </div>
        </div>
      ))}
    </div>
  );
}

export default Cards;
