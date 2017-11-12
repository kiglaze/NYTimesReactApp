import React, { Component } from "react";
import Form from "../../components/Form";

class Search extends Component {

  render() {
    return (
      <div className="container">

            <div className="jumbotron">
                  <h1 className="text-center"><strong><i className="fa fa-newspaper-o"></i> New York Times Search</strong></h1>
            </div>

            <div className="row">
                  <div className="col-sm-12">
                        <br/>
                        <div className="panel panel-primary">
                              <div className="panel-heading">
                                    <h3 className="panel-title"><strong><i className="fa  fa-list-alt"></i>   Search Parameters</strong></h3>
                              </div>
                              <div className="panel-body">
                                    <Form/>
                              </div>
                        </div>
                  </div>
            </div>

            <div className="row">
                  <div className="col-sm-12">
                        <br/>

                        <div className="panel panel-primary">

                              <div className="panel-heading">
                                    <h3 className="panel-title"><strong><i className="fa fa-table"></i>   Top Articles</strong></h3>
                              </div>

                              <div className="panel-body" id="well-section">
                              </div>
                        </div>
                  </div>
            </div>

            <div className="row">
                  <div className="col-sm-12">

                        <hr/>
                        <h5 className="text-center"><small>Made by Ahmed with lots and lots of <i className="fa fa-heart"></i></small></h5>

                  </div>
            </div>

      </div>
    );
  }
}

export default Search;
