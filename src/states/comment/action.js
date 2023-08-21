import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../data/api';

const Action = {
  ADD_COMMENT: 'ADD_COMMENT',
  CLEAR_COMMENT: 'CLEAR_COMMENT',
  RECEIVE_COMMENTS: 'RECEIVE_COMMENTS',
  TOGGLE_DOWNVOTE_COMMENT: 'TOGGLE_DOWNVOTE_COMMENT',
  TOGGLE_NEUTRALVOTE_COMMENT: 'TOGGLE_NEUTRALVOTE_COMMENT',
  TOGGLE_UPVOTE_COMMENT: 'TOGGLE_UPVOTE_COMMENT',
};

const addCommentActionCreator = (comment) => ({
  type: Action.ADD_COMMENT,
  payload: {
    comment,
  },
});

const clearCommentActionCreator = () => ({
  type: Action.CLEAR_COMMENT,
});

const receiveCommentsActionCreator = (comments) => ({
  type: Action.RECEIVE_COMMENTS,
  payload: {
    comments,
  },
});

const toggleDownvoteCommentActionCreator = ({ threadId, commentId, userId }) => ({
  type: Action.TOGGLE_DOWNVOTE_COMMENT,
  payload: {
    threadId,
    commentId,
    userId,
  },
});

const toggleNeutralvoteCommentActionCreator = ({ threadId, commentId, userId }) => ({
  type: Action.TOGGLE_NEUTRALVOTE_COMMENT,
  payload: {
    threadId,
    commentId,
    userId,
  },
});

const toggleUpvoteCommentActionCreator = ({ threadId, commentId, userId }) => ({
  type: Action.TOGGLE_UPVOTE_COMMENT,
  payload: {
    threadId,
    commentId,
    userId,
  },
});

const addComment = (id, { content }) => async (dispatch) => {
  dispatch(showLoading());
  try {
    const comment = await api.createComment(id, { content });
    dispatch(addCommentActionCreator(comment));
  } catch (e) {
    alert(e.message);
  }
  dispatch(hideLoading());
};

const receiveComments = (threadId) => async (dispatch) => {
  dispatch(showLoading());
  try {
    const comments = await api.getComments(threadId);
    dispatch(receiveCommentsActionCreator(comments));
  } catch (e) {
    alert(e.message);
  }
  dispatch(hideLoading());
};

const toggleDownvoteComment = (threadId, commentId) => async (dispatch, getState) => {
  dispatch(showLoading());
  const { authUser } = getState();
  dispatch(toggleDownvoteCommentActionCreator({ threadId, commentId, userId: authUser.id }));
  try {
    await api.downvoteComment(threadId, commentId);
  } catch (e) {
    console.log(e.message);
  }
  dispatch(hideLoading());
};

const toggleNeutralvoteComment = (threadId, commentId) => async (dispatch, getState) => {
  dispatch(showLoading());
  const { authUser } = getState();
  dispatch(toggleNeutralvoteCommentActionCreator({ threadId, commentId, userId: authUser.id }));
  try {
    await api.neutralvoteComment(threadId, commentId);
  } catch (e) {
    console.log(e.message);
  }
  dispatch(hideLoading());
};

const toggleUpvoteComment = (threadId, commentId) => async (dispatch, getState) => {
  dispatch(showLoading());
  const { authUser } = getState();
  dispatch(toggleUpvoteCommentActionCreator({ threadId, commentId, userId: authUser.id }));
  try {
    await api.upvoteComment(threadId, commentId);
  } catch (e) {
    console.log(e.message);
  }
  dispatch(hideLoading());
};

export {
  Action,
  addCommentActionCreator,
  clearCommentActionCreator,
  receiveCommentsActionCreator,
  toggleDownvoteCommentActionCreator,
  toggleNeutralvoteCommentActionCreator,
  toggleUpvoteCommentActionCreator,
  addComment,
  receiveComments,
  toggleDownvoteComment,
  toggleNeutralvoteComment,
  toggleUpvoteComment,
};
