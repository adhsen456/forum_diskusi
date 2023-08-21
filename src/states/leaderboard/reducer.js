import { Action } from './action';

const leaderboardReducer = (leaderboards = [], action = {}) => {
  switch (action.type) {
    case Action.RECEIVE_LEADERBOARD:
      return action.payload.leaderboard;
    default:
      return leaderboards;
  }
};

export default leaderboardReducer;
