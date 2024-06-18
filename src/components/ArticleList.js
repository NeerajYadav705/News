import React from 'react';
import ArticleCard from './ArticleCard';
import Pagination from './Pagination';

const ArticleList = ({ articles, setPage }) => {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {articles.map((article, index) => (
          <ArticleCard key={index} article={article} />
        ))}
      </div>
      <Pagination setPage={setPage} />
    </div>
  );
};

export default ArticleList;
