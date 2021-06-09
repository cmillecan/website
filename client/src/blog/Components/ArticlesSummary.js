import React from "react";
import "./ArticlesSummary.css";
import { contentToMinutes } from "../../helpers";
import { Link } from "react-router-dom";
import { format } from "date-fns";

// TODO: Connie - order posts by date!
const Summary = ({ id, description, title, date, content, imageURL }) => {
  const newDate = new Date(date);
  const formattedDate = format(newDate, "MMMM d, yyyy");
  console.log("imageURL is: ", imageURL);
  return (
    <Link className="post-item" to={`/blog/${id}`}>
      <div className="post-item-image">
        <img className="blog-post-img" src={imageURL} alt="image" />
      </div>
      <div className="post-item-date">
        <p>
          {formattedDate} • {contentToMinutes(content)} min read
        </p>
      </div>
      <div className="post-item-title">
        <h2>{title}</h2>
      </div>
      <div className="post-item-description">
        <p>{description}</p>
        <div className="post-item-divider" />
      </div>
    </Link>
  );
};

const ArticlesSummary = ({ articles }) => {
  if (!articles) return null;
  return (
    <div className="post-item-container">
      <div className="posts-row">
        {articles.map((a, i) => (
          <Summary
            key={`${a.name}-${i}`}
            description={a.description}
            title={a.title}
            date={a.date}
            content={a.content}
            id={a._id}
            imageURL={a.imageURL}
          />
        ))}
      </div>
    </div>
  );
};

export default ArticlesSummary;
