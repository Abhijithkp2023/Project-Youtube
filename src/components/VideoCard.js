import React from 'react'

const VideoCard = ({info}) => {
    if(!info) {
     return <div>Loading...</div>
    }

    const {snippet , statistics} = info;
    const {channelTitle , title , thumbnails} = snippet;
    
  return (
    <div className='p-2 m-2 w-80 shadow-lg'>
      <img alt='thumbnails' src={thumbnails.medium.url} className='rounded-lg' />
      <ul>
        <li className='font-bold py-2 '>{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount} views</li>
      </ul>
    </div>
  )
}

export default VideoCard
