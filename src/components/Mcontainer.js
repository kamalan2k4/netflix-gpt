import React from 'react'
import VideoBackround from './VideoBackround'
import VideoTitle from './VideoTitle'
import { useSelector } from 'react-redux'

const Mcontainer = () => {
    const movies = useSelector((store)=> store.movies?.nowPlayingMovies);
    if(!movies) return;
    const mainMovie= movies[0];
    // console.log(mainMovie);

    const { original_title,overview,id}=mainMovie;
  return (
    <div>
       <div className="pt-[30%] bg-black md:pt-0">
       <VideoTitle title={original_title} overview ={overview} />
       <VideoBackround  id={id}/>
       </div>
        
    </div>
  )
}

export default Mcontainer