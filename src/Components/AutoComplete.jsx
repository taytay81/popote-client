import React, { Component } from "react";
import APIHandler from "../api/APIHandler";
import "../styles/autocomplete.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

export default class AutoComplete extends Component {
  state = {
    activeSuggestion: 0,
    filteredSuggestions: [],
    showSuggestions: false,
    userInput: "",
    suggestions: "",
    ingredientstToSearch: [],
    recipesFound: []
  };
  static defaultProperty = {
    suggestions: []
  };

  onChange = e => {
    //const { suggestions } = this.props.suggestion;
    //console.log("suggestions ", suggestions);
    const userInput = e.currentTarget.value;

    const filteredSuggestions = this.props.suggestion.filter(
      suggestion =>
        suggestion.name.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );
    this.setState({
      activeSuggestion: 0,
      filteredSuggestions,
      showSuggestions: true,
      userInput: e.currentTarget.value
    });
  };

  onClick = e => {
    this.setState({
      activeSuggestion: 0,
      filteredSuggestions: [],
      showSuggestions: false,
      userInput: "" /*e.currentTarget.innerText*/
    });
    var copyingredientstToSearch = [...this.state.ingredientstToSearch];
    copyingredientstToSearch.push(e.currentTarget.innerText);
    this.setState({ ingredientstToSearch: copyingredientstToSearch });
  };

  onKeyDown = e => {
    const { activeSuggestion, filteredSuggestions } = this.state;

    if (e.keyCode === 13) {
      this.setState({
        activeSuggestion: 0,
        showSuggestions: false,
        userInput: filteredSuggestions[activeSuggestion]
      });
    } else if (e.keyCode === 38) {
      if (activeSuggestion === 0) {
        return;
      }

      this.setState({ activeSuggestion: activeSuggestion - 1 });
    } else if (e.keyCode === 40) {
      if (activeSuggestion - 1 === filteredSuggestions.length) {
        return;
      }

      this.setState({ activeSuggestion: activeSuggestion + 1 });
    }

    this.setState({
      activeSuggestion: 0,
      filteredSuggestions,
      showSuggestions: true,
      userInput: e.currentTarget.value
    });
  };

  removeFromListIngredient = e => {
    e.preventDefault();

    var copyingredientstToSearch = [...this.state.ingredientstToSearch];
    console.log(copyingredientstToSearch);

    const filtered = copyingredientstToSearch.filter(
      ingredient =>
        ingredient.toLowerCase() === e.currentTarget.name.toLowerCase()
    );
    console.log("tableau filtered", filtered);
    this.setState({ ingredientstToSearch: filtered });
  };

  searchForRecipe = e => {
    e.preventDefault();
    console.log("search for recipes");
    console.log(this.state.ingredientstToSearch);
    APIHandler.get("/recipes/ingredients", {
      ingredients: this.state.ingredientstToSearch
    })
      .then(apiRes => {
        console.log(apiRes);
        //this.setState({ : apiRes.data });
      })
      .catch(apiErr => console.log(apiErr));
    this.setState({ userInput: "" });
  };

  render() {
    console.log("input render ", this.state.userInput);
    console.log("ingredientosearch", this.state.ingredientstToSearch);
    let suggestionsListComponent;
    if (this.state.showSuggestions && this.state.userInput) {
      if (this.state.filteredSuggestions.length) {
        suggestionsListComponent = (
          <ul className="suggestions">
            {this.state.filteredSuggestions.map((suggestion, index) => {
              return (
                <li key={index} onClick={this.onClick}>
                  {suggestion.name}
                </li>
              );
            })}
          </ul>
        );
      } else {
        suggestionsListComponent = (
          <div className="no-suggestions">
            <em>No suggestions!</em>
          </div>
        );
      }
    } //suggestionsListComponent;
    return (
      <React.Fragment>
        <div className="auto-complete-container">
          <div className="input-and-btn">
            <input
              type="text"
              onChange={this.onChange}
              onKeyDown={this.onKeyDown}
              value={this.state.userInput}
            />
            <button className="btn-search" onClick={this.searchForRecipe}>
              SEARCH
            </button>
          </div>

          {suggestionsListComponent}
          <div>
            <ul>
              {this.state.ingredientstToSearch.map((ingredient, i) => (
                <li key={i}>
                  {ingredient}
                  <button
                    onClick={this.removeFromListIngredient}
                    name={ingredient}
                  >
                    delete
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
