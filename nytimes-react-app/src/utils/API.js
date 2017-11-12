import axios from "axios";
var authKey = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";
var queryURLBase = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" +
  authKey + "&q=";

export default {
  // Gets all news
  getNewsResults: function(searchTerm) {
    var searchResultsData = axios.get(`${queryURLBase}${searchTerm}`, {
      params: {}
    }).then(res => console.log(res.data.response.docs))
    .catch(err => console.log(err));
    return searchResultsData;
  },
  // Gets the book with the given id
  getNewsResult: function(id) {
    return axios.get("/api/news/" + id);
  },
  clearNewsResults: function(id) {
    return axios.delete("/api/clearnews");
  },
  // Deletes the book with the given id
  deleteNewsResult: function(id) {
    return axios.delete("/api/news/" + id);
  },
  // Saves a book to the database
  saveNewsResult: function(bookData) {
    return axios.post("/api/news", bookData);
  }
};
