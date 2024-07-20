import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";
import { useEffect } from "react";
import { options } from "../constants/constants";

const useMovietrailer = (id) => {
  const dispatch = useDispatch();
  const trailerVideo = useSelector((store) => store.movies.trailerVideo);

  const getMovieVideos = async () => {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/" + id + "/videos?language=en-US",
        options
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const json = await response.json();

      if (json.results) {

        const filterData = json.results.filter((video) => video.type === "Trailer");
        const trailer = filterData.length ? filterData[0] : json.results[0];
        // console.log('Trailer fetched:', trailer); 
        // Logging the trailer object
        dispatch(addTrailerVideo(trailer));
      }
       else {
        console.error('No results found in the API response');
      }
    } 
    catch (error) {
      console.error('Error fetching movie videos:', error);
    }
  };

  useEffect(() => {
    if (id) {
      !trailerVideo &&  getMovieVideos();
    }
  }, [id]);
};

export default useMovietrailer;
