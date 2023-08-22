import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../data/api';

const Action = {
  SET_AUTH_USER: 'SET_AUTH_USER',
  UNSET_AUTH_USER: 'UNSET_AUTH_USER',
};

const setAuthUserActionCreator = (authUser) => ({
  type: Action.SET_AUTH_USER,
  payload: {
    authUser,
  },
});

const unsetAuthUserActionCreator = () => ({
  type: Action.UNSET_AUTH_USER,
  payload: {
    authUser: null,
  },
});

const setAuthUser = ({ email, password }) => async (dispatch) => {
  dispatch(showLoading());
  try {
    const token = await api.login({ email, password });
    api.putAccessToken(token);
    const authUser = await api.getOwnProfile();
    dispatch(setAuthUserActionCreator(authUser));
  } catch (e) {
    console.log(e.message);
  }
  dispatch(hideLoading());
};

const unsetAuthUser = () => (dispatch) => {
  dispatch(showLoading());
  dispatch(unsetAuthUserActionCreator());
  api.putAccessToken('');
  dispatch(hideLoading());
};

export {
  Action,
  setAuthUserActionCreator,
  unsetAuthUserActionCreator,
  setAuthUser,
  unsetAuthUser,
};
