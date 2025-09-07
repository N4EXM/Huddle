import React from 'react';

const ProgressBar = ({ progress }) => {
  return (
    <div className="w-full bg-thirdBackground rounded-xs h-2.5">
      <div 
        className="bg-primary h-2.5 rounded-xs" 
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;