import React from 'react';
import PropTypes from 'prop-types';
import parser from 'html-react-parser';
import { postedAt } from '../utils';

function ThreadCommentItem({
  id, content, createdAt, upVotesBy, owner, authUser,
}) {
  const isCommentVoted = upVotesBy.includes(authUser);

  return (
    <div id="comment-item" className="flex mt-4 pt-3">
      <div id="comment-item__user-photo" className="flex-none mt-2">
        <img src={owner.avatar} alt={owner.name} width="24" height="24" className="w-8 rounded-full mr-3" />
      </div>
      <div id="comment-item__detail">
        <div className="mt-3 dark:text-slate-100">
          <div className="text-base tracking-wide text-gray-700 dark:text-slate-400">
            <strong className="mr-3">{owner.name}</strong>
            {parser(content)}
          </div>
        </div>
        <div className="flex gap-4 sm:gap-6 mt-4 sm:mt-6 items-center">
          <button type="button" className="text-base font-bold text-gray-600 dark:text-gray-300 hover:underline">
            {isCommentVoted ? 'Liked' : 'Like'}
          </button>
          <p className="text-sm text-gray-500 dark:text-gray-400">{postedAt(createdAt)}</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {upVotesBy.length > 1 ? `${upVotesBy.length} likes` : `${upVotesBy.length} like`}
          </p>
        </div>
      </div>
    </div>
  );
}

const ownerShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

const commentItemShape = {
  id: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string),
  authUser: PropTypes.string.isRequired,
  owner: PropTypes.shape(ownerShape).isRequired,
};

ThreadCommentItem.propTypes = {
  ...commentItemShape,
};

export default ThreadCommentItem;
