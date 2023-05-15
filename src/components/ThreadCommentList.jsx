import React from 'react';
import PropTypes from 'prop-types';
import ThreadCommentItem from './ThreadCommentItem';

function ThreadCommentList({ comments, authUser }) {
  return (
    <section className="w-full py-4 sm:mt-4 mb-20 max-w-3xl mx-auto bg-white  dark:bg-gray-900 divide-y">
      <p className="text-md sm:text-lg font-bold dark:text-gray-100">
        {comments.length > 0 ? `${comments.length} comment` : '0 comment'}
      </p>
      {comments.map((comment) => (
        <ThreadCommentItem key={comment.id} {...comment} authUser={authUser} />
      ))}
    </section>
  );
}

ThreadCommentList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.objectOf),
  authUser: PropTypes.string.isRequired,
};

ThreadCommentList.defaultProps = {
  comments: null,
};

export default ThreadCommentList;
