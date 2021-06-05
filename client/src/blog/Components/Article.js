import React, { useEffect, useState } from "react";
import "./Article.css";
import { contentToMinutes } from "../../helpers";
import ReactMarkdown from "react-markdown";
import Client from "../../client";
import { format } from "date-fns";

const Article = (props) => {
  const articleId = props.match.params.articleId;
  const [article, setArticle] = useState(null);

  useEffect(() => {
    const client = new Client();
    client.getArticleById(articleId).then((a) => {
      setArticle(a);
    });
  }, [articleId]);

  if (!article) return <div>Loading...</div>;

  const { title, date, content, imageURL } = article;
  const newDate = new Date(date);
  const formattedDate = format(newDate, "MMMM d, yyyy");
  return (
    <div className="article-container">
      <div className="article-content">
        <div className="article-title">
          <h1>{title}</h1>
        </div>
        <div className="article-date">
          <p className="date">
            {formattedDate} • {contentToMinutes(content)} min read
          </p>
        </div>
        <div className="article-image">
          <img className="article-post-img" src={imageURL} alt="image" />
        </div>
        <div className="article-content">
          <ReactMarkdown children={content} />
        </div>
      </div>
    </div>
  );
};

export default Article;
