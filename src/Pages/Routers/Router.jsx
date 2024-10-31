import React from 'react';
import Sidebar from '../../Component/Sidebar/Sidebar';
import { Route, Routes, useLocation, Navigate } from 'react-router-dom';
import HomePage from '../HomePage/HomePage';
import Profile from '../Profile/Profile';
import Story from '../Story/Story';
import Auth from '../Auth/Auth';
import EditAccountDetails from '../../Component/EditAccount/EditAccountDetails';

const Router = () => {
    const location = useLocation();
    const jwt = localStorage.getItem("token"); // Lấy token từ localStorage
    const authPaths = ['/login', '/signup'];

    return (
        <div>
            {!authPaths.includes(location.pathname) ? (
                // Kiểm tra xem người dùng có token hay không
                jwt ? (
                    // Nếu có token, hiển thị layout chính
                    <div className='flex'>
                        <div className='w-[20%] border border-1-slate-500'>
                            <Sidebar />
                        </div>
                        <div className='w-full'>
                            <Routes>
                                <Route path='/' element={<HomePage />} />
                                <Route path='/:username' element={<Profile />} />
                                <Route path='/story/:userId' element={<Story />} />
                                <Route path='/comment/:postId' element={<HomePage />} />
                                <Route path='/account/edit' element={<EditAccountDetails />} />
                            </Routes>
                        </div>
                    </div>
                ) : (
                    // Nếu không có token, chuyển hướng đến trang login
                    <Navigate to="/login" replace />
                )
            ) : (
                // Layout cho các trang xác thực (login, signup)
                <Routes>
                    <Route path='/signup' element={<Auth />} />
                    <Route path='/login' element={<Auth />} />
                </Routes>
            )}
        </div>
    );
};

export default Router;
