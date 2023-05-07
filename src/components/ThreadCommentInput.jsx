import React, { useState } from 'react';
import PropTypes from 'prop-types';

function ThreadCommentInput({ addComment }) {
  const [comment, setComment] = useState('');

  return (
    <div className="relative mt-6">
      <div
        type="text"
        id="comment"
        value={comment}
        onInput={(e) => setComment(e.target.innerHTML)}
        style={{ minHeight: '120px', maxWidth: '480px' }}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        data-placeholder="Type here to reply ..."
        contentEditable
      />
      <button
        type="button"
        onClick={() => addComment(comment)}
        className="inline-flex text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold tracking-wide rounded-lg text-base px-4 py-2 text-center my-5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Post comment
      </button>
    </div>
  );
}

ThreadCommentInput.propTypes = {
  addComment: PropTypes.func.isRequired,
};

export default ThreadCommentInput;
