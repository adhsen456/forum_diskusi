import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../data/api';

const Action = {
  CLEAR_THREAD_DETAIL: 'CLEAR_THREAD_DETAIL',
  RECEIVE_THREAD_DETAIL: 'RECEIVE_THREAD_DETAIL',
  TOGGLE_DOWNVOTE_THREAD_DETAIL: 'TOGGLE_DOWNVOTE_THREAD_DETAIL',
  TOGGLE_NEUTRALVOTE_THREAD_DETAIL: 'TOGGLE_NEUTRALVOTE_THREAD_DETAIL',
  TOGGLE_UPVOTE_THREAD_DETAIL: 'TOGGLE_UPVOTE_THREAD_DETAIL',
};

const clearDetailThreadActionCreator = () => ({
  type: Action.CLEAR_THREAD_DETAIL,
});

const receiveDetailThreadActionCreator = (detailThread) => ({
  type: Action.RECEIVE_THREAD_DETAIL,
  payload: {
    detailThread,
  },
});

const toggleDownvoteDetailThreadActionCreator = ({ threadId, userId }) => ({
  type: Action.TOGGLE_DOWNVOTE_THREAD_DETAIL,
  payload: {
    threadId,
    userId,
  },
});

const toggleNeutralvoteDetailThreadActionCreator = ({ threadId, userId }) => ({
  type: Action.TOGGLE_NEUTRALVOTE_THREAD_DETAIL,
  payload: {
    threadId,
    userId,
  },
});

const toggleUpvoteDetailThreadActionCreator = ({ threadId, userId }) => ({
  type: Action.TOGGLE_UPVOTE_THREAD_DETAIL,
  payload: {
    threadId,
    userId,
  },
});

const receiveDetailThread = (threadId) => async (dispatch) => {
  dispatch(showLoading());
  try {
    const threadDetail = await api.getdetailThread(threadId);
    dispatch(clearDetailThreadActionCreator());
    dispatch(receiveDetailThreadActionCreator(threadDetail));
  } catch (e) {
    alert(e.message);
  }
  dispatch(hideLoading());
};

const toggleDownvoteDetailThread = (threadId) => async (dispatch, getState) => {
  dispatch(showLoading());
  const { authUser } = getState();
  dispatch(toggleDownvoteDetailThreadActionCreator({ threadId, userId: authUser.id }));
  try {
    await api.downvoteThread(threadId);
  } catch (e) {
    console.log(e.message);
  }
  dispatch(hideLoading());
};

const toggleNeutralvoteDetailThread = (threadId) => async (dispatch, getState) => {
  dispatch(showLoading());
  const { authUser } = getState();
  dispatch(toggleNeutralvoteDetailThreadActionCreator({ threadId, userId: authUser.id }));
  try {
    await api.neutralvoteThread(threadId);
  } catch (e) {
    console.log(e.message);
  }
  dispatch(hideLoading());
};

const toggleUpvoteDetailThread = (threadId) => async (dispatch, getState) => {
  dispatch(showLoading());
  const { authUser } = getState();
  dispatch(toggleUpvoteDetailThreadActionCreator({ threadId, userId: authUser.id }));
  try {
    await api.upvoteThread(threadId);
  } catch (e) {
    alert(e.message);
  }
  dispatch(hideLoading());
};

export {
  Action,
  clearDetailThreadActionCreator,
  receiveDetailThreadActionCreator,
  toggleDownvoteDetailThreadActionCreator,
  toggleNeutralvoteDetailThreadActionCreator,
  toggleUpvoteDetailThreadActionCreator,
  receiveDetailThread,
  toggleDownvoteDetailThread,
  toggleNeutralvoteDetailThread,
  toggleUpvoteDetailThread,
};
