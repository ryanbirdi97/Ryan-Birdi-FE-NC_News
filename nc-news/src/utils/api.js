import axios from "axios";

const API = axios.create({
  baseURL: "https://secret-wildwood-67627.herokuapp.com/api/",
});

export const fetchArticles = () => {
  return API.get("/articles").then(({ data }) => {
    return data.articles;
  });
};

export const fetchArticleByTopic = (value) => {
  return API.get(`articles?topic=${value}`).then(({ data }) => {
    return data.articles;
  });
};

export const fetchSingleArticle = (id) => {
  return API.get(`articles/${id}`).then(({ data }) => {
    return data.article;
  });
};
