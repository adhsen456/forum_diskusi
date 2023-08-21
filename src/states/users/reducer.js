import { Action } from './action';

const usersReducer = (users = [], action = {}) => {
  switch (action.type) {
    case Action.RECEIVE_USERS:
      return action.payload.users;
    default:
      return users;
  }
};

export default usersReducer;
