import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addThread } from '../states/threads/action';
import ThreadInput from '../components/ThreadInput';

function AddThreadPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onAddThread = (title, body, category) => {
    dispatch(addThread({ title, body, category }));
    navigate('/');
  };

  return (
    <div className="min-h-full">
      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Add Thread
          </h1>
        </div>
      </header>
      <main className="bg-slate-300">
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          <ThreadInput addThread={onAddThread} />
        </div>
      </main>
    </div>
  );
}

export default AddThreadPage;
