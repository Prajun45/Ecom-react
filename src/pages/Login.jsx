import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#0f0f1a] to-[#050519] text-white">
      <div className="w-[800px] flex rounded-xl overflow-hidden border border-blue-600 shadow-[0_0_15px_3px_rgba(0,0,255,0.3)]">
        
        {/* Left Panel - Form */}
        <div className="w-1/2 bg-black p-10">
          <h2 className="text-2xl font-bold text-center mb-6 text-white">Login</h2>
          <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={Yup.object({
              email: Yup.string()
                .email('Invalid email address')
                .required('Required'),
              password: Yup.string()
                .min(8, 'Minimum 8 characters')
                .required('Required')
            })}
            onSubmit={(values) => {
              console.log('Form Values:', values);
            }}
          >
            <Form>
              <div className="mb-4">
                <label className="block text-sm">Email :</label>
                <Field name="email" type="email" className="w-full mt-1 px-3 py-2 bg-[#1a1a1a] rounded text-white outline-none" />
                <ErrorMessage name="email" component="small" className="text-red-500" />
              </div>

              <div className="mb-6">
                <label className="block text-sm">Password :</label>
                <Field name="password" type="password" className="w-full mt-1 px-3 py-2 bg-[#1a1a1a] rounded text-white outline-none" />
                <ErrorMessage name="password" component="small" className="text-red-500" />
              </div>

              <button 
                type="submit" 
                className="w-full py-2 mt-2 text-white font-bold rounded bg-gradient-to-r from-blue-600 to-blue-500 shadow-[0_0_10px_#3b82f6] hover:shadow-[0_0_20px_#2563eb] transition-all duration-300"
              >
              Submit
              </button>

              <p className="text-sm mt-4 text-white text-center">
                Don’t have an account? <Link to="/signup" className="underline text-blue-400">Register</Link>
              </p>
            </Form>
          </Formik>
        </div>

        {/* Right Panel - Welcome */}
        <div className="w-1/2 flex items-center justify-center bg-[#0f0f1a] border-l-2 border-blue-700">
          <h2 className="text-3xl font-extrabold text-white animate-pulse">WELCOME BACK!</h2>
        </div>
      </div>
    </div>
  );
};

export default Login;
