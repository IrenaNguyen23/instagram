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
  password: Yup.string().min(8, "  Password must be at least 8 characters").required("Password is required")
})

const Signup = () => {
  const initialValues = { email: "", username: "", name: "", password: "" };
  const navigation = useNavigate()
  const dispatch = useDispatch();
  const { auth } = useSelector(store => store);
  const toast = useToast()
  
  console.log("store signup:" ,auth)
  const handleNavigation = () => navigation("/login")
  const handleSubmit = (values, actions) => {
    console.log("values", values)
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
    <div>
      <div>
        <div className='border border-gray-300 p-6 rounded-lg mb-5 w-full'>
          <Box p={6} display={"flex"} flexDirection={'column'} alignItems={"center"}>
            <img className="mb-6" src="./logoig.png" alt="Instagram Logo" />
            <h2 className='text-slate-500 text-lg font-semibold'>Sign up to see photos and videos from your friends.</h2>
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


                  <Field name="name">
                    {({ field, form }) => (
                      <FormControl isInvalid={form.errors.name && form.touched.name}>
                        <Input className="w-full border border-gray-300" {...field} id='name' placeholder='Full name' />
                        <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <Field name="username">
                    {({ field, form }) => (
                      <FormControl isInvalid={form.errors.username && form.touched.username}>
                        <Input className="w-full border border-gray-300" {...field} id='username' placeholder='Username' />
                        <FormErrorMessage>{form.errors.username}</FormErrorMessage>
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

                  <p className='text-center text-sm'>People who use our service may have uploaded your contact information to Instagram.<span className='ml-2 text-blue-700 cursor-pointer'>Learn More</span></p>
                  <p className='text-center text-sm'>By signing up, you agree to our<span className='ml-2 text-blue-700 cursor-pointer'>Terms , Privacy Policy </span>and<span className='ml-2 text-blue-700 cursor-pointer'>Cookies Policy .</span ></p>
                  <Button
                    mt={4}
                    type='submit'
                    isLoading={formikProps.isSubmitting}
                    css={{
                      width: '100%',
                      border: '1px solid',
                      padding: '0.5rem', // py-2
                      borderRadius: '0.5rem', // rounded-lg
                      color: 'white',
                      fontSize: '1rem', // text-base
                      backgroundColor: 'rgba(14, 165, 233, 0.75)', // bg-sky-500/75
                      ":hover": {
                        backgroundColor: 'rgba(14, 165, 233, 1)', // Thay đổi màu nền khi hover
                        opacity: 1, // Đặt độ trong suốt khi hover
                      },
                    }}
                  >
                    Sign Up
                  </Button>

                </Form>
              )}
            </Formik>

          </Box>
        </div>
        <div className='mt-5 border border-gray-300 p-4 rounded-lg w-full'>
          <p className='text-center py-2'>Have an account? <span onClick={handleNavigation} className='ml-2 text-blue-700 cursor-pointer'>Log in</span></p>
        </div>
      </div>
    </div >
  )
}

export default Signup
