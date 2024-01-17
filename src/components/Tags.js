import React from 'react';

const Tags = () => {
  const tags = ['All', 'GATE', 'AP EAPCET', 'BITSAT', 'JEE Mains', 'JEE Advanced', 'TS EAMCET', 'TS EAMCET', 'Amity JEE'];

  return (
    <div className='flex gap-5  overflow-scroll no-scrollbar'>
      {tags.map((tag, index) => (
        <div
          key={index}
          className={`p-1 border-blue-500 px-3 rounded-full font-semibold flex-shrink-0 border ${tag === 'All' ? 'text-white bg-blue-500 ' : 'text-blue-500'}`}
        >
          {tag}
        </div>
      ))}
    </div>
  );
};

export default Tags;
