import React, { useEffect } from 'react';
import Header from './Header';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import Mcontainer from './Mcontainer';
import Scontainer from './Scontainer';


const Browse = () => {
  useNowPlayingMovies();

  return (
    <div>
      <Header />
      <Mcontainer />
      <Scontainer />
      {/* <h1>Now Playing Movies</h1> */}
      {/* Here you could render the fetched movies */}
    </div>
  );
};

export default Browse;
