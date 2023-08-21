import React, { useState } from 'react';
import PropTypes from 'prop-types';
// import { useParams } from 'react-router-dom';

function CommentInput({ addingComment }) {
  const [comment, setComment] = useState('');
  // const { id } = useParams();

  const addAComment = (e) => {
    e.stopPropagation();
    if (comment.trim()) {
      addingComment(comment);
      setComment('');
    }
  };

  const onChangeComment = (e) => {
    if (e.target.value.length <= 400) {
      setComment(e.target.value);
    }
  };

  return (
    <form className="mb-6 mx-auto max-w-2xl">
      <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200">
        <div className="mx-auto max-w-7xl px-0 py-6">
          <h1 className="text-lg font-bold text-gray-900">
            Tambahkan Komentar
          </h1>
        </div>
        {/* <label className="block text-md font-semibold leading-6 text-gray-900">
          Tambahkan Komentar
        </label> */}
        <div className="mb-3">
          <textarea
            rows="6"
            value={comment}
            onChange={onChangeComment}
            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="Tulis Komentar..."
            required
          />
        </div>
        <strong>
          {comment.length}
          /400
        </strong>
        <div className="mt-5 mb-5">
          <button
            type="submit"
            onClick={addAComment}
            className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-primary-200 hover:bg-primary-800"
          >
            Post Comment
          </button>
        </div>
      </div>
    </form>
  );
}

CommentInput.propTypes = {
  // id: PropTypes.string.isRequired,
  addingComment: PropTypes.func.isRequired,
};

export default CommentInput;
