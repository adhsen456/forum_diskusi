import React from 'react';
import PropTypes from 'prop-types';
import ThreadItem, { threadItemShape } from './ThreadItem';

function ThreadsList({
  threads, authUser, downVote, upVote, neutralVote,
}) {
  const getCategories = threads.map((thread) => thread.category);
  const categories = [...new Set(getCategories)];

  return (
    <section className="max-w-2xl mx-auto py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200">
      <h2 className="text-lg lg:text-2xl font-bold text-gray-900">
        Discussion (
        {threads.length}
        )
      </h2>
      <div className="bg-slate-200 rounded-lg">
        <h3 className="text-md mt-6 lg:text-2xl py-2 text-center font-bold text-slate-700">
          Kategori Terpopuler
        </h3>
        <div>
          { categories.map((category) => (
            <button
              key={category}
              type="button"
              value={category}
              className="inline-flex mb-4 items-center mx-2 py-2.5 px-4 text-xs font-medium text-center text-white bg-slate-600 rounded-lg hover:bg-slate-800"
            >
              #
              {category}
            </button>
          )) }
        </div>
      </div>
      <div>
        { threads.map((thread) => (
          <ThreadItem
            key={thread.id}
            thread={thread}
            authUser={authUser}
            neutralVote={neutralVote}
            upVote={upVote}
            downVote={downVote}
          />
        ))}
      </div>
    </section>
  );
}

ThreadsList.propTypes = {
  threads: PropTypes.arrayOf(PropTypes.shape(threadItemShape)).isRequired,
  authUser: PropTypes.string.isRequired,
  upVote: PropTypes.func.isRequired,
  downVote: PropTypes.func.isRequired,
  neutralVote: PropTypes.func.isRequired,
};

export default ThreadsList;
