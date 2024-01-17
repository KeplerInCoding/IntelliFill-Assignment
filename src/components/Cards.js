import React from 'react'
import { recentExams } from '../Data';

const Cards = () => {
  return (
    <div className='flex'>
        {recentExams.map((exam, index) => (
        <div key={index} className="flex-shrink-0 w-64 p-4 mr-4 border rounded-md">
          <h3 className="text-lg font-bold mb-2">{exam.name}</h3>
          <p className="text-gray-700 mb-2">Organization: {exam.organization}</p>
          <p className="text-gray-700 mb-2">Participants: {exam.participants}</p>
          <p className="text-gray-700 mb-2">Fee: {exam.fee}</p>
          <p className="text-gray-700 mb-2">Tags: {exam.tags}</p>
        </div>
      ))}
    </div>
  )
}

export default Cards