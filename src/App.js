import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header';
import ArticleList from './components/ArticleList';

const App = () => {
  const [articles, setArticles] = useState([]);
  const [category, setCategory] = useState('home');
  const [page, setPage] = useState(1);

  const fetchArticles = async (category, page) => {
    const response = await axios.get(
      `https://api.nytimes.com/svc/topstories/v2/${category}.json?api-key=qvArGVe6E0DikFb1aGkhZPOXPl5AUh4G`
    );
    setArticles(response.data.results);
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
