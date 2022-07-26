import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as api from "../utils/api";

export default function ArticlePage() {
  const { article_id } = useParams();

  const [singleArticle, setSingleArticle] = useState([]);

  useEffect(() => {
    api.fetchSingleArticle(article_id).then((result) => {
      setSingleArticle(result);
    });
  }, [article_id]);

  const { title, topic, author, body, created_at, votes } = singleArticle;

  console.log(singleArticle);
  return (
    <div className="single-article">
      <h3>{title}</h3>
      <p>Author: {author}</p>
      <p>Topic: {topic}</p>
      <p>{body}</p>
      <p>Created: {created_at}</p>
      <p>Votes: {votes}</p>
    </div>
  );
}
