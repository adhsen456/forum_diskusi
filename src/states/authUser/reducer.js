import { Action } from './action';

const authUserReducer = (authUser = null, action = {}) => {
  switch (action.type) {
    case Action.SET_AUTH_USER:
      return action.payload.authUser;

    case Action.UNSET_AUTH_USER:
      return null;

    default:
      return authUser;
  }
};

export default authUserReducer;
