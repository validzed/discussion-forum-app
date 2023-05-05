/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import ThreadItem from './ThreadItem';

function ThreadList({ threads, upvote, neutralVote }) {
  return (
    <div
      id="thread-list-wrapper"
      className="dark:bg-gray-900 max-w-3xl mx-auto pt-16 p-4 divide-y"
    >
      {threads.map((thread) => (
        <ThreadItem key={thread.id} {...thread} upvote={upvote} neutralVote={neutralVote} />
      ))}
    </div>
  );
}

ThreadList.propTypes = {
  threads: PropTypes.arrayOf(PropTypes.object).isRequired,
  upvote: PropTypes.func.isRequired,
  neutralVote: PropTypes.func.isRequired,
};

export default ThreadList;
