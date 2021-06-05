import React, { useEffect, useState } from "react";
import "./Blog.css";
import Client from "../../client";
import ArticlesSummary from "./ArticlesSummary";

const Blog = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    const client = new Client();
    client.getArticles().then((articles) => {
      setArticles(articles);
    });
  }, []);

  return (
    <div className="blog-container">
      <ArticlesSummary articles={articles} />
    </div>
  );
};

export default Blog;
