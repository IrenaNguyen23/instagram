import React, { createContext, useContext, useEffect, useState } from 'react';

// Tạo context
const AuthContext = createContext();

// Custom hook để sử dụng AuthContext
export const useAuth = () => {
    return useContext(AuthContext);
};

// AuthProvider để cung cấp giá trị xác thực cho ứng dụng
export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(() => localStorage.getItem("token"));

    useEffect(() => {
        // Nếu có token, thiết lập thời gian hết hạn
        if (token) {
            const timeoutId = setTimeout(() => {
                localStorage.removeItem("token");
                setToken(null); // Đặt token thành null sau 30 phút
            }, 30 * 60 * 1000); // 30 phút

            return () => clearTimeout(timeoutId); // Dọn dẹp khi component unmount
        }
    }, [token]);

    const signin = (newToken) => {
        localStorage.setItem("token", newToken);
        setToken(newToken);
    };

    const signout = () => {
        localStorage.removeItem("token");
        setToken(null);
    };

    const value = {
        token,
        signin,
        signout,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
