import { Grid } from '@mui/material';
import React from 'react';
import cycleImage from '../../../static/Login_cycloop_image.png';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { login } from '../../../State/Auth/Action';

const Login = () => {
    const dispatch=useDispatch();
    const navigate=useNavigate();

    const handleSubmit=(event)=>{
        event.preventDefault()
        const data=new FormData(event.currentTarget);
        const userData={
            email:data.get("email"),
            password:data.get("password")
        }
        dispatch(login(userData))
        console.log(userData);
        navigate("/HomePage");
    }
    return (
        <div  >
            <Grid container spacing={4} style={{ minHeight: '100vh', padding: 0, margin: 0 }} className='h-full pb-0'>
                <Grid container xs={12} lg={7} style={{ position: 'relative' }}>
                    <Grid xs={12} lg={9} style={{ height: '100%' }}>
                        <div className=' w-full h-full' style={{ height: '100%', background: '#1e1e1e' }}></div>
                    </Grid>
                    <Grid xs={12} lg={12} style={{ position: 'absolute', right: 0, bottom: 0 }}>
                        <img src={cycleImage} alt="Cycle" style={{ width: '100%', height: '100%', objectFit: 'overflow', transform: 'scaleX(-1)' }} />
                    </Grid>


                </Grid>
                <Grid item xs={12} lg={5} >
                    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-3 lg:px-8 ">
                        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                            <h1 className=" text-center text-3xl font-bold leading-9 tracking-tight text-gray-900">
                                Login
                            </h1>
                        </div>

                        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                            <form className="space-y-6"  onSubmit={handleSubmit} method="POST">
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900 text-left">
                                        Email address
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            autoComplete="email"
                                            required
                                            className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <div className="flex items-center justify-between">
                                        <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                            Password
                                        </label>

                                    </div>
                                    <div className="mt-2">
                                        <input
                                            id="password"
                                            name="password"
                                            type="password"
                                            autoComplete="current-password"
                                            required
                                            className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                                <div className="text-sm text-left">
                                    <a href="#"  className="font-semibold text-indigo-600 hover:text-indigo-500">
                                        Forgot password?
                                    </a>
                                </div>

                                <div >
                                    <button
                                        type="submit"
                                        className="flex mx-auto w-48 justify-center rounded-md bg-gray-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    >
                                        Sign in
                                    </button>
                                </div>
                            </form>

                            <p className="mt-10 text-center text-sm text-gray-500">
                                Not a member?{' '}
                                <a onClick={()=>navigate("/")} className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                                    Create account
                                </a>
                            </p>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default Login



