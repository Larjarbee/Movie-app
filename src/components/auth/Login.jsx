import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const emailIsValid = email.includes('@');
  const passwordIsvalid = password.trim().length > 4;

  let formIsValid = false;
  if (emailIsValid && passwordIsvalid) {
    formIsValid = true;
  }

  const submitHandler = (e) => {
    e.preventDefault();
    if (!formIsValid) {
      return setError(true);
    }
    console.log(email, password);

    navigate('/');
    setEmail('');
    setPassword('');
  };

  return (
    <div className=' w-2/3 mx-auto'>
      <form
        className='flex flex-col justify-center pt-40'
        onSubmit={submitHandler}
      >
        <label className=' text-2xl text-white text-center my-5'>
          LOGIN HERE
        </label>
        <input
          className=' p-3 mb-5'
          type='mail'
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className=' p-3 mb-5'
          type='password'
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          className=' p-3 text-white bg-sec hover:opacity-80'
          type='submit'
        >
          LOGIN
        </button>

        {error && (
          <p className=' text-red-600 text-center p-2'>
            Invalid email or password
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;
