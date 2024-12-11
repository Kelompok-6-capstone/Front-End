import React from 'react';

const LoadingIndicator = () => {
  return (
    <div className="flex justify-start items-end gap-2">
      <div className="flex items-center gap-2 shadow px-4 py-2 rounded-lg bg-cyan-50 text-cyan-900">
        <span className="animate-pulse">Bot sedang mengetik</span>
        <div className="flex gap-1">
          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce delay-150"></div>
          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce delay-300"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingIndicator;
