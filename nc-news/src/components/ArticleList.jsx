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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    if (topic) {
      api.fetchArticles(sort, order, topic).then((article) => {
        setArticleArr(article);
        setIsLoading(false);
      });
    } else {
      api.fetchArticles(sort, order).then((article) => {
        setArticleArr(article);
        setIsLoading(false);
      });
    }
  }, [sort, order, topic]);

  return (
    <section className="article-list">
      {isLoading ? (
        <div>
          <p> Loading articles... </p>
        </div>
      ) : (
        <div>
          <SortBy setSort={setSort} setOrder={setOrder} />
          <ul>
            {articleArr.map((article) => {
              return <ArticleCard article={article} />;
            })}
          </ul>
        </div>
      )}
    </section>
  );
}
