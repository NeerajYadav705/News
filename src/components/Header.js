import React, { useState } from 'react';

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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-slate-900 text-white p-4 relative">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">News App</h1>
        <button 
          className="block md:hidden text-xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
        <nav className="hidden md:flex">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className="block md:inline-block px-3 py-2 mx-1 bg-slate-700 hover:bg-slate-800 rounded"
            >
              {cat}
            </button>
          ))}
        </nav>
      </div>
      <div className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out ${isMenuOpen ? 'opacity-50' : 'opacity-0 pointer-events-none'} md:hidden`} onClick={() => setIsMenuOpen(false)}></div>
      <div className={` fixed top-0 right-0 w-64 h-full bg-slate-800 p-4 transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out md:hidden`}>
        <button
          className="text-xl mb-4"
          onClick={() => setIsMenuOpen(false)}
        >
          ✕
        </button>
        <nav>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setCategory(cat);
                setIsMenuOpen(false);
              }}
              className="block px-3 py-2 mx-1 bg-slate-700 hover:bg-blue-800 rounded mb-2"
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
