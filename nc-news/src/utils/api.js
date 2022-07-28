import axios from "axios";

const API = axios.create({
  baseURL: "https://secret-wildwood-67627.herokuapp.com/api/",
});

export const fetchArticles = (
  sort = "created_at",
  order = "desc",
  topic = undefined
) => {
  return API.get("/articles", {
    params: { sort_by: sort, order: order, topic: topic },
  }).then(({ data }) => {
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

export const patchUserVotes = (id, votes) => {
  return API.patch(`/articles/${id}`, { inc_votes: votes }).then(({ data }) => {
    return data.article;
  });
};

export const fetchArticleComments = (id) => {
  return API.get(`/articles/${id}/comments`).then(({ data }) => {
    return data.comments;
  });
};

export const postArticleComment = (id, newComment) => {
  console.log(newComment);
  return API.post(`/articles/${id}/comments`, newComment)
    .then(({ data }) => {
      return data.comment;
    })
    .catch((err) => {
      console.log(err);
    });
};
