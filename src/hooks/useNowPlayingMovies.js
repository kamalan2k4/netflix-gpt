import { options } from '../constants/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addNowPlayingMovies } from '../utils/movieSlice';
import { useEffect } from 'react';

const useNowPlayingMovies =() =>{
    const dispatch = useDispatch();
    const nowPlayingMovies = useSelector(
      (store) => store.movies.nowPlayingMovies
    );
    const getNowplayingMovies = async () => {
    // try {
      const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', options);
      // if (!response.ok) {
        // throw new Error(`HTTP error! status: ${response.status}`);
      // }
      const json = await response.json();
    //   console.log(json.results);
      dispatch(addNowPlayingMovies(json.results));
    // } 
    // catch (error) {
      // console.error('Error fetching now playing movies:', error);
    // }
  };

  useEffect(() => {
    !nowPlayingMovies && getNowplayingMovies();
  }, []);
};
export default useNowPlayingMovies;