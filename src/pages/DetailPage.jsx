import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ThreadDetail from '../components/ThreadDetail';
import { asyncReceiveThreadDetail, asyncAddComment } from '../states/threadDetail/action';

function DetailPage() {
  const firstRun = React.useRef(true);
  const { threadId } = useParams();
  const {
    threadDetail = null,
    authUser,
  } = useSelector((state) => state);

  const dispatch = useDispatch();

  useEffect(() => {
    if (firstRun.current) {
      dispatch(asyncReceiveThreadDetail(threadId));
      firstRun.current = false;
    }
  }, [threadId, dispatch]);

  const onAddComment = (comment) => {
    dispatch(asyncAddComment(threadId, comment));
  };

  if (!threadDetail) {
    return null;
  }

  return (
    <section className="w-full p-4 mb-40 max-w-3xl mx-auto bg-white  dark:bg-gray-900 pt-20">
      <ThreadDetail {...threadDetail} authUser={authUser.id} addComment={onAddComment} />
    </section>
  );
}

export default DetailPage;
