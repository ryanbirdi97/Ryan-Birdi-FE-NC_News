import axios from "axios";

const API = axios.create({
  baseURL: "https://secret-wildwood-67627.herokuapp.com/api/",
});

export const fetchArticles = () => {
  return API.get("/articles").then(({ data }) => {
    return data.articles;
  });
};
