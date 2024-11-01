import { Box, Button, FormControl, FormErrorMessage, Input, useToast } from '@chakra-ui/react'
import { Field, Form, Formik } from 'formik'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import * as Yup from "yup"
import { signupAction } from '../../Redux/Auth/Action'
import { useDispatch, useSelector } from 'react-redux'

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email address").required("Required"),
  name: Yup.string().required("Required"),
  username: Yup.string().required("Required"),
  password: Yup.string().min(8, "Password must be at least 8 characters").required("Password is required")
})

const Signup = () => {
  const initialValues = { email: "", username: "", name: "", password: "" };
  const navigation = useNavigate()
  const dispatch = useDispatch();
  const { auth } = useSelector(store => store);
  const toast = useToast()

  const handleNavigation = () => navigation("/login")
  const handleSubmit = (values, actions) => {
    dispatch(signupAction(values))
    actions.setSubmitting(false)
  }

  useEffect(() => {
    if (auth.signup?.username) {
      navigation("/login")
      toast({
        title: `Account created. ${auth.signup.username}`,
        status: 'success',
        duration: 5000,
        isClosable: true,
      })
    }
  }, [auth, navigation, toast])

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      padding={4}
      w={{ base: "100%", md: "400px" }}
      m="auto"
      bg="gray.50" // Nền màu xám nhạt
    >
      <Box
        borderWidth={{ base: "0", md: "1px" }} // Ẩn border trên màn hình nhỏ
        borderRadius="lg"
        boxShadow="md" 
        bg="white" 
        p={6}
        w={{ base: "90%", md: "400px" }} // Chiều rộng tối ưu cho thiết bị di động
        mt={5}
        mb={5} // Thêm khoảng cách dưới
      >
        <Box display="flex" flexDirection="column" alignItems="center">
          <img className="mb-6" src="./logoig.png" alt="Instagram Logo" style={{ maxWidth: "100px" }} />
          <h2 className='text-slate-500 text-lg font-semibold text-center mb-4'>
            Sign up to see photos and videos from your friends.
          </h2>
          <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}>
            {(formikProps) => (
              <Form className='space-y-4'>
                <Field name="email">
                  {({ field, form }) => (
                    <FormControl isInvalid={form.errors.email && form.touched.email}>
                      <Input
                        className="w-full"
                        {...field}
                        id='email'
                        placeholder='Mobile Number or Email'
                        variant="flushed" // Kiểu nhập
                        mb={2} // Khoảng cách dưới trường nhập
                      />
                      <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>

                <Field name="name">
                  {({ field, form }) => (
                    <FormControl isInvalid={form.errors.name && form.touched.name}>
                      <Input
                        className="w-full"
                        {...field}
                        id='name'
                        placeholder='Full name'
                        variant="flushed"
                        mb={2}
                      />
                      <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>

                <Field name="username">
                  {({ field, form }) => (
                    <FormControl isInvalid={form.errors.username && form.touched.username}>
                      <Input
                        className="w-full"
                        {...field}
                        id='username'
                        placeholder='Username'
                        variant="flushed"
                        mb={2}
                      />
                      <FormErrorMessage>{form.errors.username}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>

                <Field name="password">
                  {({ field, form }) => (
                    <FormControl isInvalid={form.errors.password && form.touched.password}>
                      <Input
                        className="w-full"
                        {...field}
                        id='password'
                        placeholder='Password'
                        type='password'
                        variant="flushed"
                        mb={2}
                      />
                      <FormErrorMessage>{form.errors.password}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>

                <p className='text-center text-sm mt-4'>
                  People who use our service may have uploaded your contact information to Instagram.
                  <span className='ml-2 text-blue-700 cursor-pointer'>Learn More</span>
                </p>
                <p className='text-center text-sm'>
                  By signing up, you agree to our
                  <span className='ml-2 text-blue-700 cursor-pointer'>Terms, Privacy Policy</span>
                  and
                  <span className='ml-2 text-blue-700 cursor-pointer'>Cookies Policy.</span>
                </p>

                <Button
                  mt={4}
                  type='submit'
                  isLoading={formikProps.isSubmitting}
                  colorScheme="blue" // Màu xanh giống Instagram
                  width="full"
                  borderRadius="md"
                >
                  Sign Up
                </Button>
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
          Have an account?
          <span onClick={handleNavigation} className='ml-2 text-blue-700 cursor-pointer'>Log in</span>
        </Box>
      </Box>
    </Box>
  )
}

export default Signup
