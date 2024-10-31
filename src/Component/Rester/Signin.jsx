import { Box, Button, FormControl, FormErrorMessage, Input } from '@chakra-ui/react';
import { Field, Form, Formik } from 'formik';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from "yup";
import { useDispatch, useSelector } from 'react-redux';
import { signinAction } from '../../Redux/Auth/Action';
import { getUserProfileAction } from '../../Redux/User/Action';
import { useAuth } from '../../Pages/Auth/AuthContext';

const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string().min(8, "Password must be at least 8 characters").required("Password is required")
});

const Signin = () => {
    const initialValues = { email: "", password: "" };
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { user } = useSelector(store => store);
    const { signin } = useAuth(); // Lấy hàm signin từ context
    const jwt = localStorage.getItem("token");

    const handleSubmit = async (values, actions) => {
        const success = await dispatch(signinAction(values, signin)); // Truyền hàm signin vào đây
        actions.setSubmitting(false); // Đặt trạng thái isSubmitting về false
        if (success) {
            navigate("/"); // Chuyển hướng về trang chủ nếu đăng nhập thành công
        }
    };

    useEffect(() => {
        if (jwt) {
            dispatch(getUserProfileAction(jwt));
        }
    }, [jwt, dispatch]);

    useEffect(() => {
        if (user.reqUser?.username) {
            navigate(`/${user.reqUser?.username}`);
        }
    }, [user.reqUser, navigate]);

    const handleNavigation = () => navigate("/signup");

    return (
        <div>
            <div>
                <div className='border border-gray-300 p-6 rounded-lg mb-5 w-full'>
                    <Box p={6} display={"flex"} flexDirection={'column'} alignItems={"center"}>
                        <img className="mb-6" src="./logoig.png" alt="Instagram Logo" />
                        <Formik
                            initialValues={initialValues}
                            onSubmit={handleSubmit}
                            validationSchema={validationSchema}>
                            {(formikProps) => (
                                <Form className='space-y-8'>
                                    <Field name="email">
                                        {({ field, form }) => (
                                            <FormControl isInvalid={form.errors.email && form.touched.email}>
                                                <Input className="w-full border border-gray-300" {...field} id='email' placeholder='Mobile Number or Email' />
                                                <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                                            </FormControl>
                                        )}
                                    </Field>

                                    <Field name="password">
                                        {({ field, form }) => (
                                            <FormControl isInvalid={form.errors.password && form.touched.password}>
                                                <Input className="w-full border border-gray-300" {...field} id='password' placeholder='Password' type='password' />
                                                <FormErrorMessage>{form.errors.password}</FormErrorMessage>
                                            </FormControl>
                                        )}
                                    </Field>
                                    <Button
                                        mt={4}
                                        type='submit'
                                        isLoading={formikProps.isSubmitting}
                                        css={{
                                            width: '100%',
                                            border: '1px solid',
                                            padding: '0.5rem',
                                            borderRadius: '0.5rem',
                                            color: 'white',
                                            fontSize: '1rem',
                                            backgroundColor: 'rgba(14, 165, 233, 0.75)',
                                            ":hover": {
                                                backgroundColor: 'rgba(14, 165, 233, 1)',
                                                opacity: 1,
                                            },
                                        }}
                                    >
                                        Log In
                                    </Button>
                                    <div className="flex items-center my-4">
                                        <div className="flex-grow border-t border-gray-300"></div>
                                        <span className="mx-4 text-gray-500">OR</span>
                                        <div className="flex-grow border-t border-gray-300"></div>
                                    </div>

                                    <div className="flex justify-center">
                                        <button
                                            className="flex items-center justify-center w-full bg-white py-2 px-4 text-blue-500 hover:shadow-lg transition duration-200"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                fill="currentColor"
                                                className="w-5 h-5 mr-2"
                                            >
                                                <path d="M22.675 0h-21.35C.6 0 0 .6 0 1.35v21.3C0 23.4.6 24 1.35 24h21.3c.75 0 1.35-.6 1.35-1.35V1.35C24 .6 23.4 0 22.675 0zm-2.675 12.17h-3.34v10.66h-4.24V12.17h-2.71v-4.07h2.71V6.91c0-3.08 1.79-4.76 4.45-4.76 1.27 0 2.58.22 2.58.22v2.8h-1.45c-1.43 0-1.87.88-1.87 1.77v2.11h3.34l-.53 4.07z" />
                                            </svg>
                                            Đăng nhập với Facebook
                                        </button>
                                    </div>
                                    <p className='text-center text-sm py-2'>Forgot password?</p>
                                </Form>
                            )}
                        </Formik>
                    </Box>
                </div>
                <div className='mt-5 border border-gray-300 p-4 rounded-lg w-full'>
                    <p className='text-center py-2'>
                        If You Don't Have an Account
                        <span onClick={handleNavigation} className='ml-2 text-blue-700 cursor-pointer'>Sign Up</span>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Signin;
