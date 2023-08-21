import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { populateLeaderboard } from '../states/shared/action';
import LeaderboardList from '../components/LeaderboardList';

function LeaderboardPage() {
  const leaderboards = useSelector((states) => states.leaderboard);
  const authUser = useSelector((states) => states.authUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(populateLeaderboard());
  }, [dispatch]);

  const leaderboardList = leaderboards.map((leaderboard) => (
    {
      ...leaderboard,
      authUser: authUser.name,
      uid: `leader-${uuidv4()}`,
    }
  ));
  return (
    <div className="min-h-full">
      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Leaderboard
          </h1>
        </div>
      </header>
      <main className="bg-slate-300">
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          <LeaderboardList leaderboards={leaderboardList} />
        </div>
      </main>
    </div>
  );
}

export default LeaderboardPage;
