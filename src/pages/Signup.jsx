import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const Signup = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-900 to-black">
      <div className="bg-black text-white rounded-2xl p-10 shadow-2xl w-full max-w-3xl flex flex-col md:flex-row">
        
        {/* Left Section */}
        <div className="md:w-2/3 w-full p-6">
          <h2 className="text-3xl font-bold text-center mb-6 text-blue-400">Create Account</h2>
          
          <Formik
            initialValues={{ name: '', username: '', email: '', password: '', confirmPassword: '' }}
            validationSchema={Yup.object({
              name: Yup.string().required('Name is required').min(3, 'At least 3 characters'),
              username: Yup.string().required('Username is required').min(3, 'At least 3 characters'),
              email: Yup.string().email('Invalid email').required('Email is required'),
              password: Yup.string().required('Password is required').min(8, 'At least 8 characters'),
              confirmPassword: Yup.string()
                .oneOf([Yup.ref('password'), null], 'Passwords must match')
                .required('Confirm password is required'),
            })}
            onSubmit={(values, { setSubmitting }) => {
              console.log(values);
              setSubmitting(false);
            }}
          >
            {({ isSubmitting }) => (
              <Form className="space-y-4">
                
                {/* Name */}
                <div>
                  <Field type="text" name="name" placeholder="Name" className="w-full bg-gray-800 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  <ErrorMessage name="name" component="div" className="text-red-400 text-sm mt-1" />
                </div>

                {/* Username */}
                <div>
                  <Field type="text" name="username" placeholder="Username" className="w-full bg-gray-800 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  <ErrorMessage name="username" component="div" className="text-red-400 text-sm mt-1" />
                </div>

                {/* Email */}
                <div>
                  <Field type="email" name="email" placeholder="Email" className="w-full bg-gray-800 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  <ErrorMessage name="email" component="div" className="text-red-400 text-sm mt-1" />
                </div>

                {/* Password */}
                <div>
                  <Field type="password" name="password" placeholder="Password" className="w-full bg-gray-800 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  <ErrorMessage name="password" component="div" className="text-red-400 text-sm mt-1" />
                </div>

                {/* Confirm Password */}
                <div>
                  <Field type="password" name="confirmPassword" placeholder="Confirm Password" className="w-full bg-gray-800 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  <ErrorMessage name="confirmPassword" component="div" className="text-red-400 text-sm mt-1" />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-2 mt-2 text-white font-bold rounded bg-gradient-to-r from-blue-600 to-blue-500 shadow-[0_0_10px_#3b82f6] hover:shadow-[0_0_20px_#2563eb] hover:scale-105 transition-all duration-300"
                >
                  Submit
                </button>

                <p className="text-center mt-2 text-sm">
                  Already have an account?{' '}
                  <a href="/login" className="text-blue-400 hover:text-blue-500">
                    Login
                  </a>
                </p>
              </Form>
            )}
          </Formik>
        </div>

        {/* Right Section */}
        <div className="md:w-1/3 w-full flex items-center justify-center bg-gradient-to-b from-blue-900 to-black rounded-xl md:rounded-r-2xl md:rounded-l-none mt-6 md:mt-0">
          <h2 className="text-2xl font-bold text-center">Welcome!</h2>
        </div>
      </div>
    </div>
  );
};

export default Signup;
