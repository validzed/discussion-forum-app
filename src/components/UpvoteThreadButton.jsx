import React from 'react';
import PropTypes from 'prop-types';
import { AiFillLike } from 'react-icons/ai';

function UpvoteThreadButton({ onClick, onClickArgumen }) {
  const onClickHandle = (event) => {
    event.stopPropagation();
    onClick(onClickArgumen);
  };

  return (
    <button
      type="button"
      onClick={onClickHandle}
      className="bg-gray-100 dark:bg-gray-700 hover:bg-gray-50 w-9 h-9 rounded-full text-xl text-blue-700 dark:text-blue-400 hover:text-blue-300"
    >
      <AiFillLike className="inline-block -mt-1" />
    </button>
  );
}

UpvoteThreadButton.propTypes = {
  onClick: PropTypes.func,
  onClickArgumen: PropTypes.string,
};

UpvoteThreadButton.defaultProps = {
  onClick: null,
  onClickArgumen: null,
};

export default UpvoteThreadButton;
