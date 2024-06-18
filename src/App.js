import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header';
import ArticleList from './components/ArticleList';

const App = () => {
  const [articles, setArticles] = useState([]);
  const [category, setCategory] = useState('general');
  const [page, setPage] = useState(1);

  const fetchArticles = async (category, page) => {
    const response = await axios.get(
      `https://newsapi.org/v2/top-headlines?category=${category}&page=${page}&apiKey=c98070fb5b7949f982d5e3b9ed070f37`
    );
    setArticles(response.data.articles);
  };

  useEffect(() => {
    fetchArticles(category, page);
  }, [category, page]);

  return (
    <div className="min-h-screen bg-gray-100">
      <Header setCategory={setCategory} />
      <ArticleList articles={articles} setPage={setPage} />
    </div>
  );
};

export default App;
