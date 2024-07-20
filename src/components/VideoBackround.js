import React, { useEffect } from 'react'
// import { options } from '../constants/constants'
import {useSelector } from 'react-redux'
// import { addTrailerVideo } from '../utils/movieSlice';
import useMovietrailer from '../hooks/useMovieTrailer';

const VideoBackround = ({id}) => {
    const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
    useMovietrailer(id);
    // console.log(id);
   

  return (
    <div>
         <iframe 
         className='w-screen  aspect-video'
        //  width="560" 
        //  height="315"
          src={"https://www.youtube.com/embed/" + trailerVideo?.key + "?autoplay=1&mute=1"} 
        //   title="YouTube video player"
        //    frameborder="0" 
        //    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        //     referrerpolicy="strict-origin-when-cross-origin" 
        //     allowfullscreen
            >

            </iframe>
    </div>
  )
}

export default VideoBackround;