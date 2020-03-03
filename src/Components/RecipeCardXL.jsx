import React, { Component } from "react";
import "./../styles/recipeCardXl.css";

export default class RecipeCardXL extends Component {
  state = {};

  render() {
    const recipe = this.props.recipe;
    console.log()
    return (
      <div className="recipe-container">
        <div className="container">
          <div className="recipe-left-section">
            <div className="recipe-img">
              <img src={recipe.image} alt={recipe.title}/>
            </div>
            <div className="recipe-infos">
              <div className="recipe-timer">

              </div>

              <div className="recipe-tags">
                <ul>
                  <li></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="recipe-right-section">
            <div className="recipe-title">
              <h1>{recipe.title}</h1>
              <div className="recipe-ingredients">
                <ul>
                  <li></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

      {/* <div className="top-container">
          <div>
            <h4>{recipe.title}</h4>
            <h6>{recipe.readyTime} minutes</h6>
          </div>
          <div>
            <img src={recipe.image} alt={recipe.image} />
          </div>
          <h4>Description</h4>
          <div>missing for the moment need to be added to the seeding</div>
          <h4>Ingredients</h4>
          <ul>
            <div>{recipe.ingredients}</div>
          </ul>
          <h4>Directions</h4>
          <div></div>
          <h4>Tags</h4>
          <h4>comments</h4>
          <div>need to be implemented</div>
        </div> */}