import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function CommentInput({ addingComment }) {
  const [comment, setComment] = useState('');

  const addAComment = () => {
    if (comment.trim()) {
      addingComment(comment);
      setComment('');
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
        <div className="mb-3">
          <ReactQuill placeholder="Masukkan komentar" theme="snow" value={comment} onChange={setComment} />
        </div>
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
  addingComment: PropTypes.func.isRequired,
};

export default CommentInput;
