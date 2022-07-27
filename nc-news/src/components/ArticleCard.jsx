import { Link } from "react-router-dom";
import ArticlePage from "./ArticlePage";

export default function ArticleCard({ article }) {
  const { title, author, topic, created_at, comment_count, votes, article_id } =
    article;

  return (
    <li className="article-card">
      <h3>{title}</h3>
      <ul>
        <li>Author: {author}</li>
        <li>Topic: {topic}</li>
        <li>Created at: {created_at.slice(0, 10)}</li>
        <li>Comments: {comment_count}</li>
        <li>Votes: {votes}</li>
      </ul>
      <Link
        to={`/articles/${article_id}`}
        onClick={() => {
          <ArticlePage />;
        }}
      >
        <button>More Info</button>
      </Link>
    </li>
  );
}
