import React from 'react';
import { AiFillLike } from 'react-icons/ai';

function NeutralizeThreadButton() {
  return (
    <button type="button" className="bg-gray-100 dark:bg-gray-700 hover:bg-gray-50 w-9 h-9 rounded-full text-xl text-gray-300 dark:text-gray-500 hover:text-blue-700">
      <AiFillLike className="inline-block -mt-1" />
    </button>
  );
}

export default NeutralizeThreadButton;
