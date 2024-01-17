import React from 'react'; 

const Cards = ({ exams }) => {
  return (
    <div className='flex'>
      {exams.map((exam, index) => (
        <div key={index} className="flex-shrink-0 w-[300px] h-[230px] p-4 mr-4 border rounded-md">
            <div>
                <img src={exam.logo} alt="logo" className="w-5 object-cover mb-4 rounded-md" />
                <div>
                    <h2 className="text-lg font-bold mb-2">{exam.name}</h2>
                    <p className="text-gray-700 mb-2">Organization: {exam.organization}</p>
                </div>
                <div>
                    <i class="fas fa-bookmark"></i>
                </div>
            </div>
          
            <p className="text-gray-700 mb-2">Participants: {exam.participants}</p>
            <p className="text-gray-700 mb-2">Fee: {exam.fee}</p>
            <p className="text-gray-700 mb-2">Tags: {exam.tags}</p>
        </div>
      ))}
    </div>
  );
}

export default Cards;
