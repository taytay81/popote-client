import React, { Component } from "react";
import NavBar from "./../components/NavBar";
import "../styles/home.css";
import QuickTagSearch from "./../components/QuickTagSearch";
import AutoComplete from "../components/AutoComplete";
import APIHandler from "../api/APIHandler";

export default class Home extends Component {
  state = {
    ingredientsInDb: "",
    recipesFound:[]
  };

  componentDidMount() {
    APIHandler.get("/ingredients")
      .then(apiRes => {
        console.log(apiRes);
        this.setState({ ingredientsInDb: apiRes.data });
      })
      .catch(apiErr => console.log(apiErr));
  }
  render() {
    console.log(this.state.ingredientsInDb);
    return (
      <div className="home-container">
        <NavBar />
        
        <div className="container">
          <div className="marketing">
            <h2>Tell us what you have in your fridge</h2>
            <h2 id="decale">we will find something to eat for you...</h2>
          </div>
          <div className="arrow-down">
            <a href="#">
              <span className="arrow">v</span>
            </a>
          </div>
        </div>

        <div className="home-second-page">
          <div className="container">
            <div className="marketing-question">
              <span>Which ingredient do you have ?</span>
            </div>
            <form>
              <div className="search-bar">
                <AutoComplete
                  suggestion={this.state.ingredientsInDb}
                ></AutoComplete>

                <div className="more-filter">
                  <a href="#">
                    <span id="style-span">more filters</span>
                  </a>
                </div>
              </div>
            </form>

            <div className="filter-list">{/* <FilterList/> */}</div>
            <div className="quick-tag-search">
              <QuickTagSearch />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
