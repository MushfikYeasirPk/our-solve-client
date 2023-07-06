import React, { useState } from 'react';
import app from '../../firebase/Firebase.init';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, signInWithEmailAndPassword } from "firebase/auth";
import { Link, useLocation, redirect, Navigate, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";


const SignIn = () => {
    const [success, setSuccess] = useState('')
    const location = useLocation()
    const navigate = useNavigate()
    const [userInfo, setuserInfo] = useState({})
    const auth = getAuth(app)
    const goolgeProvider = new GoogleAuthProvider()
    const from = location.state?.from?.pathname || '/'
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
        setSuccess('')
        signInWithEmailAndPassword(auth, data.email, data.password)
            .then((userCredential) => {
                
                const user = userCredential.user;
                console.log(user);
                setSuccess('Sign in successfully')
                navigate(from, { replace: true })

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage);
                // setError(errorMessage)
            });

    };


    const handleGoogleSignIn = () => {
        signInWithPopup(auth, goolgeProvider)
            .then(result => {

                const user = result.user
                console.log(user);
                const saveUser = { name: user.displayName, email: user.email }
                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(() => {
                        navigate(from, { replace: true });
                    })
                setuserInfo(user)

            })
            .catch(error => {
                console.log('error', error.message)
            })
    }
    const handleGoogleSignOut = () => {
        signOut(auth)
            .then((result) => {
                // Sign-out successful.
                console.log(result);
                setuserInfo(null)
            })
            .catch((error) => {
                console.log(error.message);
            });
    }




    return (
        // <div className='flex items-center justify-center'>
        //     <div className="flex h-screen items-center">
        //         <div className="m-auto w-96">

        //             <form onSubmit={handleSubmit(onSubmit)} className="rounded-lg px-8 py-10 mb-4">
        //                 <div className="mb-4">
        //                     <label className="block text-gray-700 font-bold mb-2" htmlFor="username">
        //                         User Email
        //                     </label>
        //                     <input   {...register("email", { required: true })}
        //                         className=" form-input shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        //                         id="email" name='email'
        //                         type="email"
        //                         placeholder="Enter your email" required
        //                     />
        //                     {errors.exampleRequired && <span>Please put email</span>}
        //                 </div>
        //                 <div className="mb-4">
        //                     <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
        //                         Password
        //                     </label>
        //                     <input  {...register("password", { required: true })}
        //                         className="form-input shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        //                         id="password" password='password'
        //                         type="password"
        //                         placeholder="Enter your password" required
        //                     />
        //                     {errors.exampleRequired && <span>Please put password</span>}
        //                 </div>
        //                 <div className="flex items-center justify-between">
        //                     <button
        //                         className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        //                         type="submit"
        //                     >
        //                         Sign In
        //                     </button>


        //                     <a className="inline-block align-baseline font-bold text-sm text-green-500 hover:text-green-800" href="#">
        //                         Forgot Password?
        //                     </a>

        //                 </div>

        //                 <div className='text-green-500 text-center mt-2 font-bold'><p>{success}</p></div>
        //             </form>
        //             <p className="text-center text-lg mb-2">
        //                 Don't have an account?{' '}
        //                 <Link to='/register' className="font-bold hover:underline" href="#">
        //                     Sign up
        //                 </Link>
        //             </p>
        //             {/* userInfo ? SIng out : Sign in */}
        //             {userInfo ?
        //                 <div className=''>
        //                     <div className="cursor-pointer">
        //                         <img onClick={handleGoogleSignIn}

        //                             className=" social-button"
        //                             src="https://i.ibb.co/gSTHXZJ/google-btn.png"
        //                             alt=""
        //                         />
        //                     </div>
        //                 </div>

        //                 :

        //                 <div>
        //                     <button onClick={handleGoogleSignOut} className='btn btn-success'>Google Sign Out</button>
        //                 </div>
        //             }

        //         </div>
               

        //     </div>

        // </div>
        <div className="container mx-auto mb-20 mt-10   ">
      <div className="grid place-items-center h-screen">
        <div className="md:w-2/4 w-full bg-white p-5 drop-shadow-xl py-6">
          <div className='flex justify-center items-center'>
            <svg className="text-2xl " xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z"/></svg>
            
          </div>
          <h3 className="mb-5 text-center text-3xl font-semibold text-gray-700">
            Account Login
          </h3>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col space-y-3"
          >
            <div className="flex flex-col space-y-1">
              <label
                for="email"
                className="text-sm font-semibold text-gray-500 text-left"
              >
                Email address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                {...register("email", { required: true })}
                autofocus
                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-1 focus:ring-red-500"
              />
            </div>
            <div className="flex flex-col space-y-1">
              <div className="flex items-center justify-between">
                <label
                  for="password"
                  className="text-sm font-semibold text-gray-500"
                >
                  Password
                </label>
                <Link
                  to="/resetpassword"
                  className="text-sm text-blue-600 hover:underline focus:text-blue-800"
                >
                  Forgot Password?
                </Link>
              </div>
              <input
                id="password"
                type="password"
                name="password"
                {...register("password", { required: true })}
                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-1 focus:ring-red-500"
              />
            </div>
            <div>
              <Link
                to="/register"
                className="text-sm text-blue-600 hover:underline focus:text-blue-800"
              >
                Don't have account?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-blue-500 rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-red-500 focus:ring-1"
            >
              Log in
            </button>
            <div className="flex flex-col space-y-5">
              <span className="flex items-center justify-center space-x-2">
                <span className="h-px bg-gray-400 w-14"></span>
                <span className="font-normal text-gray-500">or login with</span>
                <span className="h-px bg-gray-400 w-14"></span>
              </span>
              <div className="flex flex-col space-y-4">
                <button
                  onClick={handleGoogleSignIn}
                  className="flex items-center justify-center px-4 py-2 space-x-2 transition-colors duration-300 border border-red-500 rounded-md group hover:bg-red-500 focus:outline-none"
                >
                  <span>
                  <svg className="group-hover:text-white text-lg text-red-500" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 488 512"><path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"/></svg>
                    
                  </span>
                  <span className="text-sm font-medium text-red-500 group-hover:text-white">
                    Google
                  </span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    );
};

export default SignIn;


