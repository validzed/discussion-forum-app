import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { AiOutlineComment, AiFillTag } from 'react-icons/ai';
import parser from 'html-react-parser';
import { postedAt } from '../utils';
import UpvoteThreadButton from './UpvoteThreadButton';
import NeutralizeThreadButton from './NeutralizeThreadButton';

function ThreadItem({
  id, title, body, createdAt, upVotesBy, totalComments, category, creator, authUser, upvote, neutralVote,
}) {
  const isThreadVoted = upVotesBy.includes(authUser);

  return (
    <div id="thread-item" className="flex py-8">
      <div id="thread-item__user-photo" className="flex-none mt-2">
        <img src={creator.avatar} alt={creator.name} width="56" height="56" className="w-11 sm:w-14 rounded-full mr-3" />
      </div>
      <div id="thread-item__detail">
        <Link to={`threads/${id}`}>
          <h2 className="font-bold text-xl sm:text-3xl mb-3 text-gray-900 hover:underline dark:text-slate-200">{title}</h2>
        </Link>
        <div className="text-base sm:text-lg text-gray-700 dark:text-slate-200 line-clamp-4">{parser(body)}</div>
        <div className="flex flex-wrap gap-3 mt-2 dark:text-slate-100">
          <p className="text-sm sm:text-base font-bold text-blue-700 dark:text-slate-400">{creator.name}</p>
          <p className="text-sm sm:text-base text-gray-500 dark:text-slate-500">{postedAt(createdAt)}</p>
        </div>
        <div className="flex gap-3.5 flex-wrap mt-4 justify-between">
          <div className="flex gap-2 sm:gap-3 items-center">
            {isThreadVoted ? <UpvoteThreadButton onClick={neutralVote} onClickArgumen={id} /> : <NeutralizeThreadButton onClick={upvote} onClickArgumen={id} />}
            <p className="text-xs sm:text-base font-bold text-gray-600 dark:text-gray-300 mr-3">
              {upVotesBy.length > 1 ? `${upVotesBy.length} likes` : `${upVotesBy.length} like`}
            </p>
            <div className="bg-gray-100 dark:bg-gray-700 w-9 h-9 rounded-full text-xl text-gray-400">
              <AiOutlineComment className="m-auto h-9" />
            </div>
            <p className="text-xs sm:text-base font-bold text-gray-600 dark:text-gray-300">
              {totalComments > 1 ? `${totalComments} comments` : `${totalComments} comment`}
            </p>
          </div>
          <button type="button" className="bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 px-4 py-2 rounded-lg text-xs sm:text-base font-bold text-gray-600 dark:text-gray-300 hover:text-gray-500 tracking-wide" onClick={() => alert('Fungsi dalam perbaikan!')}>
            {category}
            <AiFillTag className="inline-block -rotate-90 text-gray-400 ml-1" />
          </button>
        </div>
      </div>
    </div>
  );
}

const creatorShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

const threadItemShape = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string),
  totalComments: PropTypes.number,
  authUser: PropTypes.string.isRequired,
  creator: PropTypes.shape(creatorShape).isRequired,
};

ThreadItem.propTypes = {
  ...threadItemShape,
  upvote: PropTypes.func.isRequired,
  neutralVote: PropTypes.func.isRequired,
};

export { threadItemShape };

export default ThreadItem;
