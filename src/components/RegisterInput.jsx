import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';

function RegisterInput({ register }) {
  const [name, onChangeName] = useInput('');
  const [email, onChangeEmail] = useInput('');
  const [password, onChangePassword] = useInput('');

  const onSubmitHandler = (e) => {
    e.preventDefault();
    register({ name, email, password });
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div className="mb-4">
        <label
          htmlFor="name"
          className="block mb-2 text-lg font-bold text-gray-900 dark:text-white"
        >
          Name
        </label>
        <input
          type="name"
          id="name"
          value={name}
          onChange={onChangeName}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="email"
          className="block mb-2 text-lg font-bold text-gray-900 dark:text-white"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={onChangeEmail}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="name@email.com"
          required
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="password"
          className="block mb-2 text-lg font-bold text-gray-900 dark:text-white"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={onChangePassword}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-700 focus:border-blue-700 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
        />
      </div>
      <button
        type="submit"
        className="my-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-lg w-full px-5 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Register
      </button>
    </form>
  );
}

RegisterInput.propTypes = {
  register: PropTypes.func.isRequired,
};

export default RegisterInput;
