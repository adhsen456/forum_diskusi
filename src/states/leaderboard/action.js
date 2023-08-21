const Action = {
  RECEIVE_LEADERBOARD: 'RECEIVE_LEADERBOARD',
};

const receiveLeaderboardActionCreator = (leaderboard) => ({
  type: Action.RECEIVE_LEADERBOARD,
  payload: {
    leaderboard,
  },
});

export {
  Action,
  receiveLeaderboardActionCreator,
};
