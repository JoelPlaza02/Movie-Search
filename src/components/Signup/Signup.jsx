import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../AuthContext';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { createUser } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await createUser(email, password);
      navigate('/HomePage');
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  }

  return (
    <section className='max-w-[100vw] h-screen p-4 bg-white'>
    <section className='max-w-[700px] mx-auto my-16 p-4 bg-white'>
        <form onSubmit={handleSubmit} className='shadow-lg p-10'>
            <header>
                <h1 className='text-2xl font-bold py-2'>Sign up to get started</h1>
                <p className='py-2'>
                  Already have an account? 
                  <Link to="/" className='text-blue-600 hover:text-blue-500 underline ml-2'>Sign in.</Link>
                </p>
            </header>
            <p className='text-red-600'>{error && error}</p>
            <div className='flex flex-col py-2'>
                <label className='py-2 font-medium'>Email Address</label>
                <input onChange={(e) => setEmail(e.target.value)} className='border p-3' type='email' />
            </div>
            <div className='flex flex-col py-2'>
                <label className='py-2 font-medium'>Password</label>
                <input onChange={(e) => setPassword(e.target.value)} className='border p-3' type='password' />
            </div>
            <button className='border border-blue-500 bg-blue-600 hover:bg-blue-500 w-full p-4 my-2 text-white'>Sign Up</button>
        </form>
    </section>
    </section>
  )
};;

export default Signup;