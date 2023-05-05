import { showLoading, hideLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';

const ActionType = {
  RECEIVE_THREAD_DETAIL: 'RECEIVE_THREAD_DETAIL',
  CLEAR_THREAD_DETAIL: 'CLEAR_THREAD_DETAIL',
  ADD_COMMENT: 'ADD_COMMENT',
  UPVOTE_THREAD_DETAIL: 'UPVOTE_THREAD_DETAIL',
  NEUTRALIZE_THREAD_DETAIL_VOTE: 'NEUTRALIZE_THREAD_DETAIL_VOTE',
};

function receiveThreadDetailActionCreator(threadDetail) {
  return {
    type: ActionType.RECEIVE_THREAD_DETAIL,
    payload: {
      threadDetail,
    },
  };
}

function clearThreadDetailActionCreator() {
  return {
    type: ActionType.CLEAR_THREAD_DETAIL,
  };
}

function addCommentActionCreator(comments) {
  return {
    type: ActionType.ADD_COMMENT,
    payload: {
      comments,
    },
  };
}

function upvoteThreadDetailActionCreator({ userId }) {
  return {
    type: ActionType.UPVOTE_THREAD_DETAIL,
    payload: {
      userId,
    },
  };
}

function neutralizeThreadDetailVoteActionCreator({ userId }) {
  return {
    type: ActionType.NEUTRALIZE_THREAD_DETAIL_VOTE,
    payload: {
      userId,
    },
  };
}

function asyncReceiveThreadDetail(threadId) {
  return async (dispatch) => {
    dispatch(clearThreadDetailActionCreator());
    dispatch(showLoading());
    try {
      const threadDetail = await api.getDetailThread(threadId);
      dispatch(receiveThreadDetailActionCreator(threadDetail));
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

function asyncAddComment(threadId, comment) {
  return async (dispatch) => {
    try {
      const newComments = await api.createComment(threadId, comment);
      dispatch(addCommentActionCreator(newComments));
    } catch (error) {
      alert(error.message);
    }
  };
}

function asyncUpvoteThreadDetail(threadId) {
  return async (dispatch, getState) => {
    const { authUser } = getState();
    dispatch(upvoteThreadDetailActionCreator({ userId: authUser.id }));
    try {
      await api.upvoteThread(threadId);
    } catch (error) {
      alert(error.message);
    }
  };
}

function asyncNeutralizeThreadDetailVote(threadId) {
  return async (dispatch, getState) => {
    const { authUser } = getState();
    dispatch(neutralizeThreadDetailVoteActionCreator({ userId: authUser.id }));
    try {
      await api.neutralizeThreadVote(threadId);
    } catch (error) {
      alert(error.message);
    }
  };
}

export {
  ActionType,
  receiveThreadDetailActionCreator,
  clearThreadDetailActionCreator,
  upvoteThreadDetailActionCreator,
  neutralizeThreadDetailVoteActionCreator,
  asyncReceiveThreadDetail,
  asyncAddComment,
  asyncUpvoteThreadDetail,
  asyncNeutralizeThreadDetailVote,
};
