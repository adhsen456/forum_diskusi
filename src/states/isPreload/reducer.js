import { Action } from './action';

const isPreloadReducer = (isPreload = true, action = {}) => {
  switch (action.type) {
    case Action.SET_IS_PRELOAD:
      return action.payload.isPreload;
    default:
      return isPreload;
  }
};

export default isPreloadReducer;
