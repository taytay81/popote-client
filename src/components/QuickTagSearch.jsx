import React, { Component } from "react";
import "./../styles/quick-tag-search.css";
import APIHandler from "../api/APIHandler";

export default class QuickTagSearch extends Component {
  state = {
    isToggle: false,
    tags: [],
    selectedTags: [],
    selected: "not-selected"
  };
  searchForRecipe = tag => {
    APIHandler.get("/tags/tagname/" + tag)
      .then(apiRes => {
        console.log(apiRes);
        this.props.history.push("/recipes", {
          recipes: apiRes.data
        });
      })
      .catch(apiErr => console.log(apiErr));
  };

  handleClick = (e, tagname) => {
    console.log("value button", tagname);
    console.log(e.currentTarget);
    this.searchForRecipe("vegan");
    

    //this.setState({ isToggle: !this.state.isToggle });
    /*if (this.state.isToggle) {
      e.target.className = "selected";
      //search in the db for recipes
      
      //redirect to the recipes page
    } /*else {
      e.target.className = "not-selected";
    }*/
  };

  componentDidMount() {
    APIHandler.get("/tags")
      .then(apiRes => {
        console.log(apiRes.data);
        this.setState({ tags: apiRes.data.apiRes });
      })
      .catch(apiErr => console.error(apiErr));
  }

  render() {
    return (
      <>
        <h2>Quick search</h2>
        <div className="tag-list">
          <ul>
            {this.state.tags.map((tag, i) => (
              <li
                className={this.state.selected}
                onClick={() => this.handleClick(tag.name)}
                key={i}
                value={tag.name}
              >
                {tag.name}
              </li>
            ))}
          </ul>
        </div>
        <button className="btn-tag">QUICK SEARCH</button>
      </>
    );
  }
}
