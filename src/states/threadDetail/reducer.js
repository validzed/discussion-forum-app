import { ActionType } from './action';

function threadDetailReducer(threadDetail = null, action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_THREAD_DETAIL:
      return action.payload.threadDetail;
    case ActionType.CLEAR_THREAD_DETAIL:
      return null;
    case ActionType.ADD_COMMENT:
      return {
        ...threadDetail,
        comments: [...threadDetail.comments, action.payload.comments],
      };
    case ActionType.UPVOTE_THREAD_DETAIL:
      return {
        ...threadDetail,
        upVotesBy: [...threadDetail.upVotesBy, action.payload.userId],
      };
    case ActionType.NEUTRALIZE_THREAD_DETAIL_VOTE:
      return {
        ...threadDetail,
        upVotesBy: threadDetail.upVotesBy.filter((user) => user !== action.payload.userId),
      };
    default:
      return threadDetail;
  }
}

export default threadDetailReducer;
