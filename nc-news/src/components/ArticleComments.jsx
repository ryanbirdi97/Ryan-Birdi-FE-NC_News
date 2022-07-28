import * as api from "../utils/api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AddArticleComment from "./AddArticleComment";

export default function ArticleComments() {
  const { article_id } = useParams();

  const [comments, setComments] = useState([]);
  const [delMessage, setDelMessage] = useState(null);

  useEffect(() => {
    api.fetchArticleComments(article_id).then((response) => {
      setComments(response);
    });
  }, [article_id]);

  const handleDelete = (event) => {
    event.preventDefault();
    const id = event.target.value;

    setComments(() => {
      const updatedComments = comments.filter((comment) => {
        return comment.comment_id !== parseInt(id);
      });
      return updatedComments;
    });

    api.deleteComment(id).then(() => {
      setDelMessage("Comment Deleted");
    });
  };

  return (
    <section>
      <AddArticleComment setComments={setComments} />
      <h3>Comments</h3>
      {delMessage ? <p>{delMessage}</p> : null}
      {comments.map(({ body, author, comment_id }) => {
        return (
          <div className="comment">
            <p>{body}</p>
            <p>{author}</p>
            {author === "cooljmessy" ? (
              <button value={comment_id} onClick={handleDelete}>
                Delete
              </button>
            ) : (
              <></>
            )}
          </div>
        );
      })}
    </section>
  );
}
