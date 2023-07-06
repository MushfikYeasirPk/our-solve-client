import React, { useContext, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from '../../firebase/Firebase.init';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';


const Register = () => {
    const navigate = useNavigate();
    const { registerUser, displayURl } = useContext(AuthContext);
    const auth = getAuth(app)
    // const [displayname, setDisplayname] = useState("");
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
        // createUser(data.email, data.password)
        //     .then(result => {

        //         const loggedUser = result.user;
        //         console.log(loggedUser);

        //         updateUserProfile(data.name, data.photoURL)
        //             .then(() => {
        //                 const saveUser = { name: data.name, email: data.email }
        //                 fetch('', {
        //                     method: 'POST',
        //                     headers: {
        //                         'content-type': 'application/json'
        //                     },
        //                     body: JSON.stringify(saveUser)
        //                 })
        //                     .then(res => res.json())
        //                     .then(data => {
        //                         if (data.insertedId) {
        //                             reset();
        //                             Swal.fire({
        //                                 position: 'top-end',
        //                                 icon: 'success',
        //                                 title: 'Congrats You are a User now.',
        //                                 showConfirmButton: false,
        //                                 timer: 1000
        //                             });
        //                             navigate('/');
        //                         }
        //                     })



        //             })
        //             .catch(error => console.log(error))
        //     })
        if ((data.name, data.email, data.password, data.photourl)) {
            createUserWithEmailAndPassword(auth, data.email, data.password)
                .then((userCredential) => {
                    const saveUser = { name: data.name, email: data.email }
                           console.log(saveUser);
                        fetch('http://localhost:5000/users', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(saveUser)
                        })
                        .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    
                                    Swal.fire({
                                        position: 'top-end',
                                        icon: 'success',
                                        title: 'User created successfully.',
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                    navigate('/');
                                }
                            })
                    const user = userCredential.user;
                    console.log("User data",user);
                    displayURl(data.photourl, data.name)

                        .then(() => {
                           
                           console.log('User created');
                        })

                        .catch((error) => {
                            console.log(error.message);
                            setError(error.message)
                        })
                  

                })
            
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorMessage);
                    

                });
        }
    };





    return (
        <div className='container mx-auto px-4 mb-20 md:px-11'>
            <div className="grid place-items-center h-screen">
        <div className="md:w-2/4 w-full bg-white p-5 drop-shadow-xl ">
          <div className='flex items-center justify-center'>
          <svg className="text-2xl " xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z"/></svg>
          </div>
          <h3 className="mt-3 text-center text-3xl font-semibold text-gray-700">SignUp</h3>
            <div className="flex items-center justify-center">
                <div className="m-auto w-96">
                </div>
                </div>

                    <form onSubmit={handleSubmit(onSubmit)} className=" rounded-lg px-8  mb-4">
                        <div className="mb-4 ">
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="useremail">
                                User Name
                            </label>
                            <input {...register("name", { required: true })}
                                className=" form-input shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="name" name='name'
                                type="text"
                                placeholder="Enter your Name"
                            />
                            {errors.name && <span className="text-red-500">Plases add name</span>}
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="useremail">
                                User Email
                            </label>
                            <input {...register("email", { required: true })}
                                className=" form-input shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="email" name='email'
                                type="email"
                                placeholder="Enter your email"
                            />
                            {errors.email && <span className="text-red-500">Please add Email</span>}
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
                                Password
                            </label>
                            <input {...register("password", {
                                required: true,
                                minLength: 6,

                                pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                            })}
                                className="form-input shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="password" password='password'
                                type="password"
                                placeholder="Enter your password"
                            />
                            {errors.password?.type === 'required' && <p className="text-red-500">Plases Put Password</p>}
                            {errors.password?.type === 'minLength' && <p className="text-red-500">Password must be 6 characters</p>}
                            {errors.password?.type === 'pattern' && <p className="text-red-500">Password must add a Capital letter ans a special character</p>}
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
                                Photo Url
                            </label>
                            <input {...register("photourl", { required: true })}
                                className="form-input shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="url" password='url'
                                type="url"
                                placeholder="Enter your Photo URL"
                            />
                            {errors.photourl && <span className="text-red-500">Please add photo URL</span>}
                        </div>


                        <div className="flex items-center justify-between">
                            <button
                                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="submit"
                            >
                                Sign Up
                            </button>


                            <Link className="inline-block align-baseline font-bold text-sm text-green-500 hover:text-green-800" href="#">
                                Forgot Password?
                            </Link>
                        </div>

                    </form>
                    <p className="text-center text-black  text-lg">
                        Already have an account?{' '}
                        <Link to='/signIn' className="font-bold hover:underline" href="#">
                            Sign in
                        </Link>
                    </p>
                </div>
                
            </div>
        </div>
    );
};


export default Register;