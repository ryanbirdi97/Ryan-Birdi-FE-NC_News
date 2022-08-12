import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <Link to="/articles">All Articles</Link>
      <Link to="/topic/coding">Coding </Link>
      <Link to="/topic/football">Football</Link>
      <Link to="/topic/cooking">Cooking</Link>
    </nav>
  );
}
