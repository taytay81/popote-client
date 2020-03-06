import React, { Component } from "react";
import "./../styles/recipeCardXl.css";
import Star from "./RatingStars";
import StarWrapper from "./StarWrapper";

export default class RecipeCardXL extends Component {
  // state = {};
  styleSummary(summary) {
    var summarycopy = [];
    for (let i = 0; i < summary.length; i++) {
      var index = summary.indexof("<b>", i);

      console.log(index);
    }

    return summarycopy;
  }
  render() {
    const recipe = this.props.recipe;

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
                  <StarWrapper rating={recipe.rating} clickable={false} />
                  <span>
                    {recipe.rating} ({recipe.ratingCount})
                  </span>
                </div>

                <div className="recipe-ingredients">
                  <h2>Ingredients</h2>
                  <ul>
                    {recipe.ingredients &&
                      recipe.ingredients.map((ing, i) => (
                        <li key={i}>> {ing}</li>
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
                <p>{this.styleSummary(recipe.summary)}</p>
              </div>

              <div className="recipe-steps">
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
          </div>
        </div>
      </div>
    );
  }
}
