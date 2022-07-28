import { useState, useEffect } from "react";
import * as api from "../utils/api";
import ArticleCard from "./ArticleCard";
import { useParams } from "react-router-dom";
import { SortBy } from "./SortBy";

export default function ArticleList() {
  const [articleArr, setArticleArr] = useState([]);
  const { topic } = useParams();
  const [sort, setSort] = useState();
  const [order, setOrder] = useState();

  useEffect(() => {
    if (topic) {
      api.fetchArticles(sort, order, topic).then((article) => {
        setArticleArr(article);
      });
    } else {
      api.fetchArticles(sort, order).then((article) => {
        setArticleArr(article);
      });
    }
  }, [sort, order, topic]);

  return (
    <section className="article-list">
      <SortBy setSort={setSort} setOrder={setOrder} />
      <ul>
        {articleArr.map((article) => {
          return <ArticleCard article={article} />;
        })}
      </ul>
    </section>
  );
}
