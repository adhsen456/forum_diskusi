import { hideLoading, showLoading } from 'react-redux-loading-bar';
import { receiveLeaderboardActionCreator } from '../leaderboard/action';
import { receiveThreadsActionCreator } from '../threads/action';
import { receiveUsersActionCreator } from '../users/action';
import { receiveCommentsActionCreator } from '../comment/action';
import { receiveDetailThreadActionCreator } from '../detailThread/action';
import api from '../../data/api';

const populateUsersAndThreads = () => async (dispatch) => {
  dispatch(showLoading());
  try {
    const threads = await api.getAllThreads();
    const users = await api.getAllUsers();
    dispatch(receiveThreadsActionCreator(threads));
    dispatch(receiveUsersActionCreator(users));
  } catch (e) {
    alert(e.message);
  }
  dispatch(hideLoading());
};

const populateDetailAndComments = (id) => async (dispatch) => {
  dispatch(showLoading());
  try {
    const detailThread = await api.getDetailThread(id);
    const comments = await api.getComments(id);
    dispatch(receiveDetailThreadActionCreator(detailThread));
    dispatch(receiveCommentsActionCreator(comments));
  } catch (e) {
    alert(e.message);
  }
  dispatch(hideLoading());
};

const populateLeaderboard = () => async (dispatch) => {
  dispatch(showLoading());
  try {
    const leaderboards = await api.getLeaderboards();
    dispatch(receiveLeaderboardActionCreator(leaderboards));
  } catch (e) {
    alert(e.message);
  }
  dispatch(hideLoading());
};

export { populateUsersAndThreads, populateDetailAndComments, populateLeaderboard };
