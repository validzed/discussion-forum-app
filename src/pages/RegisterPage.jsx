import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import RegisterInput from '../components/RegisterInput';
import { asyncRegisterUser } from '../states/users/action';

function RegisterPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onRegister = async ({ name, email, password }) => {
    await dispatch(asyncRegisterUser({ name, email, password }));
    navigate('/');
  };

  return (
    <section className="container grid gap-12 mx-auto md:grid-cols-2 lg:gap-0 dark:bg-slate-800">
      <div className="w-96 mx-auto mt-16 mb-8 px-8 sm:px-0">
        <img src="./icons/logo.svg" alt="logo app" />
        <h1 className="mt-5 mb-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-slate-100">
          Create your account
        </h1>
        <p className="mb-5 text-base text-gray-500 dark:text-gray-400">
          Let&apos;s get started to joining in discuss
        </p>
        <RegisterInput register={onRegister} />
        <p
          id="helper-text-explanation"
          className="mt-4 text-base text-gray-500 text-center dark:text-gray-400"
        >
          Already have an account?
          {' '}
          <Link
            to="/"
            className="font-medium text-blue-600 hover:underline dark:text-blue-500"
          >
            Log in here
          </Link>
        </p>
      </div>

      <div className="overflow-hidden w-full h-screen">
        <img
          src="./images/background.jpg"
          width="720"
          height="780"
          alt="background"
          className="h-96 w-full object-cover md:h-full md:w-full"
        />
      </div>
    </section>
  );
}

export default RegisterPage;
