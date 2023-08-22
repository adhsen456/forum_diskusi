import React from 'react';
import PropTypes from 'prop-types';
import { FaChevronDown, FaChevronUp, FaComments } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import parse from 'html-react-parser';
import postedAt from '../data/timePosted';

function ThreadItem({
  thread, authUser, downVote, upVote, neutralVote,
}) {
  const {
    id, title, body, category, owner, upVotesBy,
    downVotesBy, createdAt, totalComments,
  } = { ...thread };

  const { name, avatar } = { ...owner };

  const navigate = useNavigate();
  const isThreadDownVoted = downVotesBy.includes(authUser);
  const isThreadUpVoted = upVotesBy.includes(authUser);

  // const onDownVoteClick = (e) => {
  //   // e.stopPropagation();
  //   downVote(id);
  // };

  // const onNeutralVoteClick = (e) => {
  //   // e.stopPropagation();
  //   neutralVote(id);
  // };
  // const onUpVoteClick = (e) => {
  //   // e.stopPropagation();
  //   upVote(id);
  // };

  const onThreadClick = () => {
    navigate(`/threads/${id}`);
  };

  const onThreadPress = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      navigate(`/threads/${id}`);
    }
  };

  const onCommentClick = () => {
    navigate(`/threads/${id}`);
  };

  return (
    <div
      className="bg-white rounded-lg"
    >
      <div className="max-w-2xl mx-auto">
        <article
          className="group block my-5 rounded-lg p-6 bg-slate-200 ring-1 ring-slate-900/5 shadow-lg space-y-3"
        >
          <section className="flex justify-between items-center mb-5">
            <div className="flex items-center">
              <span className="inline-flex items-center mr-3 text-md text-gray-900">
                <img
                  className="mr-2 w-8 h-8 rounded-full"
                  src={avatar}
                  alt={name}
                />
                <strong>{name}</strong>
                {' '}
              </span>
              <span className="mx-50 text-xs text-gray-600 items-right">
                {postedAt(createdAt)}
              </span>
            </div>
          </section>
          <span className="text-gray-700 rounded-lg border-rose-600 p-2 bg-slate-100">
            {`#${category}`}
          </span>
          <div
            role="button"
            tabIndex={0}
            onClick={onThreadClick}
            onKeyDown={onThreadPress}
            className="text-black-500 cursor-pointer text-lg"
          >
            <p className="font-bold hover:text-sky-500 hover:bg-slate-200 ">{title}</p>
          </div>
          <div>
            <span className="text-gray-600">
              {parse(body)}
            </span>
          </div>
          <div className="flex items-center mt-4 space-x-4" />
          <section className="flex justify-between items-center mb-5">

            <div className="flex items-center">
              <span className="inline-flex items-center mr-3 text-md text-gray-900">
                <button
                  type="button"
                  aria-label="up-vote"
                  onClick={() => (isThreadUpVoted ? neutralVote(id) : upVote(id))}
                  className="px-2"
                >
                  { isThreadUpVoted ? <FaChevronUp className="text-green-500" /> : <FaChevronUp className="hover:text-green-300" />}
                </button>
                {upVotesBy.length - downVotesBy.length}
                <button
                  type="button"
                  aria-label="down-vote"
                  onClick={() => (isThreadDownVoted ? neutralVote(id) : downVote(id))}
                  className="px-2"
                >
                  { isThreadDownVoted ? <FaChevronDown className="text-red-500" /> : <FaChevronDown className="hover:text-red-300" />}
                </button>
                <button
                  type="button"
                  aria-label="comment"
                  onClick={onCommentClick}
                  className="px-2"
                >
                  <FaComments className="hover:text-sky-500" />
                </button>
                {totalComments}
              </span>
            </div>
          </section>
        </article>
      </div>
    </div>
  );
}

const userShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

const threadItemShape = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  ownerId: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  owner: PropTypes.shape(userShape).isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  totalComments: PropTypes.number.isRequired,
};

ThreadItem.propTypes = {
  thread: PropTypes.shape(threadItemShape).isRequired,
  authUser: PropTypes.string.isRequired,
  neutralVote: PropTypes.func,
  upVote: PropTypes.func,
  downVote: PropTypes.func,
};

ThreadItem.defaultProps = {
  upVote: null,
  neutralVote: null,
  downVote: null,
};

export { threadItemShape };

export default ThreadItem;
