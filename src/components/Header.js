import React from 'react';

const categories = [
  'home',
  'world',
  'politics',
  'technology',
  'health',
  'science',
  'sports',
  'arts',
  'fashion',
];

const Header = ({ setCategory }) => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between">
        <h1 className="text-xl font-bold">NewsApp</h1>
        <nav>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className="px-3 py-2 mx-1 bg-blue-700 hover:bg-blue-800 rounded"
            >
              {cat}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
