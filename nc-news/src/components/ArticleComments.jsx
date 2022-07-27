import * as api from "../utils/api";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function ArticleComments() {
  const [comments, setComments] = useState([]);
  const { article_id } = useParams();

  useEffect(() => {
    api.fetchArticleComments(article_id).then((response) => {
      setComments(response);
    });
  });

  return comments.map(({ body, author, created_at }) => {
    return (
      <div className="comment">
        <p>{body}</p>
        <p>{author}</p>
        <p>{created_at.slice(0, 10)}</p>
      </div>
    );
  });
}
