import React, { useRef, useState } from 'react';
import Header from './Header';
import { checkValidData } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
// import { addUser,removeUser } from '../utils/userSlice';

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const nameRef = useRef(null);
  const navigate = useNavigate();
  const dispatch=useDispatch();

  const toggleSignIn = () => {
    setIsSignIn(!isSignIn);
    setErrorMsg(null);  // Clear any existing error messages when toggling form
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Ensure refs are not null before accessing their values
    const name = nameRef.current ? nameRef.current.value : '';
    const email = emailRef.current ? emailRef.current.value : '';
    const password = passwordRef.current ? passwordRef.current.value : '';

    const msg = checkValidData(name, email, password, isSignIn);
    setErrorMsg(msg);
    if (msg) return;

    try {
      if (!isSignIn) {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        // Signed up 
        const user = userCredential.user;
       await updateProfile(user, {
           displayName: name,
            photoURL: "https://avatars.githubusercontent.com/u/12824231?v=4",
});

// Dispatch to Redux store
const { uid, email: userEmail, displayName, photoURL } = auth.currentUser;
dispatch(addUser({ uid, email: userEmail, displayName, photoURL }));

        console.log(user);
        navigate("/browse")
        setErrorMsg(null);  // Clear any error messages upon successful signup
      } else {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        // Signed in 
        const user = userCredential.user;
        console.log(user);
        navigate("/browse")
        setErrorMsg(null);  // Clear any error messages upon successful signin
      }
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      setErrorMsg(`${errorCode} - ${errorMessage}`);
    }
  };

  return (
    <div>
      <Header />
      <div className='absolute'>
        <img
          src='https://assets.nflxext.com/ffe/siteui/vlv3/8728e059-7686-4d2d-a67a-84872bd71025/e90516bd-6925-4341-a6cf-0b9f3d0c140a/IN-en-20240708-POP_SIGNUP_TWO_WEEKS-perspective_WEB_34324b52-d094-482b-8c2a-708dc64c9065_large.jpg'
          alt='bg'
        />
      </div>

      <form
        className='text-white absolute mx-auto right-0 left-0 w-4/12 p-12 bg-black my-40 rounded-lg bg-opacity-80'
        onSubmit={handleSubmit}
      >
        <h1 className='font-bold text-3xl'>
          {isSignIn ? 'Sign In' : 'Sign Up'}
        </h1>
        {!isSignIn && (
          <input
            ref={nameRef}
            type='text'
            placeholder='Full Name'
            className='p-3 my-2 bg-gray-700 w-full'
          />
        )}

        <input
          ref={emailRef}
          type='text'
          placeholder='Email Address'
          className='p-3 my-2 bg-gray-700 w-full'
        />
        <input
          ref={passwordRef}
          type='password'
          placeholder='Password'
          className='p-3 my-2 bg-gray-700 w-full'
        />
        <button className='my-4 p-4 bg-red-800 w-full rounded-lg'>
          {isSignIn ? 'Sign In' : 'Sign Up'}
        </button>
        <p className='font-thin my-6'>
          <button type='button' onClick={toggleSignIn}>
            {isSignIn ? 'Not a user? Sign Up here.' : 'Already a user? Sign In.'}
          </button>
        </p>
        {errorMsg && <p className='text-red-700 font-bold'>{errorMsg}</p>}
      </form>
    </div>
  );
};

export default Login;
// import React, { useRef, useState } from 'react';
// import Header from './Header';
// import { checkValidData } from '../utils/validate';
// import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
// import { auth } from '../utils/firebase';
// import { useNavigate } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { addUser } from '../utils/userSlice';

// const Login = () => {
//   const [isSignIn, setIsSignIn] = useState(true);
//   const [errorMsg, setErrorMsg] = useState(null);
//   const emailRef = useRef(null);
//   const passwordRef = useRef(null);
//   const nameRef = useRef(null);
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const toggleSignIn = () => {
//     setIsSignIn(!isSignIn);
//     setErrorMsg(null);  // Clear any existing error messages when toggling form
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Ensure refs are not null before accessing their values
//     const name = nameRef.current ? nameRef.current.value : '';
//     const email = emailRef.current ? emailRef.current.value : '';
//     const password = passwordRef.current ? passwordRef.current.value : '';

//     const msg = checkValidData(name, email, password, isSignIn);
//     setErrorMsg(msg);
//     if (msg) return;

//     try {
//       if (!isSignIn) {
//         const userCredential = await createUserWithEmailAndPassword(auth, email, password);
//         // Signed up 
//         const user = userCredential.user;

//         // Update profile
//         await updateProfile(user, {
//           displayName: name,
//           photoURL: "https://avatars.githubusercontent.com/u/12824231?v=4",
//         });

//         // Dispatch to Redux store
//         const { uid, email: userEmail, displayName, photoURL } = auth.currentUser;
//         dispatch(addUser({ uid, email: userEmail, displayName, photoURL }));

//         console.log(user);
//         navigate("/browse");
//         setErrorMsg(null);  // Clear any error messages upon successful signup
//       } else {
//         const userCredential = await signInWithEmailAndPassword(auth, email, password);
//         // Signed in 
//         const user = userCredential.user;

//         // Get updated user info
//         const { uid, email, displayName, photoURL } = auth.currentUser;

//         // Dispatch to Redux store
//         dispatch(addUser({ uid, email, displayName, photoURL }));

//         console.log(user);
//         navigate("/browse");
//         setErrorMsg(null);  // Clear any error messages upon successful signin
//       }
//     } catch (error) {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       setErrorMsg(`${errorCode} - ${errorMessage}`);
//     }
//   };

//   return (
//     <div>
//       <Header />
//       <div className='absolute'>
//         <img
//           src='https://assets.nflxext.com/ffe/siteui/vlv3/8728e059-7686-4d2d-a67a-84872bd71025/e90516bd-6925-4341-a6cf-0b9f3d0c140a/IN-en-20240708-POP_SIGNUP_TWO_WEEKS-perspective_WEB_34324b52-d094-482b-8c2a-708dc64c9065_large.jpg'
//           alt='bg'
//         />
//       </div>

//       <form
//         className='text-white absolute mx-auto right-0 left-0 w-4/12 p-12 bg-black my-40 rounded-lg bg-opacity-80'
//         onSubmit={handleSubmit}
//       >
//         <h1 className='font-bold text-3xl'>
//           {isSignIn ? 'Sign In' : 'Sign Up'}
//         </h1>
//         {!isSignIn && (
//           <input
//             ref={nameRef}
//             type='text'
//             placeholder='Full Name'
//             className='p-3 my-2 bg-gray-700 w-full'
//           />
//         )}

//         <input
//           ref={emailRef}
//           type='text'
//           placeholder='Email Address'
//           className='p-3 my-2 bg-gray-700 w-full'
//         />
//         <input
//           ref={passwordRef}
//           type='password'
//           placeholder='Password'
//           className='p-3 my-2 bg-gray-700 w-full'
//         />
//         <button className='my-4 p-4 bg-red-800 w-full rounded-lg'>
//           {isSignIn ? 'Sign In' : 'Sign Up'}
//         </button>
//         <p className='font-thin my-6'>
//           <button type='button' onClick={toggleSignIn}>
//             {isSignIn ? 'Not a user? Sign Up here.' : 'Already a user? Sign In.'}
//           </button>
//         </p>
//         {errorMsg && <p className='text-red-700 font-bold'>{errorMsg}</p>}
//       </form>
//     </div>
//   );
// };

// export default Login;

