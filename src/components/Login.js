import React, { useState } from 'react';
import Header from './Header'
// import { useState } from 'react';

const Login = () => {
  const [isSignIn,setisSignIn] =useState(true);
  const signIn =()=>{
        setisSignIn(!isSignIn); 
  }
  // const handleToggle = (e) => {
  //   e.preventDefault();  // Prevent the default form submission behavior
  //   setisSignIn(!isSignIn);
  // }

  // const handleSubmit = (e) => {
  //   e.preventDefault();  // Prevent the default form submission behavior
  //   // Add logic for form submission here
  //   console.log('Form submitted');
  // }
  return (
    <div>
    <Header />
    <div className='absolute'>

      <img src='
        https://assets.nflxext.com/ffe/siteui/vlv3/8728e059-7686-4d2d-a67a-84872bd71025/e90516bd-6925-4341-a6cf-0b9f3d0c140a/IN-en-20240708-POP_SIGNUP_TWO_WEEKS-perspective_WEB_34324b52-d094-482b-8c2a-708dc64c9065_large.jpg'
         alt='bg'
        />
    </div>


    <form className=' text-white absolute mx-auto right-0 left-0 w-4/12 p-12 bg-black my-40 rounded-lg bg-opacity-80' >
      <h1 className='font-bold text-3xl'> {isSignIn?"Sign In":"Sign Up"}</h1>
      {!isSignIn && <input 
      type="text"
      placeholder=' Full Name'
      className='p-3 my-2 bg-gray-700 w-full'
      />}
      <input 
      type="text"
      placeholder='Email Address'
      className='p-3 my-2 bg-gray-700 w-full'
      />
      <input 
      type="text"
      placeholder='password'
      className='p-3 my-2 bg-gray-700 w-full'
      />
      <button className='my-4 p-4 bg-red-800 w-full rounded-lg'>
        {isSignIn?"Sign In":"Sign Up"}
      </button>
      <p className='font-thin my-6'>
        <button onClick={signIn}> {isSignIn?"Not a user? Sign Up here.":"already a user? Sign In."}</button>
      </p>

    </form>
    </div>
    
  )
}

export default Login