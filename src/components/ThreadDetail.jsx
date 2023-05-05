import React from 'react';
import PropTypes from 'prop-types';
import { AiOutlineComment, AiFillTag } from 'react-icons/ai';
import parser from 'html-react-parser';
import { postedAt } from '../utils';
import NeutralizeThreadButton from './NeutralizeThreadButton';
import UpvoteThreadButton from './UpvoteThreadButton';
import ThreadCommentInput from './ThreadCommentInput';
import ThreadCommentList from './ThreadCommentList';

function ThreadDetail({
  id, title, body, category, comments, upVotesBy, owner, createdAt, authUser, addComment, upvote, neutralVote,
}) {
  const isThreadVoted = upVotesBy.includes(authUser);

  return (
    <>
      <h1 className="text-2xl sm:text-3xl mt-4 dark:text-gray-100">{title}</h1>
      <div id="thread-item" className="flex mt-4">
        <div id="thread-item__user-photo" className="flex-none mt-2">
          <img src={owner.avatar} alt={owner.name} width="56" height="56" className="w-11 sm:w-14 rounded-full mr-3" />
        </div>
        <div id="thread-item__detail">
          <div className="flex flex-wrap gap-3 items-center mt-5 sm:mt-6 dark:text-slate-100">
            <p className="text-base sm:text-xl font-bold text-blue-700 dark:text-slate-400">{owner.name}</p>
            <p className="text-sm sm:text-base text-gray-500 dark:text-slate-500">{postedAt(createdAt)}</p>
          </div>
          <div className="text-base sm:text-lg mt-4 text-gray-700 dark:text-slate-200">{parser(body)}</div>
          <div className="flex gap-3.5 flex-wrap mt-6 justify-between">
            <div className="flex gap-2 sm:gap-3 items-center">
              {isThreadVoted ? <UpvoteThreadButton onClick={neutralVote} onClickArgumen={id} /> : <NeutralizeThreadButton onClick={upvote} onClickArgumen={id} />}
              <p className="text-xs sm:text-base font-bold text-gray-600 dark:text-gray-300 mr-3">
                {upVotesBy.length > 1 ? `${upVotesBy.length} likes` : `${upVotesBy.length} like`}
              </p>
              <div className="bg-gray-100 dark:bg-gray-700 w-9 h-9 rounded-full text-xl text-gray-400">
                <AiOutlineComment className="m-auto h-9" />
              </div>
              <p className="text-xs sm:text-base font-bold text-gray-600 dark:text-gray-300">
                {comments.length > 1 ? `${comments.length} comments` : `${comments.length} comment`}
              </p>
            </div>
            <button type="button" className="bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 px-4 py-2 rounded-lg text-xs sm:text-base font-bold text-gray-600 dark:text-gray-300 hover:text-gray-500 tracking-wide" onClick={() => alert('Fungsi dalam perbaikan!')}>
              {category}
              <AiFillTag className="inline-block -rotate-90 text-gray-400 ml-1" />
            </button>
          </div>
          <ThreadCommentInput addComment={addComment} />
        </div>
      </div>
      <ThreadCommentList comments={comments} authUser={authUser} />
    </>
  );
}

const ownerShape = {
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
  comments: PropTypes.array,
  authUser: PropTypes.string.isRequired,
  owner: PropTypes.shape(ownerShape).isRequired,
};

ThreadDetail.propTypes = {
  ...threadItemShape,
  upvote: PropTypes.func.isRequired,
  neutralVote: PropTypes.func.isRequired,
};

export default ThreadDetail;
