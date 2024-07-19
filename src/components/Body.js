// import React, { useEffect } from 'react';
// import Browse from './Browse';
// import Login from './Login';
// import { createBrowserRouter} from 'react-router-dom';
// import { RouterProvider } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { auth } from '../utils/firebase';
// import { onAuthStateChanged } from 'firebase/auth';
// import { addUser, removeUser } from '../utils/userSlice';

// const Body = () => {
//    const dispatch = useDispatch();
   
   
//     const appRouter = createBrowserRouter([
//         {
//             path:"/",
//             element: <Login />,

//         },
//         {
//             path: "/browse",
//             element: <Browse />,
//         }
//     ])
//     useEffect(() => {
//       onAuthStateChanged(auth ,(user) => {
//         if (user) {
//           // User is signed in, see docs for a list of available properties
//           // https://firebase.google.com/docs/reference/js/auth.user
//           const {uid,email,displayName} = user;
//           dispatch(addUser({uid: uid,email: email,displayName: displayName}));
          
//           // ...
//         } else {
//           // User is signed out
//           dispatch(removeUser());
          
//           // ...
//         }
//       });
//     })
//   return (
//     <div>
//          <RouterProvider router={appRouter}/>
//     </div>
   
//   )
// }

// export default Body
import React from 'react';
import Browse from './Browse';
import Login from './Login';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';




const Body = () => {
   

    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login />,
        },
        {
            path: "/browse",
            element: <Browse />,
        }
    ]);



    return (
        <div>
            <RouterProvider router={appRouter} />
        </div>
    );
}

export default Body;
