import React from 'react';
import PropTypes from 'prop-types';
import { AiFillLike } from 'react-icons/ai';

function NeutralizeThreadButton({ onClick, onClickArgumen }) {
  const onClickHandle = (event) => {
    event.stopPropagation();
    onClick(onClickArgumen);
  };

  return (
    <button
      type="button"
      onClick={onClickHandle}
      className="bg-gray-100 dark:bg-gray-700 hover:bg-gray-50 w-9 h-9 rounded-full text-xl text-gray-300 dark:text-gray-500 hover:text-blue-700"
    >
      <AiFillLike className="inline-block -mt-1" />
    </button>
  );
}

NeutralizeThreadButton.propTypes = {
  onClick: PropTypes.func,
  onClickArgumen: PropTypes.string,
};

NeutralizeThreadButton.defaultProps = {
  onClick: null,
  onClickArgumen: null,
};

export default NeutralizeThreadButton;
