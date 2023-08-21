import React from 'react';
import PropTypes from 'prop-types';
import parse from 'html-react-parser';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import postedAt from '../data/timePosted';

function CommentItem({
  comment, authUser, upVote, downVote, neutralVote,
}) {
  const {
    id, content, owner, upVotesBy = [],
    downVotesBy = [], createdAt,
  } = { ...comment };

  const isCommentUpVoted = upVotesBy.includes(authUser);
  const isCommentDownVoted = downVotesBy.includes(authUser);

  // const onDownVoteClick = (e) => {
  //   e.stopPropagation();
  //   downVote(id);
  //   window.location.reload();
  //   // e.preventDefault();
  // };

  // const onNeutralVoteClick = (e) => {
  //   e.stopPropagation();
  //   neutralVote(id);
  //   window.location.reload();
  // };

  // const onUpVoteClick = (e) => {
  //   e.stopPropagation();
  //   upVote(id);
  //   window.location.reload();
  // };

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
              <p className="inline-flex items-center mr-3 text-md text-gray-900">
                <img
                  className="mr-2 w-8 h-8 rounded-full"
                  src={owner.avatar}
                  alt={owner.name}
                />
                <strong>{owner.name}</strong>
                {' '}
              </p>
              <p className="mx-50 text-xs text-gray-600 items-right">
                {postedAt(createdAt)}
              </p>
            </div>
          </section>
          <p className="text-gray-500">
            {parse(content)}
          </p>
          <div className="flex items-center mt-4 space-x-4" />
          <section className="flex justify-between items-center mb-5">
            <div className="flex items-center">
              <p className="inline-flex items-center mr-3 text-md text-gray-900">
                <button
                  type="button"
                  aria-label="up-vote"
                  onClick={() => (isCommentUpVoted ? neutralVote(id) : upVote(id))}
                  className="px-2"
                >
                  { isCommentUpVoted ? <FaChevronUp className="text-green-500" /> : <FaChevronUp className="hover:text-green-500" />}
                </button>
                {upVotesBy.length - downVotesBy.length}
                <button
                  type="button"
                  aria-label="down-vote"
                  onClick={() => (isCommentDownVoted ? neutralVote(id) : downVote(id))}
                  className="px-2"
                >
                  { isCommentDownVoted ? <FaChevronDown className="text-red-500" /> : <FaChevronDown className="hover:text-red-500" />}
                </button>
              </p>
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

const commentItemShape = {
  id: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  owner: PropTypes.shape(userShape).isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
};

CommentItem.propTypes = {
  comment: PropTypes.shape(commentItemShape).isRequired,
  authUser: PropTypes.string.isRequired,
  upVote: PropTypes.func,
  downVote: PropTypes.func,
  neutralVote: PropTypes.func,
};

CommentItem.defaultProps = {
  upVote: null,
  downVote: null,
  neutralVote: null,
};

export { commentItemShape };

export default CommentItem;
