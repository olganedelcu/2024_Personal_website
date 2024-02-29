import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Blog.css';

interface Article {
  title: string;
  link: string;
  description: string;
  thumbnail: string;
}

const Blog: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get('https://api.rss2json.com/v1/api.json', {
          params: {
            rss_url: 'https://medium.com/feed/@olganedelcuam'
          }
        });
        setArticles(response.data.items);
      } catch (error) {
        console.error('Error fetching articles:', error);
      }
    };

    fetchArticles();
  }, []);

  return (
      <div className="medium-card">
        <h2>Blog</h2>
        <div className="articles">
          {articles.map((article: Article, index: number) => (
              <div key={index} className="article">
                <a href={article.link} target="_blank" rel="noopener noreferrer">
                  <img src={article.thumbnail} />
                  <h3>{article.title}</h3>
                </a>
              </div>
          ))}
        </div>
      </div>
  );
};

export default Blog;