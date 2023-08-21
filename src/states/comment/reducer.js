import { Action } from './action';

const commentReducer = (comments = [], action = {}) => {
  switch (action.type) {
    case Action.ADD_COMMENT:
      return [action.payload.comment, ...comments];
    case Action.CLEAR_COMMENT:
      return null;
    case Action.RECEIVE_COMMENTS:
      return action.payload.comments;
    case Action.TOGGLE_DOWNVOTE_COMMENT:
      return comments.map((comment) => {
        if (comment.id === action.payload.commentId) {
          return {
            ...comment,
            downVotesBy: comment.downVotesBy.concat([action.payload.userId]),
            upVotesBy: comment.upVotesBy.filter((id) => id !== action.payload.userId),
          };
        }
      });
    case Action.TOGGLE_NEUTRALVOTE_COMMENT:
      return comments.map((comment) => {
        if (comment.id === action.payload.commentId) {
          return {
            ...comment,
            downVotesBy: comment.downVotesBy.includes(action.payload.userId)
              ? comment.downVotesBy.filter((id) => id !== action.payload.userId)
              : comment.downVotesBy,
            upVotesBy: comment.upVotesBy.includes(action.payload.userId)
              ? comment.upVotesBy.filter((id) => id !== action.payload.userId)
              : comment.upVotesBy,
          };
        }
      });
    case Action.TOGGLE_UPVOTE_COMMENT:
      return comments.map((comment) => {
        if (comment.id === action.payload.commentId) {
          return {
            ...comment,
            upVotesBy: comment.upVotesBy.concat([action.payload.userId]),
            downVotesBy: comment.downVotesBy.filter((id) => id !== action.payload.userId),
          };
        }
      });
    default:
      return comments;
  }
};

export default commentReducer;
