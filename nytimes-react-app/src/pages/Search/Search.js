import React, { Component } from "react";
import { Link } from "react-router-dom";
import Form from "../../components/Form";

class Search extends Component {

  render() {
    return (
      <div class="container">

            <div class="jumbotron">
                  <h1 class="text-center"><strong><i class="fa fa-newspaper-o"></i> New York Times Search</strong></h1>
            </div>

            <div class="row">
                  <div class="col-sm-12">
                        <br/>
                        <div class="panel panel-primary">
                              <div class="panel-heading">
                                    <h3 class="panel-title"><strong><i class="fa  fa-list-alt"></i>   Search Parameters</strong></h3>
                              </div>
                              <div class="panel-body">
                                    <Form/>
                              </div>
                        </div>
                  </div>
            </div>

            <div class="row">
                  <div class="col-sm-12">
                        <br/>

                        <div class="panel panel-primary">

                              <div class="panel-heading">
                                    <h3 class="panel-title"><strong><i class="fa fa-table"></i>   Top Articles</strong></h3>
                              </div>

                              <div class="panel-body" id="well-section">
                              </div>
                        </div>
                  </div>
            </div>

            <div class="row">
                  <div class="col-sm-12">

                        <hr/>
                        <h5 class="text-center"><small>Made by Ahmed with lots and lots of <i class="fa fa-heart"></i></small></h5>

                  </div>
            </div>

      </div>
    );
  }
}

export default Search;
