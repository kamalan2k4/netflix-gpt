import { options } from '../constants/constants';
import { useDispatch } from 'react-redux';
import { addTrendingMovies } from '../utils/movieSlice';
import { useEffect } from 'react';






const useTrendingMovies = () => {
    // Fetch Data from TMDB API and update store
    const dispatch = useDispatch();
  
    const getTrendingMovies = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/upcoming",
        options
      );
      const json = await data.json();
      dispatch(addTrendingMovies(json.results));
    };
  
    useEffect(() => {
      getTrendingMovies();
    }, []);
  };
  
  export default useTrendingMovies;