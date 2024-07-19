import React from 'react'

const VideoTitle = ({title , overview}) => {
  return (
    <div  className=' absolute w-screen aspect-video text-white pt-[20%] px-24 bg-gradient-to-r from-black'>
        <h1 className='text-6xl font-bold'> {title}</h1>
        <p className='py-6 text-lg w-1/2'>{overview}</p>
        <div >
            <button className='bg-white m-3 hover:bg-opacity-80 text-black p-4 px-12 text-xl  rounded-lg'>
            ▷  Play
                </button>
            <button className='bg-gray-500 text-white p-4  hover:bg-opacity-80  px-12 text-xl  rounded-lg'>
            ⓘ More Info
                </button>
        </div>
    </div>
  )
}

export default VideoTitle