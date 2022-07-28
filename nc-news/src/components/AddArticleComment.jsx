import { useState } from "react";
import { useParams } from "react-router-dom";
import * as api from "../utils/api";

export default function AddArticleComment({ setComments }) {
  const [comment, setComment] = useState("");
  const [message, setMessage] = useState(null);
  const { article_id } = useParams();

  const handleSubmit = (e) => {
    if (comment === "") {
      e.preventDefault();
      setMessage("Make sure to add a comment");
    } else {
      e.preventDefault();
      api
        .postArticleComment(article_id, {
          username: "cooljmessy",
          body: comment,
        })
        .then((returnedComment) => {
          setComment("");
          setMessage("Comment added!");
          setComments((currentComments) => {
            return [returnedComment, ...currentComments];
          });
        })
        .catch((err) => {
          console.log(err);
          setMessage("Error! try again.");
        });
    }
  };

  return (
    <section className="submit-comment">
      <form className="comment-form" onSubmit={handleSubmit}>
        <label htmlFor="user-comment">Comment: </label>
        <input
          type="text"
          id="user-comment"
          className="comment-box"
          value={comment}
          onChange={(e) => {
            setComment(e.target.value);
          }}
        ></input>
        <p>user: cooljmessy</p>
        <input className="comment-submit" type="submit" value="Submit"></input>
        {message ? <p>{message}</p> : null}
      </form>
    </section>
  );
}
