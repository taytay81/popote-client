import React, { Component } from "react";
import "./../styles/recipeCardXl.css";
import Star from "./RatingStars";

export default class RecipeCardXL extends Component {
  // state = {};

  render() {
    const recipe = this.props.recipe;
    const stars = [];

    for (let i = 1; i <= 5; i++) {
      if (i <= recipe.rating) stars.push(<Star shape={"full"} />);
      if (i > recipe.rating) stars.push(<Star shape={"empty"} />);
    }

    return (
      <div className="recipe-container">
        <div className="container">
          <div className="recipe-top-section">
            <div className="recipe-top-left-section">
              <div className="recipe-img">
                <img src={recipe.image} alt={recipe.title} />
              </div>
            </div>

            <div className="recipe-top-right-section">
              <div className="recipe-title">
                <h1>{recipe.title}</h1>
              </div>

              <div className="info-timer-rating">
                <div className="recipe-timer">
                  <span id="timer">{recipe.readyTime}</span>
                  <span id="minutes">Minutes</span>
                </div>
                <div className="recipe-rating">
                  <h2>Rating</h2>
                  <div className="stars">{stars}</div>
                  <span>
                    {recipe.rating} ({recipe.ratingCount})
                  </span>
                </div>

                <div className="recipe-ingredients">
                  <h2>Ingredients</h2>
                  <ul>
                    {recipe.ingredients &&
                      recipe.ingredients.map((ing, i) => (
                        <li key={i}>{ing}</li>
                      ))}
                  </ul>
                </div>
              </div>

              <div className="recipe-tags">
                <h2>Categories</h2>
                {/* <div className="tag-list"> */}
                <ul>
                  {recipe.tags &&
                    recipe.tags.map((tag, i) => <li key={i}>{tag}</li>)}
                </ul>
                {/* </div> */}
              </div>
            </div>
          </div>

          <div className="recipe-bottom-section">
            <div className="recipe-bottom">
              <div className="recipe-desc">
                <h2>Description</h2>
                <p>{recipe.summary}</p>
              </div>

              <div className="recipe-steps">
                {console.log("instructions!!!!!", recipe.instructions)}
                <h2>Steps</h2>
                <ul>
                  {recipe.instructions &&
                    recipe.instructions.map((step, i) => (
                      <li key={i}>
                        {step.number} - {step.step}
                      </li>
                    ))}
                </ul>
              </div>
            </div>
            <div className="recipe-review">
              <button className="btn-add-review">REVIEW IT</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
