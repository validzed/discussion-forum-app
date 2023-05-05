import React from 'react';
import LoadingBar from 'react-redux-loading-bar';

function Loading() {
  return (
    <div className="sticky top-0 z-50 h-1">
      <LoadingBar className="bg-blue-700 h-1" />
    </div>
  );
}

export default Loading;
