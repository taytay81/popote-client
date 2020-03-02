import React, { Component } from 'react'
import './../styles/quick-tag-search.css';
import APIHandler from "../api/APIHandler";

export default class QuickTagSearch extends Component {
  state = {
    isToggle: false,
    tags: [],
    selectedTags: [],
    selected: "not-selected"
  };

  handleClick = e => {
    console.log(e.target.value);
    this.setState({ isToggle: !this.state.isToggle });
    if (this.state.isToggle) {
      e.target.className = "selected";
    } else {
      e.target.className = "not-selected";
    }
  };

  componentDidMount() {
    APIHandler.get("/tags")
      .then(apiRes => {
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
                onClick={this.handleClick}
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
