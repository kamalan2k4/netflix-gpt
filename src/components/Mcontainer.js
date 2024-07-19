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
        <VideoTitle title={original_title} overview ={overview} />
        <VideoBackround  id={id}/>
    </div>
  )
}

export default Mcontainer