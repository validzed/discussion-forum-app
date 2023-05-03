import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus, FiMenu } from 'react-icons/fi';
import { FaMoon, FaSun } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import path from '../utils/path';
import { asyncUnsetAuthUser } from '../states/authUser/action';

function Navigation() {
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(asyncUnsetAuthUser());
  };

  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap gap-4 items-center justify-between mx-auto p-4">
        <Link to={path.HOME_PAGE} className="flex items-center" aria-current="page">
          <img src="./icons/logo.svg" className="h-7 sm:h-8" alt="Diskas Logo" />
        </Link>
        <div
          className="items-center flex w-auto"
          id="navbar-sticky"
        >
          <Link
            to={path.ADD_THREAD_PAGE}
            className="hidden sm:inline-flex text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold tracking-wide rounded-lg text-base px-4 py-2 text-center mr-2 sm:mr-4 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add new discussion
          </Link>
          <ul className="hidden sm:flex sm:flex-row sm:order-last p-0 mt-0 font-bold border-0 bg-white space-x-8 md:border-0 sm:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                to={path.HOME_PAGE}
                className="block py-2 px-0 text-gray-900 hover:text-blue-700 bg-transparent dark:text-slate-100"
                aria-current="page"
              >
                Threads
              </Link>
            </li>
            <li>
              <button
                type="button"
                onClick={onLogout}
                className="block py-2 px-0 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-slate-100 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Log out
              </button>
            </li>
          </ul>
          <Link
            to={path.ADD_THREAD_PAGE}
            className="sm:hidden inline-flex items-center text-slate-100 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-lg px-3 py-2.5 text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <FiPlus />
            <span className="text-sm font-bold">
              Add
            </span>
          </Link>
          <button
            type="button"
            className="mx-2 sm:mr-6 text-xl sm:text-2xl dark:text-slate-100"
          >
            <FaSun />
          </button>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            onClick={() => alert('Navbar sedang dalam perbaikan!')}
            className="inline-flex items-center p-2 text-2xl text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-slate-100 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <FiMenu />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
