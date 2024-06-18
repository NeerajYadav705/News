import React from 'react';

const ArticleCard = ({ article }) => {
  return (
    <div className="bg-white p-4 rounded shadow hover:shadow-lg transition-shadow duration-300">
      <img src={article.urlToImage} alt={article.title} className="w-full h-48 object-cover rounded mb-4" />
      <h2 className="text-xl font-bold mb-2">{article.title}</h2>
      <p className="text-gray-700 mb-4">{article.description}</p>
      <a href={article.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
        Read more
      </a>
    </div>
  );
};

export default ArticleCard;
