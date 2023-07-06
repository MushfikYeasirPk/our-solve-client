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
        <div className='flex items-center justify-center'>
            <div className="flex h-screen items-center">
                <div className="m-auto w-96">

                    <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-lg px-8 py-10 mb-4">
                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="username">
                                User Email
                            </label>
                            <input   {...register("email", { required: true })}
                                className=" form-input shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="email" name='email'
                                type="email"
                                placeholder="Enter your email" required
                            />
                            {errors.exampleRequired && <span>Please put email</span>}
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
                                Password
                            </label>
                            <input  {...register("password", { required: true })}
                                className="form-input shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="password" password='password'
                                type="password"
                                placeholder="Enter your password" required
                            />
                            {errors.exampleRequired && <span>Please put password</span>}
                        </div>
                        <div className="flex items-center justify-between">
                            <button
                                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="submit"
                            >
                                Sign In
                            </button>


                            <a className="inline-block align-baseline font-bold text-sm text-green-500 hover:text-green-800" href="#">
                                Forgot Password?
                            </a>

                        </div>

                        <div className='text-green-500 text-center mt-2 font-bold'><p>{success}</p></div>
                    </form>
                    <p className="text-center text-lg mb-2">
                        Don't have an account?{' '}
                        <Link to='/register' className="font-bold hover:underline" href="#">
                            Sign up
                        </Link>
                    </p>
                    {/* userInfo ? SIng out : Sign in */}
                    {userInfo ?
                        <div className=''>
                            <div className="cursor-pointer">
                                <img onClick={handleGoogleSignIn}

                                    className=" social-button"
                                    src="https://i.ibb.co/gSTHXZJ/google-btn.png"
                                    alt=""
                                />
                            </div>
                        </div>

                        :

                        <div>
                            <button onClick={handleGoogleSignOut} className='btn btn-success'>Google Sign Out</button>
                        </div>
                    }

                </div>
                <div className="text-center lg:text-left px-10">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="text-5xl font-bold">Save Toy!</p>
                </div>

            </div>

        </div>
    );
};

export default SignIn;



// import React, { useState } from 'react';
// import app from '../../firebase/Firebase.init';
// import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, signInWithEmailAndPassword } from "firebase/auth";
// import { Link, useLocation, redirect, Navigate, useNavigate } from 'react-router-dom';



// const SignIn = () => {
//     const location = useLocation()
//     const navigate = useNavigate()
//     console.log('location of login', location);
//     const [userInfo, setuserInfo] = useState({})
//     const [email, setuserEmail] = useState('')
//     const [password, setuserPassword] = useState('')
//     const [error, setError] = useState('')
//     const [success, setSuccess] = useState('')
//     const auth = getAuth(app)
//     const goolgeProvider = new GoogleAuthProvider()
//     const from = location.state?.from?.pathname || '/'
//     const handleGoogleSignIn = () => {
//         signInWithPopup(auth, goolgeProvider)
//             .then(result => {
//                 const user = result.user
//                 console.log(user);
//                 setuserInfo(user)

//             })
//             .catch(error => {
//                 console.log('error', error.message)
//             })
//     }
//     const handleGoogleSignOut = () => {
//         signOut(auth)
//             .then((result) => {
//                 // Sign-out successful.
//                 console.log(result);
//                 setuserInfo(null)
//             })
//             .catch((error) => {
//                 console.log(error.message);
//             });
//     }

//     // #####################
//     const getUserEmail = (event) => {

//         setuserEmail(event.target.value)
//     }
//     const getuserPassword = (event) => {

//         setuserPassword(event.target.value)
//     }
//     const handleSubmit = (event) => {
//         setSuccess('')
//         setError('')
//         event.preventDefault()
//         console.log(email, password);
//         signInWithEmailAndPassword(auth, email, password)
//             .then((userCredential) => {
//                 const user = userCredential.user;
//                 console.log(user);
//                 event.target.reset()
//                 setSuccess('Sign in successfully')
//                 setError('')
//                 navigate(from, { replace: true })

//             })
//             .catch((error) => {
//                 const errorCode = error.code;
//                 const errorMessage = error.message;
//                 console.log(errorMessage);
//                 // setError(errorMessage)
//             });

//     }

//     return (
//         <div className='flex items-center justify-center'>
//             <div className="flex h-screen items-center">
//                 <div className="m-auto w-96">

//                     <form onSubmit={handleSubmit} className="bg-white rounded-lg px-8 py-10 mb-4">
//                         <div className="mb-4">
//                             <label className="block text-gray-700 font-bold mb-2" htmlFor="username">
//                                 User Email
//                             </label>
//                             <input onChange={getUserEmail}
//                                 className=" form-input shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                                 id="email" name='email'
//                                 type="email"
//                                 placeholder="Enter your email" required
//                             />
//                         </div>
//                         <div className="mb-4">
//                             <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
//                                 Password
//                             </label>
//                             <input onChange={getuserPassword}
//                                 className="form-input shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                                 id="password" password='password'
//                                 type="password"
//                                 placeholder="Enter your password" required
//                             />
//                         </div>
//                         <div className="flex items-center justify-between">
//                             <button
//                                 className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//                                 type="submit"
//                             >
//                                 Sign In
//                             </button>


//                             <a className="inline-block align-baseline font-bold text-sm text-green-500 hover:text-green-800" href="#">
//                                 Forgot Password?
//                             </a>

//                         </div>
//                         <div className='text-red-400 mt-2'><p>{error}</p></div>
//                         <div className='text-green-500 text-center mt-2 font-bold'><p>{success}</p></div>
//                     </form>
//                     <p className="text-center text-lg mb-2">
//                         Don't have an account?{' '}
//                         <Link to='/register' className="font-bold hover:underline" href="#">
//                             Sign up
//                         </Link>
//                     </p>
//                     {/* userInfo ? SIng out : Sign in */}
//                     {userInfo ? <div className=''>
//                         <div className="cursor-pointer">
//                             <img onClick={handleGoogleSignIn}

//                                 className=" social-button"
//                                 src="https://i.ibb.co/gSTHXZJ/google-btn.png"
//                                 alt=""
//                             />
//                         </div>


//                     </div> :
//                         <div>
//                             <button onClick={handleGoogleSignOut} className='btn btn-success'>Google Sign Out</button>
//                         </div>
//                     }

//                 </div>
//                 <div className="text-center lg:text-left px-10">
//                     <h1 className="text-5xl font-bold">Login now!</h1>
//                     <p className="text-5xl font-bold">Save Toy!</p>
//                 </div>

//             </div>

//         </div>
//     );
// };

// export default SignIn;
