import axios from "axios";

export default class Client {
  constructor(host = "http://localhost:5000") {
    this.api = axios.create({
      baseURL: host,
    });
  }

  createArticle(newArticle) {
    // this.api.post(`/articles`, newArticle);
  }

  async getArticles() {
    const resp = await this.api.get(`/articles`);
    if (!resp || resp.status !== 200) return [];

    return resp.data;
  }

  updateArticle(id, newArticle) {
    // this.api.put(`/articles/${id}`, newArticle);
  }

  deleteArticle(id) {
    // this.api.delete(`/articles/${id}`);
  }

  async getArticleById(id) {
    const resp = await this.api.get(`/articles/${id}`);
    if (!resp) return null;
    return resp.data;
  }
}
