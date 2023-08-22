import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function ThreadInput({ addThread }) {
  const [body, setBody] = useState('');
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');

  const addAThread = () => {
    if (body) {
      addThread(title, body, category);
      setBody('');
      setCategory('');
      setTitle('');
    }
  };

  const onChangeTitle = (e) => {
    if (e.target.value.length <= 50) {
      setTitle(e.target.value);
    }
  };

  const onChangeCategory = (e) => {
    setCategory(e.target.value);
  };

  return (
    <form onSubmit={addAThread} className="mb-6 mx-auto max-w-2xl">
      <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200">
        <label className="block text-md font-semibold leading-6 text-gray-900">
          Judul
        </label>
        <div className="mb-2.5">
          <input
            type="text"
            value={title}
            onChange={onChangeTitle}
            placeholder="Masukkan Judul"
            required
            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
        <label className="block text-md font-semibold leading-6 text-gray-900">
          Kategori
        </label>
        <div className="mb-2.5">
          <input
            type="text"
            value={category}
            onChange={onChangeCategory}
            placeholder="Masukkan Kategori"
            required
            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
        <label className="block text-md font-semibold leading-6 text-gray-900">
          Thread
        </label>
        <div className="mb-3">
          <ReactQuill placeholder="Tulis Thread..." theme="snow" value={body} onChange={setBody} />
        </div>
        <div className="mt-5 mb-5">
          <button
            type="submit"
            onClick={addAThread}
            className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-primary-200 hover:bg-primary-800"
          >
            Post Thread
          </button>
        </div>
      </div>
    </form>
  );
}

ThreadInput.propTypes = {
  addThread: PropTypes.func.isRequired,
};

export default ThreadInput;
