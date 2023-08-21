import { Action } from './action';

const threadsReducer = (threads = [], action = {}) => {
  switch (action.type) {
    case Action.ADD_THREAD:
      return [action.payload.thread, ...threads];
    case Action.RECEIVE_THREADS:
      return action.payload.threads;
    case Action.TOGGLE_DOWNVOTE_THREAD:
      return threads.map((thread) => {
        if (thread.id === action.payload.threadId) {
          return {
            ...threads,
            downVotesBy: thread.downVotesBy.concat([action.payload.userId]),
            upVotesBy: thread.upVotesBy.filter((id) => id !== action.payload.userId),
          };
        }
      });
    case Action.TOGGLE_NEUTRALVOTE_THREAD:
      return threads.map((thread) => {
        if (thread.id === action.payload.threadId) {
          return {
            ...threads,
            downVotesBy: thread.downVotesBy.includes(action.payload.userId)
              ? thread.downVotesBy.filter((id) => id !== action.payload.userId)
              : thread.downVotesBy,
            upVotesBy: thread.upVotesBy.includes(action.payload.userId)
              ? thread.upVotesBy.filter((id) => id !== action.payload.userId)
              : thread.upVotesBy,
          };
        }
      });
    case Action.TOGGLE_UPVOTE_THREAD:
      return threads.map((thread) => {
        if (thread.id === action.payload.threadId) {
          return {
            ...threads,
            upVotesBy: thread.upVotesBy.concat([action.payload.userId]),
            downVotesBy: thread.downVotesBy.filter((id) => id !== action.payload.userId),
          };
        }
      });
    default:
      return threads;
  }
};

export default threadsReducer;
