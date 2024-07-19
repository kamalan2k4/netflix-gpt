import React from 'react'
import { useNavigate } from 'react-router-dom'
import { auth } from '../utils/firebase';
import { signOut } from 'firebase/auth';
import { useSelector } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import { addUser, removeUser } from '../utils/userSlice';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is signed in
            const { uid, email, displayName ,photoURL} = user;
            dispatch(addUser({ uid, email, displayName ,photoURL}));
            navigate("/browse");
        } else {
            // User is signed out
            dispatch(removeUser());
            navigate("/")
        }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
}, [dispatch]);
  const handleSignOut = () =>
  {
    signOut(auth).then(() => {
      // Sign-out successful.
      
    }).catch((error) => {
      // An error happened.
      navigate("/error");
    });
  }
  return (
    <div className=' px-8 py-4 absolute bg-gradient-to-b from-black z-30 w-full flex justify-between items-center'  >
        <img className='w-36  ' src='
https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' alt='logo'>

</img>
{user && (  <div className='flex items-center space-x-4  '>
          <img className='w-12 h-12   rounded-full' alt='user-logo' src={user?.photoURL} />
          <button className='text-white font-bold' onClick={handleSignOut}>
            Sign Out
          </button>
        </div>)
}


    </div>
  )
}

export default Header
// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { auth } from '../utils/firebase';
// import { signOut } from 'firebase/auth';

// const Header = () => {
//   const navigate = useNavigate();
  
//   const handleSignOut = () => {
//     signOut(auth).then(() => {
//       // Sign-out successful.
//       navigate("/");
//     }).catch((error) => {
//       // An error happened.
//       console.error("Sign out error:", error); // Log the error to the console
//       navigate("/error");
//     });
//   };

//   return (
//     <div className='py-10 px-40 absolute bg-gradient-to-b from-black z-30 flex justify-between'>
//       <img
//         className='w-2/12'
//         src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'
//         alt='logo'
//       />
//       <div className='flex p-2 justify-between'>
//         <img
//           className='w-12 m-4'
//           alt='user-logo'
//           src="https://as2.ftcdn.net/v2/jpg/00/65/77/27/1000_F_65772719_A1UV5kLi5nCEWI0BNLLiFaBPEkUbv5Fv.jpg"
//         />
//         <button className='text-white font-bold' onClick={handleSignOut}>
//           Sign Out
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Header;
