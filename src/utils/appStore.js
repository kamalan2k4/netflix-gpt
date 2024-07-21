// import { configureStore } from "@reduxjs/toolkit";
// import userReducer from "./userSlice";

// const appStroe = configureStore(
//     {
//         reducer: {userReducer,

//         },
//     }
// );
// export default appStroe;
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./movieSlice";
import gptReducer from "./gptSlice"
import configReducer from "./configSlice"

const appStore = configureStore({
    reducer: {
        user: userReducer,  // Use 'user' as the key instead of 'userReducer'
        movies: moviesReducer,
        gpt: gptReducer,
        config: configReducer,
    },
});

export default appStore;
