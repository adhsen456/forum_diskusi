import React from 'react';
import PropTypes from 'prop-types';

function LeaderboardItem({ user, score, authUser }) {
  return (
    <ul className="divide-y divide-gray-800">
      <li className="flex justify-between gap-x-6 py-5">
        <div className="flex min-w-0 gap-x-4">
          <img
            className="h-12 w-12 flex-none rounded-full bg-gray-50"
            src={user.avatar}
            alt={user.name}
          />
          <div className="min-w-0 flex-auto">
            <p
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              {user.name === authUser ? `${user.name} (Anda)` : user.name}
            </p>
            <p
              className="mt-1 truncate text-xs leading-5 text-gray-500"
            >
              {user.email}
            </p>
          </div>
        </div>
        <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
          <p className="text-md leading-6 text-gray-900">SCORE</p>
          <p className="mt-1 text-lg leading-5 text-gray-800">
            <strong>{score}</strong>
          </p>
        </div>
      </li>
    </ul>
  );
}

const userShape = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

const leaderboardShape = {
  user: PropTypes.shape(userShape).isRequired,
  score: PropTypes.number.isRequired,
};

LeaderboardItem.propTypes = {
  ...leaderboardShape,
};

export { leaderboardShape };

export default LeaderboardItem;
