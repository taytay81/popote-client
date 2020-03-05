import React, { Component } from "react";
import "../styles/recipeCardXs.css";
import { Link } from "react-router-dom";
export default class RecipeCardXs extends Component {
  render() {
    return (
      <Link to={`/recipe/${this.props.id}`}>
        <div className="recipe-cardXs">
          <img src={this.props.image} alt={this.props.image} />
          <h3>{this.props.title}</h3>
        </div>
      </Link>
    );
  }
}
