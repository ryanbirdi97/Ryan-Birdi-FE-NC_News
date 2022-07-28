import { useState } from "react";
import { useParams } from "react-router-dom";
import * as api from "../utils/api";

export default function AddArticleComment({ setComments }) {
  const [username, setUsername] = useState("");
  const [comment, setComment] = useState("");
  const [message, setMessage] = useState(null);
  const { article_id } = useParams();

  const handleSubmit = (e) => {
    if (username === "" || comment === "") {
      e.preventDefault();
      setMessage("Make sure to add a comment and username");
    } else {
      e.preventDefault();
      api
        .postArticleComment(article_id, { username: username, body: comment })
        .then((returnedComment) => {
          setComment("");
          setUsername("");
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
        <label htmlFor="username">Existing Username: </label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        ></input>
        <input className="comment-submit" type="submit" value="Submit"></input>
        {message ? <p>{message}</p> : null}
      </form>
    </section>
  );
}
