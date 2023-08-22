import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../data/api';
import { setAuthUserActionCreator } from '../authUser/action';

const Action = {
  SET_IS_PRELOAD: 'SET_IS_PRELOAD',
};

const setIsPreloadActionCreator = (isPreload) => ({
  type: Action.SET_IS_PRELOAD,
  payload: {
    isPreload,
  },
});

const isPreloadProcess = () => async (dispatch) => {
  dispatch(showLoading());
  try {
    const authUser = await api.getOwnProfile();
    dispatch(setAuthUserActionCreator(authUser));
  } catch (e) {
    console.log(e.message);
    dispatch(setAuthUserActionCreator(null));
  } finally {
    dispatch(setIsPreloadActionCreator(false));
  }
  dispatch(hideLoading());
};

export {
  Action,
  setIsPreloadActionCreator,
  isPreloadProcess,
};
