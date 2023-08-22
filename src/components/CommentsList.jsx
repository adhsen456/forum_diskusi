import React from 'react';
import PropTypes from 'prop-types';
import CommentItem, { commentItemShape } from './CommentItem';

function CommentsList({
  comments, authUser, downVote, upVote, neutralVote,
}) {
  return (
    <section className="max-w-2xl mx-auto py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200">
      <h2 className="text-lg lg:text-2xl font-bold text-gray-900">
        Comments (
        {comments.length}
        )
      </h2>
      { comments.length > 0
        ? comments.map((comment) => (
          <CommentItem
            key={comment.id}
            comment={comment}
            authUser={authUser}
            upVote={upVote}
            downVote={downVote}
            neutralVote={neutralVote}
          />
        ))
        : (
          <article
            className="group block my-5 rounded-lg p-6 bg-slate-200 ring-1 ring-slate-900/5 shadow-lg space-y-3"
          >
            <p className="items-center text-gray-500">
              Tidak Ada Komentar
            </p>
          </article>
        )}
    </section>
  );
}

CommentsList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape(commentItemShape)).isRequired,
  authUser: PropTypes.string.isRequired,
  upVote: PropTypes.func.isRequired,
  downVote: PropTypes.func.isRequired,
  neutralVote: PropTypes.func.isRequired,
};

export default CommentsList;
