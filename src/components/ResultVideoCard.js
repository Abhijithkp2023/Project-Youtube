import React from 'react'

const ResultVideoCard = ({info}) => {
   const {thumbnails , channelTitle ,title} = info.snippet;
   
  return (
    <div className='flex w-full shadow-lg'>
      <div className='w-1/2 ml-24 py-9'>
       <img className='' src={thumbnails.high.url} alt='thumbnail' />
      </div>
      <div className='w-1/2 py-9 flex flex-col'>
      <span className='text-2xl font-bold'>{title}</span>
      <div className='flex items-center'>
      <img
          className="mt-6 h-8"
          alt="channel"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        />
      <span className='mt-6 mx-3'>{channelTitle}</span>
      </div>
      </div>
    </div>
  )
}

export default ResultVideoCard
