import React from 'react';
import LoadingBar from 'react-redux-loading-bar';

function Loading() {
  return (
    <LoadingBar updateTime={200} maxProgress={95} progressIncrease={10} />
  );
}

export default Loading;
