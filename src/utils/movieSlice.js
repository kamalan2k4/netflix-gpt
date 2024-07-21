import { createSlice } from "@reduxjs/toolkit";



const moviesSlice = createSlice({
    name:"movies",
    initialState: {
    nowPlayingMovies: null,
    popularMovies : null,
    trendingMovies: null,
    trailerVideo:null,

},
reducers:{
    addNowPlayingMovies: (state,action) => {
        state.nowPlayingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
        state.popularMovies = action.payload;
      },
      addTrendingMovies: (state, action) => {
        state.trendingMovies = action.payload;
      },
    addTrailerVideo: (state,action) => {
        state.trailerVideo = action.payload;
    },
},
});

export const { addNowPlayingMovies,addTrendingMovies,addTrailerVideo,addPopularMovies} = moviesSlice.actions;
export default moviesSlice.reducer;