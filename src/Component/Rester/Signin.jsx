import { Box, Button, FormControl, FormErrorMessage, Input } from '@chakra-ui/react'
import { Field, Form, Formik } from 'formik'
import React from 'react'
import * as Yup from "yup"

const validationShema = Yup.object().shape({
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string().min(8, "  Password must be at least 8 characters").required("Password is required")
})
const Signin = () => {
    const initialValues = { email: "", password: "" };
    const handleSubmit = (values) => {
        console.log("values:", values)
    }
    return (
        <div>
            <div className='border'>
                <Box p={8} display={"flex"} flexDirection={'column'} alignItems={"center"}>
                    <img className="mb-5" src="./KoLLpWDb4f6.png" alt="" />
                    <Formik
                        validationSchema={validationShema}
                        initialValues={initialValues}
                        onSubmit={handleSubmit}>
                        {(formikProps) => (<Form className='space-y-8'>

                            <Field name="email">
                                {({ field, form }) => (<FormControl isInvalid={form.errors.email && form.touched.email}>
                                    <Input className="w-full" {...field} id='email' placeholder='Mobile Number or Email'>
                                    </Input>
                                    <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                                </FormControl>)}

                            </Field>

                            <Field name="password">
                                {({ field, form }) => (<FormControl isInvalid={form.errors.password && form.touched.password}>
                                    <Input className="w-full" {...field} id='password' placeholder='Password'>
                                    </Input>
                                    <FormErrorMessage>{form.errors.password}</FormErrorMessage>
                                </FormControl>)}

                            </Field>
                            <p className='text-center'>People who use our service may have uploaded your contact information to Instagram</p>
                            <p className="text-center">By signing up, you agree to our Terms , Privacy Policy and Cookies Policy .</p>
                            <Button className='w-full' mt={4} colorScheme='blue' type='submit' isLoading={formikProps.isSubmitting}>Sign In</Button>
                        </Form>)}

                    </Formik>
                </Box>
            </div>
            <div className='border w-full border-slate-300 mt-5'>
                <p className='text-center py-2'>If You Don't Have Account <span className='ml-2 text-blue-700 cursor-pointer'> Sign Up</span></p>
            </div>
        </div>
    )
}

export default Signin
