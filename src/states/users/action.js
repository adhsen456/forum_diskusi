import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../data/api';

const Action = {
  RECEIVE_USERS: 'RECEIVE_USERS',
};

const receiveUsersActionCreator = (users) => ({
  type: Action.RECEIVE_USERS,
  payload: {
    users,
  },
});

const registerUser = ({ name, email, password }) => async (dispatch) => {
  dispatch(showLoading());
  try {
    await api.register({ name, email, password });
  } catch (e) {
    alert(e.message);
  }
  dispatch(hideLoading());
};

export {
  Action,
  receiveUsersActionCreator,
  registerUser,
};
