import React from 'react';
import Header from './Header';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import Mcontainer from './Mcontainer';
import Scontainer from './Scontainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTrendingMovies from '../hooks/useTrendinMovies';
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";


const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  useNowPlayingMovies();
  useTrendingMovies();
  usePopularMovies();

  return (
    <div>
      <Header />
      {showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <Mcontainer />
          <Scontainer />
        </>
      )}
      {/* <h1>Now Playing Movies</h1> */}
      {/* Here you could render the fetched movies */}
    </div>
  );
};

export default Browse;
