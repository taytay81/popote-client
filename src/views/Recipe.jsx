import React, { Component } from "react";
import NavBar from "../components/NavBar";
import RecipeCardXL from "../components/RecipeCardXL";
import APIHandler from "../api/APIHandler";
import ReviewForm from "../components/ReviewForm";
import Reviews from "../components/Reviews";

export default class Recipe extends Component {
  state = {
    recipe: "",
    reviews: []
  };

  componentDidMount() {
    APIHandler.get(`/recipe/${this.props.match.params.id}`)
      .then(apiRes => {
        this.setState({ recipe: apiRes.data });
      })
      .catch(apiErr => console.log(apiErr));

    APIHandler.get(`/reviews/${this.props.match.params.id}`)
      .then(apiRes => {
        this.setState({ reviews: apiRes.data.dbRes });
      })
      .catch(apiErr => console.log(apiErr));
  }

  addNewReview = review => {
    const copy = [...this.state.reviews];
    copy.push(review);
    this.setState({ reviews: copy });
  };

  render() {
    return (
      <div>
        <NavBar />
        <RecipeCardXL recipe={this.state.recipe} />
        <ReviewForm
          clbk={this.addNewReview}
          ratingCount={this.state.recipe.ratingCount}
          recipeRating={this.state.recipe.rating}
          recipeId={this.props.match.params.id}
        />
        <Reviews reviews={this.state.reviews} />
      </div>
    );
  }
}
