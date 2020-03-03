import React, { Component } from "react";
import "./../styles/recipeCardXl.css";

export default class RecipeCardXL extends Component {
  state = {};

  render() {
    const recipe = this.props.recipe;
    console.log(recipe.instructions);
    return (
      <div className="recipe-container">
        <div className="container">
          <div className="recipe-top-section">
            <div className="recipe-top-left-section">
              <div className="recipe-img">
                <img src={recipe.image} alt={recipe.title} />
              </div>

              <div className="recipe-tags">
                <ul>
                  <li>Tags</li>
                </ul>
              </div>
            </div>

            <div className="recipe-top-right-section">
              <div className="recipe-title">
                <h1>{recipe.title}</h1>
              </div>

              <div className="info-timer-rating">
                <div className="timer">
                  <span>{recipe.readyTime}</span>
                  <span>Minutes</span>
                </div>

                <div className="recipe-ingredients">
                  <h2>Ingredients</h2>
                  {recipe.ingredients &&
                    recipe.ingredients.map((ing, i) => (
                      <ul>
                        <li key={i}>{ing}</li>
                      </ul>
                    ))}
                </div>
              </div>
            </div>

            <div className="recipe-bottom-left-section">
              <div className="recipe-desc">
                <h2>Description</h2>
                <p>{recipe.summary}</p>
              </div>
            </div>
            <div className="recipe-bottom-right-section">
              <h2>Steps</h2>
              <ul>
                {/* <li>{recipe.instructions}</li> 
      {recipe.instructions && recipe.instructions.map((step, i) => (
        <li key={i}>{step}</li>
      ))}*/}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
