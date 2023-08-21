import { Action } from './action';

const detailThreadReducer = (detailThread = {}, action = {}) => {
  switch (action.type) {
    case Action.CLEAR_THREAD_DETAIL:
      return null;
    case Action.RECEIVE_THREAD_DETAIL:
      return action.payload.detailThread;
    case Action.TOGGLE_DOWNVOTE_THREAD_DETAIL:
      return {
        ...detailThread,
        downVotesBy: detailThread.downVotesBy.concat([action.payload.userId]),
        upVotesBy: detailThread.upVotesBy.filter((id) => id !== action.payload.userId),
      };
    case Action.TOGGLE_NEUTRALVOTE_THREAD_DETAIL:
      return {
        ...detailThread,
        downVotesBy: detailThread.downVotesBy.includes(action.payload.userId)
          ? detailThread.downVotesBy.filter((id) => id !== action.payload.userId)
          : detailThread.downVotesBy,
        upVotesBy: detailThread.upVotesBy.includes(action.payload.userId)
          ? detailThread.upVotesBy.filter((id) => id !== action.payload.userId)
          : detailThread.upVotesBy,
      };
    case Action.TOGGLE_UPVOTE_THREAD_DETAIL:
      return {
        ...detailThread,
        upVotesBy: detailThread.upVotesBy.concat([action.payload.userId]),
        downVotesBy: detailThread.downVotesBy.filter((id) => id !== action.payload.userId),
      };
    default:
      return detailThread;
  }
};

export default detailThreadReducer;
