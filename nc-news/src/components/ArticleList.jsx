import { useState, useEffect } from "react";
import * as api from "../utils/api";
import ArticleCard from "./ArticleCard";
import { useParams } from "react-router-dom";

export default function ArticleList() {
  const [articleArr, setArticleArr] = useState([]);
  const { topic } = useParams();

  useEffect(() => {
    if (topic) {
      api.fetchArticleByTopic(topic).then((article) => {
        setArticleArr(article);
      });
    } else {
      api.fetchArticles().then((article) => {
        setArticleArr(article);
      });
    }
  }, [topic]);

  return (
    <ul>
      {articleArr.map((article) => {
        return <ArticleCard article={article} />;
      })}
    </ul>
  );
}
