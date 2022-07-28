import * as api from "../utils/api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AddArticleComment from "./AddArticleComment";

export default function ArticleComments() {
  const { article_id } = useParams();

  const [comments, setComments] = useState([]);

  useEffect(() => {
    api.fetchArticleComments(article_id).then((response) => {
      setComments(response);
    });
  }, [article_id]);

  return (
    <section>
      <AddArticleComment setComments={setComments} />
      <h3>Comments</h3>
      {comments.map(({ body, author }) => {
        return (
          <div className="comment">
            <p>{body}</p>
            <p>{author}</p>
          </div>
        );
      })}
    </section>
  );
}
