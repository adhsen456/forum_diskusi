import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { toggleDownvoteDetailThread, toggleNeutralvoteDetailThread, toggleUpvoteDetailThread } from '../states/detailThread/action';
import ThreadDetail from '../components/ThreadDetail';
import CommentInput from '../components/CommentInput';
import CommentsList from '../components/CommentsList';
import {
  addComment, toggleDownvoteComment, toggleNeutralvoteComment, toggleUpvoteComment,
} from '../states/comment/action';
import { populateDetailAndComments } from '../states/shared/action';

function DetailPage() {
  const { id } = useParams();

  const detailThread = useSelector((states) => states.detailThread);
  const comments = useSelector((states) => states.comments);
  const authUser = useSelector((states) => states.authUser);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(populateDetailAndComments(id));
  }, [id, dispatch]);

  const onUpVoteDetailThread = () => dispatch(toggleUpvoteDetailThread(id));

  const onNeutralVoteDetailThread = () => dispatch(toggleNeutralvoteDetailThread(id));

  const onDownVoteDetailThread = () => dispatch(toggleDownvoteDetailThread(id));

  const onUpVoteComment = (commentId) => dispatch(toggleUpvoteComment(id, commentId));

  const onNeutralVoteComment = (commentId) => dispatch(toggleNeutralvoteComment(id, commentId));

  const onDownVoteComment = (commentId) => dispatch(toggleDownvoteComment(id, commentId));

  const onAddComment = (content) => dispatch(addComment(id, { content }));

  return (
    <div className="min-h-full">
      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Thread Detail
          </h1>
        </div>
      </header>
      <main className="bg-slate-300">
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          <ThreadDetail
            thread={detailThread}
            authUser={authUser.id}
            upVote={onUpVoteDetailThread}
            neutralVote={onNeutralVoteDetailThread}
            downVote={onDownVoteDetailThread}
          />
          <CommentInput addingComment={onAddComment} />
          <CommentsList
            comments={comments}
            authUser={authUser.id}
            downVote={onDownVoteComment}
            upVote={onUpVoteComment}
            neutralVote={onNeutralVoteComment}
          />
        </div>
      </main>
    </div>
  );
}

export default DetailPage;
