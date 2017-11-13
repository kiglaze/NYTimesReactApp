import axios from "axios";

export default {
  searchNews: function(searchTerm, startYear = null, endYear = null) {
    var authKey = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";
    var queryUrlBase = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${authKey}`;
    var queryUrl = `${queryUrlBase}&q=${searchTerm}`;
      // If the user provides a startYear -- the startYear will be included in the queryURL
    if (startYear && parseInt(startYear)) {
      queryUrl = `${queryUrl}&begin_date=${startYear}0101`;
    }

    // If the user provides a startYear -- the endYear will be included in the queryURL
    if (endYear && parseInt(endYear)) {
      queryUrl += `${queryUrl}&end_date=${endYear}0101`;
    }

    return axios.get(queryUrl);
  },
  // Gets all news
  getNews: function(searchTerm) {
    return axios.get("/api/news");
  },
  // Gets the news with the given id
  getNewsResult: function(id) {
    return axios.get("/api/news/" + id);
  },
  // Deletes the news with the given id
  deleteNewsResult: function(id) {
    return axios.delete("/api/news/" + id);
  },
  // Saves a news to the database
  saveNewsResult: function(newsData) {
    return axios.post("/api/news", newsData);
  }
};
