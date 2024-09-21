import React from 'react'
import "./Auth.css"
import Signin from '../../Component/Rester/Signin'
import { useLocation } from 'react-router-dom'
import Signup from '../../Component/Rester/Signup'
const Auth = () => {
    const location = useLocation();
    return (
        <div className='my-8'>
            <div className='flex items-start justify-center h-[100vh] space-x-5'>
                <div className='relative hidden lg:block'>
                    <div className="h-[35.3rem] w-[23rem]">
                        <img className="h-full w-full" src="https://static.cdninstagram.com/images/instagram/xig/homepage/phones/home-phones.png?__makehaste_cache_breaker=HOgRclNOosk" alt="" />

                        <div className='mobilewallpaper h-[33rem] w-[15.7rem] absolute top-6 right-3'>

                        </div>
                    </div>
                </div>

                <div className='w-[40vw] lg:w-[23vw]'>
                    {location.pathname === '/login' ? <Signin/> : <Signup/>}
                </div>
            </div>
        </div>
    )
}

export default Auth
