import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { path } from '../utils';
import LoginInput from '../components/LoginInput';
import { asyncSetAuthUser } from '../states/authUser/action';

function LoginPage() {
  const dispatch = useDispatch();

  const onLogin = ({ email, password }) => {
    dispatch(asyncSetAuthUser({ email, password }));
  };

  return (
    <section className="grid gap-12 container mx-auto md:grid-cols-2 lg:gap-0 dark:bg-slate-800">
      <div className="w-96 mx-auto mt-16 mb-8 px-8 sm:px-0">
        <img src="./icons/logo.svg" alt="logo app" />
        <h1 className="mt-5 mb-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-slate-100">
          Log in to your account
        </h1>
        <p className="mb-5 text-base text-gray-500 dark:text-gray-400">
          Welcome back! Continue with your email
        </p>
        <LoginInput login={onLogin} />
        <p
          id="helper-text-explanation"
          className="mt-4 text-base text-gray-500 text-center dark:text-gray-400"
        >
          Don&apos;t have an account?
          {' '}
          <Link
            to={path.REGISTER_PAGE}
            className="font-medium text-blue-600 hover:underline dark:text-blue-500"
          >
            Register Now
          </Link>
        </p>
      </div>

      <div className="overflow-hidden w-full h-screen">
        <img
          src="./images/background.jpg"
          width="720"
          height="780"
          alt="background"
          className="object-cover object-center w-full"
        />
      </div>
    </section>
  );
}

export default LoginPage;
