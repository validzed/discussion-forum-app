import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import useInput from '../hooks/useInput';
import { asyncAddThread } from '../states/threads/action';
import { path } from '../utils';

function AddThreadInput() {
  const navigate = useNavigate();
  const [title, onChangeTitle] = useInput('');
  const [category, setCategory] = React.useState('');
  const [body, setBody] = React.useState('');

  const dispatch = useDispatch();

  const isFilled = [title, category, body].every(Boolean);

  const onAddThread = () => {
    if (!isFilled) {
      alert('Form can\'t be empty');
      return;
    }
    dispatch(asyncAddThread({ title, body, category }));
    navigate(path.HOME_PAGE);
  };

  const onChangeCategory = (e) => {
    if (e.target.value.length <= 50) {
      setCategory(e.target.value);
    }
  };

  return (
    <div className="mt-6">
      <div className="mb-6">
        <label
          htmlFor="title"
          className="block mb-2 text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-200"
        >
          Title
        </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={onChangeTitle}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Enter a discussion title"
          required
        />
      </div>
      <div className="relative mb-6">
        <label
          htmlFor="category"
          className="block mb-2 text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-200"
        >
          Category
        </label>
        <input
          type="text"
          id="category"
          value={category}
          onChange={onChangeCategory}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Enter a discussion category"
          required
        />
        <span className="absolute top-3 right-0 text-sm text-gray-800 dark:text-gray-400">
          <strong>{category.length}</strong>
          /50
        </span>
      </div>
      <div className="mb-6">
        <label
          htmlFor="body"
          className="block mb-2 text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-200"
        >
          Description
        </label>
        <div
          type="text"
          id="body"
          value={body}
          onInput={(e) => setBody(e.target.innerHTML)}
          style={{ minHeight: '120px' }}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          data-placeholder="Enter a discussion category"
          contentEditable
        />
      </div>
      <button
        type="submit"
        onClick={onAddThread}
        className="my-2 text-white dark:text-gray-100 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-lg w-full px-5 py-3 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-blue-800"
      >
        Create discussion
      </button>
    </div>
  );
}

export default AddThreadInput;
