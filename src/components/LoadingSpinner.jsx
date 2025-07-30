import React from 'react';
import { STATUS_MESSAGES } from '../constants/index.js';

const LoadingSpinner = ({ message = STATUS_MESSAGES.LOADING, size = 'default' }) => {
  const sizeClasses = {
    small: 'h-6 w-6',
    default: 'h-12 w-12',
    large: 'h-16 w-16',
  };

  return (
    <div className="flex items-center justify-center">
      <div className="text-center">
        <div className={`animate-spin rounded-full border-b-2 border-blue-600 mx-auto mb-4 ${sizeClasses[size]}`}></div>
        {message && <p className="text-gray-600">{message}</p>}
      </div>
    </div>
  );
};

export default LoadingSpinner; 