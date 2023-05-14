import React from 'react';
import { AiFillLike } from 'react-icons/ai';

function UpvoteThreadButton() {
  return (
    <button type="button" className="bg-gray-100 dark:bg-gray-700 hover:bg-gray-50 w-9 h-9 rounded-full text-xl text-blue-700 dark:text-blue-400 hover:text-blue-300">
      <AiFillLike className="inline-block -mt-1" />
    </button>
  );
}

export default UpvoteThreadButton;
