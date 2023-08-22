import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { populateUsersAndThreads } from '../states/shared/action';
import {
  toggleDownvote, toggleUpvote, toggleNeutralvote,
} from '../states/threads/action';
import ThreadsList from '../components/ThreadsList';

function DashboardPage() {
  const threads = useSelector((states) => states.threads);
  const authUser = useSelector((states) => states.authUser);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(populateUsersAndThreads());
  }, [dispatch]);

  const onDownVote = (id) => dispatch(toggleDownvote(id));

  const onNeutralVote = (id) => dispatch(toggleNeutralvote(id));

  const onUpVote = (id) => dispatch(toggleUpvote(id));

  return (
    <div className="min-h-full">
      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Dashboard
          </h1>
        </div>
      </header>
      <main className="bg-slate-300">
        <div className="min-w-full lg:ml-80 justify-">
          <Link to="/new" className="text-white bg-gray-800 mt-10 hover:bg-slate-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex min-w-max">
            Tambahkan Thread
            <svg className="w-3.5 h-3.5 ml-2 mt-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg>
          </Link>
        </div>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          <ThreadsList
            threads={threads}
            authUser={authUser.id}
            downVote={onDownVote}
            upVote={onUpVote}
            neutralVote={onNeutralVote}
          />
        </div>
      </main>
    </div>
  );
}

export default DashboardPage;
