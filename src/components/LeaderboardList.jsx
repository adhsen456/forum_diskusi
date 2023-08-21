import React from 'react';
import PropTypes, { shape } from 'prop-types';
import LeaderboardItem, { leaderboardShape } from './LeaderboardItem';

function LeaderboardList({ leaderboards }) {
  return (
    <section className="max-w-2xl mx-auto py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200">
      <h2 className="text-2xl lg:text-2xl font-bold text-gray-900">
        Leaderboard Saat Ini
      </h2>
      {
          leaderboards.map((leaderboard) => (
            <LeaderboardItem
              key={leaderboard.uid}
              {...leaderboard}
            />
          ))
            }
    </section>
  );
}

LeaderboardList.propTypes = {
  leaderboards: PropTypes.arrayOf(shape(leaderboardShape)).isRequired,
};

export default LeaderboardList;
