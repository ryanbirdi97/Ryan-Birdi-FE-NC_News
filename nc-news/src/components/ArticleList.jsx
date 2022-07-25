import { useState, useEffect } from "react";
import * as api from "../utils/api";
import ArticleCard from "./ArticleCard";

export default function ArticleList() {
  const [articleArr, setArticleArr] = useState([]);

  useEffect(() => {
    api.fetchArticles().then((users) => {
      setArticleArr(users);
    });
  }, []);

  return (
    <ul>
      {articleArr.map((article) => {
        return <ArticleCard article={article} />;
      })}
    </ul>
  );
}
