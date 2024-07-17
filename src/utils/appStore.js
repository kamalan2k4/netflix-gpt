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

const appStore = configureStore({
    reducer: {
        user: userReducer,  // Use 'user' as the key instead of 'userReducer'
    },
});

export default appStore;
