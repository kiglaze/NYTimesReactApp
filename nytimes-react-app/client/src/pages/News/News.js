import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import DeleteBtn from "../../components/DeleteBtn";
import SaveBtn from "../../components/SaveBtn";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, FormBtn } from "../../components/Form";

class News extends Component {
  // Setting our component's initial state
  state = {
    news: [],
    savedNews: [],
    searchTerm: "",
    startYear: "",
    endYear: "",
    numberRecords: 5
  };

  // When the component mounts, load all news and save them to this.state.news
  componentDidMount() {
    this.loadNews();
  }

  // Loads all news  and sets them to this.state.news
  loadNews = () => {
    API.getNews()
      .then(res => {
        this.setState({ savedNews: res.data, searchTerm: "", startYear: "", endYear: "" })
      })
      .catch(err => console.log(err));
  };

  // Deletes a news result from the database with a given id, then reloads news from the db
  deleteNews = id => {
    API.deleteNewsResult(id)
      .then(res => this.loadNews())
      .catch(err => console.log(err));
  };

  saveNewsResult = (newsData) => {
    var newsTitle = (typeof newsData.headline.main !== "undefined") ? newsData.headline.main : "";
    var newsSnippet = (typeof newsData.snippet !== "undefined") ? newsData.snippet : "";
    API.saveNewsResult({title: newsTitle, snippet: newsSnippet})
      .then(res => this.loadNews())
      .catch(err => console.log(err));
  };

  // Handles updating component state when the user types into the input field
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, use the API.saveNews method to save the news data
  // Then reload news from the database
  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.searchTerm) {
      // alert(this.state.searchTerm);
      API.searchNews(this.state.searchTerm, this.state.startYear, this.state.endYear)
        .then(res => {
          var responseDataArray = (typeof res.data.response.docs !== "undefined") ? res.data.response.docs : [];
          if(responseDataArray && this.state.numberRecords && parseInt(this.state.numberRecords)) {
            responseDataArray = responseDataArray.slice(0, this.state.numberRecords);
          }
          this.setState({ news: responseDataArray, searchTerm: "", startYear: "", endYear: "" })
        })
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>NYTimes News Search</h1>
            </Jumbotron>
      <form>
        <div className="form-group">
          <label htmlFor="search">Search Term:</label>
          <Input 
            type="text" 
            placeholder="Search Term"
            className="form-control" 
            name="searchTerm"
            id="searchTerm"
            value={this.state.searchTerm}
            onChange={this.handleInputChange}
          />
        </div>
          <div className="form-group">
            <label htmlFor="pwd">Number of Records to Retrieve:</label>
            <select className="form-control" name="numberRecords" id="numberRecords" defaultValue="5" onChange={this.handleInputChange}>
              <option value="1">1</option>
              <option value="5">5</option>
              <option value="10">10</option>
            </select>
          </div>
        <div className="form-group">
          <label htmlFor="startYear">Start Year (Optional):</label>
          <Input
            type="text"
            placeholder="Start Year"
            className="form-control"
            name="startYear"
            id="startYear"
            value={this.state.startYear}
            onChange={this.handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="endYear">End Year (Optional):</label>
          <Input
            type="text"
            placeholder="End Year"
            className="form-control"
            name="endYear"
            id="endYear"
            value={this.state.endYear}
            onChange={this.handleInputChange}
          />
        </div>
      <FormBtn
        disabled={!(this.state.searchTerm)}
        onClick={this.handleFormSubmit}
      >
      Submit
      </FormBtn>      
      </form>
          </Col>
          <Col size="md-6">
            <Jumbotron>
              <h1>News On My List</h1>
            </Jumbotron>
            {this.state.news.length ? (
              <List>
                {
                  this.state.news.map(news => {
                  return (
                    <ListItem key={news._id}>
                      <a href={"/news/" + news._id}>
                        <h4>
                          {news.headline.main}
                        </h4>
                        <p>{news.snippet}</p>
                      </a>
                      <SaveBtn onClick={() => this.saveNewsResult(news)} />
                    </ListItem>
                  );
                })
              }
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
<Jumbotron>
              <h1>Saved News</h1>
            </Jumbotron>
            {this.state.savedNews.length ? (
              <List>
                {
                  this.state.savedNews.map(savedNews => {
                  return (
                    <ListItem key={savedNews._id}>
                      <a href={"/savedNews/" + savedNews._id}>
                        <h4>
                          {savedNews.title}
                        </h4>
                        <p>{savedNews.snippet}</p>
                      </a>
                      <DeleteBtn onClick={() => this.deleteNews(savedNews._id)} />
                    </ListItem>
                  );
                })
              }
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default News;
