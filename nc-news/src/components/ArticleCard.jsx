import { useState, useEffect } from "react";
import * as api from "../utils/api";
import { Link } from "react-router-dom";
import ArticlePage from "./ArticlePage";

export default function ArticleCard({ article }) {
  const { title, author, topic, created_at, comment_count, votes, article_id } =
    article;
  const date = created_at.slice(0, 10);

  const [singleArticle, setSingleArticle] = useState();

  useEffect(() => {
    api.fetchSingleArticle(article_id).then((result) => {
      setSingleArticle(result);
    });
  }, []);

  return (
    <li className="article-card">
      <Link to={`/articles/${article_id}`}>
        <h3>{title}</h3>
      </Link>
      <ul>
        <li>Author: {author}</li>
        <li>Topic: {topic}</li>
        <li>Created at: {date}</li>
        <li>Comments: {comment_count}</li>
        <li>Votes: {votes}</li>
      </ul>
      <Link
        to={`/articles/${article_id}`}
        onClick={() => {
          <ArticlePage singleArticle={singleArticle} />;
        }}
      >
        <button>More Info</button>
      </Link>
    </li>
  );
}
