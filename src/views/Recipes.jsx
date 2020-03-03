import React, { Component } from "react";
import NavBar from "../components/NavBar";
import APIHandler from "../api/APIHandler";
import RecipeCardM from "../components/RecipeCardM";
import "../styles/recipes.css";
// when you are loggedIn we retrieve the full list of recipe , we should be able to see the one already in our favorite
// only for the one that are not in favorite we should be able to add them  add sign visible for the one that are not in favorite
// if not logged in we see the list of recipes without the favorite icone

export default class Recipes extends Component {
  state = {
    userId: "5e5d459abc53780b88933080", //this will be retrieved from session after login
    recipes: [],
    favoritesRecipes: [],
    isLoggedIn: false
  };

  componentDidMount() {
    if (this.state.userId != "") this.setState({ isLoggedIn: true });

    /*APIHandler.get(`/recipes`)
      .then(apiRes => {
        this.setState({ recipes: apiRes.data });
      })
      .catch(apiErr => console.log(apiErr));*/
    // we want to request the favorite only if we are loggedin

    this.setState({ recipes: this.props.location.state.recipes });
    console.log("aaaaaa", this.props.location.state.recipes);
    console.log("recipes from the history", this.state.recipes);

    if (this.state.userId != "") {
      APIHandler.get(`/favorites/${this.state.userId}`)
        .then(apiRes => {
          if (apiRes.data) {
            console.log(apiRes);
            this.setState({ favoritesRecipes: apiRes.data.favorites });
            if (this.state.favoritesRecipes.length > 0) this.recreateRecipe();
          } /*else {
            var recipesCopy = [...this.state.recipes];
            for (let i = 0; i < recipesCopy.length; i++) {
              var recipeToAdd = recipesCopy[i];
              recipeToAdd.favorite = false;
            }

            // peut etre faut il faire un setState
            //this.setState({recipes:})
          }*/
        })
        .catch(apiErr => console.log(apiErr));
    }
  }

  //need to create function that is searching in the recipes favorites and update the array with recipes to know if its in the favorite
  //a new field Infavorite should be created with a false value
  recreateRecipe = (allRecipes, favoritesRecipes) => {
    var recipesCopy = [...this.state.recipes];

    var allRecipes = this.state.recipes;
    var favoritesRecipes = this.state.favoritesRecipes;

    console.log("hhhhhhhhhhh", allRecipes, favoritesRecipes);

    favoritesRecipes.map(function(favrecipe, i) {
      for (let i = 0; i < allRecipes.length; i++) {
        if (allRecipes[i].name === favrecipe.name) {
          var recipeToAdd = recipesCopy[i];
          recipeToAdd.favorite = true;
        } else {
          var recipeToAdd = recipesCopy[i];
          recipeToAdd.favorite = false;
        }
      }
    });
    console.log("llll", recipesCopy);
  };

  handleFavorite = (title, id, action) => {
    //only if we are loggin
    // we can add a recipe to our favorite from the recipes page
    if (action === "delete") {
      const recipesUpdate = [...this.state.recipes].filter(
        f => f.title !== title
      );
      this.setState({
        recipes: recipesUpdate
      });
      APIHandler.patch(`/favorites/${this.state.userId}/${id}`, { id })
        .then(apiRes => {
          console.log(apiRes);
        })
        .catch(apiErr => console.log(apiErr));
    } else if (action === "add") {
      console.log("we are trying to add");
      APIHandler.patch(`/favorites/${this.state.userId}/${id}`, { id })
        .then(apiRes => {
          console.log(apiRes);
        })
        .catch(apiErr => console.log(apiErr));
    }
    //faire un setstate pour voir celui au favori
  };

  render() {
    return (
      <div>
        <NavBar />
        <div className="space"></div>
        <div className="container">
          <div className="recipes-container">
            {this.state.recipes.map((recipe, i) => (
              <div key={i} className="recipes-element">
                <RecipeCardM
                  title={recipe.title}
                  image={recipe.image}
                  readyTime={recipe.readyTime}
                  id={recipe._id}
                  isLoggedIn={this.state.isLoggedIn}
                  favorite={this.state.favorite}
                  clbk={this.handleFavorite}
                ></RecipeCardM>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
