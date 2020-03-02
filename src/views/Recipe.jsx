import React, { Component } from "react";
import NavBar from "../components/NavBar";
import RecipeCardXL from "../components/RecipeCardXL";
import APIHandler from "../api/APIHandler";

export default class Recipe extends Component {
  state = {
    recipe: ""
  };
  componentDidMount() {
    APIHandler.get(`/recipe/${this.props.match.params.id}`)
      .then(apiRes => {
        console.log(apiRes.data);
        this.setState({ recipe: apiRes.data });
      })
      .catch(apiErr => console.log(apiErr));
  }
  render() {
    return (
      <div>
        <NavBar />
        <RecipeCardXL recipe={this.state.recipe}></RecipeCardXL>
      </div>
    );
  }
}
