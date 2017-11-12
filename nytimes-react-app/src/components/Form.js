import React, { Component } from "react";
import API from "../utils/API";

class Form extends Component {
  // Setting the initial values of this.state.username and this.state.password
  state = {
    searchTerm: "",
    startYear: "",
    endYear: "",
    newsResults: []
  };

  // handle any changes to the input fields
  handleInputChange = event => {
    // Pull the name and value properties off of the event.target (the element which triggered the event)
    const { name, value } = event.target;
    // alert("name: " + name + " value: " + value);

    // // Set the state for the appropriate input field
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, prevent the default event and alert the username and password
  handleFormSubmit = event => {
    event.preventDefault();
    if(this.state.searchTerm) {
      API.getNewsResults(this.state.searchTerm);
    }
    this.setState({ searchTerm: "", startYear: "", endYear: "" });
  };

  render() {
    return (
      <form>
        <div className="form-group">
          <label htmlFor="search">Search Term:</label>
          <input 
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
            <select className="form-control" id="num-records-select" defaultValue="5">
              <option value="1">1</option>
              <option value="5">5</option>
              <option value="10">10</option>
            </select>
          </div>
        <div className="form-group">
          <label htmlFor="startYear">Start Year (Optional):</label>
          <input
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
          <input
            type="text"
            placeholder="End Year"
            className="form-control"
            name="endYear"
            id="endYear"
            value={this.state.endYear}
            onChange={this.handleInputChange}
          />
        </div>
        <button type="submit" className="btn btn-default" id="run-search" onClick={this.handleFormSubmit}><i className="fa fa-search"></i> Search</button>
        <button type="button" className="btn btn-default" id="clear-all"><i className="fa fa-trash"></i> Clear Results</button>
      </form>
    );
  }
}

export default Form;
