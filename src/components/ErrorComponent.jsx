// src/components/ErrorComponent.js
import React from 'react';

const ErrorComponent = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-red-600">Oops!</h1>
        <p className="text-xl mt-4">Something went wrong.</p>
        <p className="mt-2">The page you are looking for does not exist.</p>
      </div>
    </div>
  );
};

export default ErrorComponent;
