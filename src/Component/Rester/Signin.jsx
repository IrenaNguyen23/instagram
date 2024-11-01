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
    const { signin } = useAuth();
    const jwt = localStorage.getItem("token");

    const handleSubmit = async (values, actions) => {
        const success = await dispatch(signinAction(values, signin));
        actions.setSubmitting(false);
        if (success) {
            navigate("/");
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
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            padding={4}
            w={{ base: "100%", md: "400px" }}
            m="auto"
        >
            <Box
                borderWidth={{ base: "0", md: "1px" }} // Ẩn border trên màn hình nhỏ
                borderRadius="lg"
                p={{ base: 4, md: 6 }}
                mb={5}
                w="full"
                maxW="sm"
            >
                <Box p={6} display="flex" flexDirection="column" alignItems="center">
                    <img className="mb-6" src="./logoig.png" alt="Instagram Logo" style={{ maxWidth: "100px" }} />
                    <Formik
                        initialValues={initialValues}
                        onSubmit={handleSubmit}
                        validationSchema={validationSchema}>
                        {(formikProps) => (
                            <Form className='space-y-8'>
                                <Field name="email">
                                    {({ field, form }) => (
                                        <FormControl isInvalid={form.errors.email && form.touched.email}>
                                            <Input
                                                {...field}
                                                id='email'
                                                placeholder='Mobile Number or Email'
                                                w="full"
                                                mb={2}
                                            />
                                            <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                                        </FormControl>
                                    )}
                                </Field>

                                <Field name="password">
                                    {({ field, form }) => (
                                        <FormControl isInvalid={form.errors.password && form.touched.password}>
                                            <Input
                                                {...field}
                                                id='password'
                                                placeholder='Password'
                                                type='password'
                                                w="full"
                                                mb={2}
                                            />
                                            <FormErrorMessage>{form.errors.password}</FormErrorMessage>
                                        </FormControl>
                                    )}
                                </Field>
                                <Button
                                    mt={4}
                                    type='submit'
                                    isLoading={formikProps.isSubmitting}
                                    w="full"
                                    colorScheme="blue"
                                >
                                    Log In
                                </Button>
                                <Box display="flex" alignItems="center" my={4}>
                                    <Box flex="1" borderBottom="1px solid" borderColor="gray.300"></Box>
                                    <Box as="span" mx={4} color="gray.500">OR</Box>
                                    <Box flex="1" borderBottom="1px solid" borderColor="gray.300"></Box>
                                </Box>

                                <Button
                                    display="flex"
                                    justifyContent="center"
                                    w="full"
                                    bg="white"
                                    color="blue.500"
                                    border="1px solid"
                                    borderColor="blue.500"
                                    leftIcon={
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            width="20px"
                                            height="20px"
                                        >
                                            <path d="M22.675 0h-21.35C.6 0 0 .6 0 1.35v21.3C0 23.4.6 24 1.35 24h21.3c.75 0 1.35-.6 1.35-1.35V1.35C24 .6 23.4 0 22.675 0zm-2.675 12.17h-3.34v10.66h-4.24V12.17h-2.71v-4.07h2.71V6.91c0-3.08 1.79-4.76 4.45-4.76 1.27 0 2.58.22 2.58.22v2.8h-1.45c-1.43 0-1.87.88-1.87 1.77v2.11h3.34l-.53 4.07z" />
                                        </svg>
                                    }
                                >
                                    Log in with Facebook
                                </Button>
                                <Box textAlign="center" fontSize="sm" color="gray.500" py={2}>
                                    Forgot password?
                                </Box>
                            </Form>
                        )}
                    </Formik>
                </Box>
            </Box>
            <Box
                borderWidth={{ base: "0", md: "1px" }} // Ẩn border trên màn hình nhỏ
                borderRadius="lg"
                p={{ base: 2, md: 4 }} // Giảm padding ở màn hình nhỏ
                mt={5}
                w="full"
                maxW="sm"
            >
                <Box textAlign="center" fontSize="sm">
                    If you don't have an account?
                    <Box
                        as="span"
                        color="blue.500"
                        ml={2}
                        cursor="pointer"
                        onClick={handleNavigation}
                    >
                        Sign Up
                    </Box>
                </Box>
            </Box>

        </Box>
    );
}

export default Signin;
