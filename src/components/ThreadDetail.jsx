import React from 'react';
import PropTypes from 'prop-types';
import parse from 'html-react-parser';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import postedAt from '../data/timePosted';

function ThreadDetail({
  thread, authUser, upVote, downVote, neutralVote,
}) {
  const {
    title = '', body = '', category = '', createdAt = '',
    upVotesBy = [], downVotesBy = [], owner = {},
  } = { ...thread };
  const { avatar, name } = { ...owner };
  const isThreadDownVoted = downVotesBy.includes(authUser);
  const isThreadUpVoted = upVotesBy.includes(authUser);

  return (
    <div className="max-w-2xl mx-auto py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200">
      <div
        className="bg-white"
      >
        <div className="max-w-2xl mx-auto">
          <article
            className="group block my-5 rounded-lg p-6 bg-slate-200 ring-1 ring-slate-900/5 shadow-lg space-y-3"
          >
            <section className="flex justify-between items-center mb-5">
              <div className="flex items-center">
                <p className="inline-flex items-center mr-3 text-md text-gray-900">
                  <img
                    className="mr-2 w-8 h-8 rounded-full"
                    src={avatar}
                    alt={name}
                  />
                  <strong>{name}</strong>
                  {' '}
                </p>
                <p className="mx-50 text-xs text-gray-600 items-right">
                  {postedAt(createdAt)}
                </p>
              </div>
            </section>
            <span className="text-gray-700 rounded-lg border-rose-600 p-2 bg-slate-100">
              {`#${category}`}
            </span>
            <p className="text-black-500 text-lg">
              <strong>{title}</strong>
            </p>
            <span className="text-gray-500">
              {parse(body)}
            </span>
            <div className="flex items-center mt-4 space-x-4" />
            <span className="inline-flex items-center mr-3 text-md text-gray-900">
              <button
                type="button"
                aria-label="up-vote"
                onClick={() => (isThreadUpVoted ? neutralVote() : upVote())}
                className="px-2"
              >
                { isThreadUpVoted ? <FaChevronUp style={{ color: 'green' }} /> : <FaChevronUp className="hover:text-green-500" />}
              </button>
              {upVotesBy.length - downVotesBy.length}
              <button
                type="button"
                aria-label="down-vote"
                onClick={() => (isThreadDownVoted ? neutralVote() : downVote())}
                className="px-2"
              >
                { isThreadDownVoted ? <FaChevronDown style={{ color: 'red' }} /> : <FaChevronDown className="hover:text-red-500" />}
              </button>
            </span>
          </article>
        </div>
      </div>
    </div>
  );
}

const userShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

const detailThreadShape = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  owner: PropTypes.shape(userShape).isRequired,
};

ThreadDetail.propTypes = {
  thread: PropTypes.shape(detailThreadShape).isRequired,
  authUser: PropTypes.string.isRequired,
  upVote: PropTypes.func.isRequired,
  neutralVote: PropTypes.func.isRequired,
  downVote: PropTypes.func.isRequired,
};

export default ThreadDetail;
