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

  const [newVote, setNewVote] = useState(0);
  const [err, setErr] = useState(null);

  const handleClick = (article_id, numberOfVotes) => {
    setNewVote((currentVote) => {
      return (currentVote += numberOfVotes);
    });

    api.patchUserVotes(article_id, numberOfVotes).catch((err) => {
      console.log(err);
      setErr("Error! try again.");
    });
  };

  return (
    <div className="single-article">
      <h3>{title}</h3>
      <p>Author: {author}</p>
      <p>Topic: {topic}</p>
      <p>{body}</p>
      <p>Created: {created_at}</p>
      <section className="votes">
        <button
          disabled={newVote <= -1}
          onClick={() => handleClick(article_id, -1)}
        >
          -
        </button>
        <p>Votes: {votes + newVote}</p>
        <button
          disabled={newVote >= 1}
          onClick={() => handleClick(article_id, 1)}
        >
          +
        </button>
      </section>
      {err ? <p>{err}</p> : null}
    </div>
  );
}
