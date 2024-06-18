import React from 'react';

const Pagination = ({ setPage }) => {
  return (
    <div className="flex justify-center mt-4">
      <button
        onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
        className="px-4 py-2 bg-blue-600 text-white rounded-l hover:bg-blue-700"
      >
        Previous
      </button>
      <button
        onClick={() => setPage((prev) => prev + 1)}
        className="px-4 py-2 bg-blue-600 text-white rounded-r hover:bg-blue-700"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
