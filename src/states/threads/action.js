import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../data/api';

const Action = {
  ADD_THREAD: 'ADD_THREAD',
  RECEIVE_THREADS: 'RECEIVE_THREADS',
  TOGGLE_DOWNVOTE_THREAD: 'TOGGLE_DOWNVOTE_THREAD',
  TOGGLE_NEUTRALVOTE_THREAD: 'TOGGLE_NEUTRALVOTE_THREAD',
  TOGGLE_UPVOTE_THREAD: 'TOGGLE_UPVOTE_THREAD',
};

const addThreadActionCreator = (thread) => ({
  type: Action.ADD_THREAD,
  payload: {
    thread,
  },
});

const receiveThreadsActionCreator = (threads) => ({
  type: Action.RECEIVE_THREADS,
  payload: {
    threads,
  },
});

const toggleDownvoteThreadActionCreator = ({ threadId, userId }) => ({
  type: Action.TOGGLE_DOWNVOTE_THREAD,
  payload: {
    threadId,
    userId,
  },
});

const toggleNeutralvoteThreadActionCreator = ({ threadId, userId }) => ({
  type: Action.TOGGLE_NEUTRALVOTE_THREAD,
  payload: {
    threadId,
    userId,
  },
});

const toggleUpvoteThreadActionCreator = ({ threadId, userId }) => ({
  type: Action.TOGGLE_UPVOTE_THREAD,
  payload: {
    threadId,
    userId,
  },
});

const addThread = ({ title, body, category }) => async (dispatch) => {
  dispatch(showLoading());
  try {
    const thread = await api.createThread({ title, body, category });
    dispatch(addThreadActionCreator(thread));
  } catch (e) {
    alert(e.message);
  }
  dispatch(hideLoading());
};

const toggleDownvote = (threadId) => async (dispatch, getState) => {
  dispatch(showLoading());
  const { authUser } = getState();
  dispatch(toggleDownvoteThreadActionCreator({ threadId, userId: authUser.id }));
  try {
    await api.downvoteThread(threadId);
  } catch (e) {
    console.log(e.message);
  }
  dispatch(hideLoading());
};

const toggleNeutralvote = (threadId) => async (dispatch, getState) => {
  dispatch(showLoading());
  const { authUser } = getState();
  dispatch(toggleNeutralvoteThreadActionCreator({ threadId, userId: authUser.id }));
  try {
    await api.neutralvoteThread(threadId);
  } catch (e) {
    console.log(e.message);
  }
  dispatch(hideLoading());
};

const toggleUpvote = (threadId) => async (dispatch, getState) => {
  dispatch(showLoading());
  const { authUser } = getState();
  dispatch(toggleUpvoteThreadActionCreator({ threadId, userId: authUser.id }));
  try {
    await api.upvoteThread(threadId);
  } catch (e) {
    console.log(e.message);
  }
  dispatch(hideLoading());
};

export {
  Action,
  addThreadActionCreator,
  receiveThreadsActionCreator,
  toggleDownvoteThreadActionCreator,
  toggleUpvoteThreadActionCreator,
  addThread,
  toggleDownvote,
  toggleNeutralvote,
  toggleUpvote,
};
