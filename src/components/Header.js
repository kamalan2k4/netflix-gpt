import React from 'react'
import { useNavigate } from 'react-router-dom'
import { auth } from '../utils/firebase';
import { signOut } from 'firebase/auth';
import { useSelector } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import { addUser, removeUser } from '../utils/userSlice';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { toggleGptSearchView } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';
import { IMG, SUPPORTED_LANGUAGES } from '../constants/constants';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
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
    const handleGptSearchClick = () => {
      // Toggle GPT Search
      dispatch(toggleGptSearchView());
    };
  
    const handleLanguageChange = (e) => {
      dispatch(changeLanguage(e.target.value));
    };

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
        <img className="w-44 mx-auto md:mx-0" src= {IMG} alt='logo'>

</img>

{user && ( <div className="flex p-2 justify-between">
   {showGptSearch && (
            <select
              className="p-2 m-2 bg-gray-900 text-white"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="py-2 px-4 mx-4 my-2 bg-purple-800 text-white rounded-lg"
            onClick={handleGptSearchClick}
          >
            {showGptSearch ? "Homepage" : "GPT Search"}
          </button>
          <img
            className="hidden md:block w-12 h-12"
            alt="usericon"
            src={user?.photoURL}
          />
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
