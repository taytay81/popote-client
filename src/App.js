import React from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";
import Home from "./views/Home";
import Recipes from "./views/Recipes";
import Recipe from "./views/Recipes";
import Favorites from "./views/Favorites";
import User from "./views/User";
import Login from "./views/Login";
import Signup from "./views/Signup";
import NotFound from "./views/NotFound";

import tesseract from "./Tesseract/test.js";
// import spoonacular from "./api/APISpoonacular.js";

function App() {
  
//   var sp = new spoonacular();
//   //get all recipes that contains cheese restrict to 2 results
//   sp.searchRecipesByIngredient("cheese", 2);
  
// //search for recipe detail return the first one need to see how to get the value persistent
//   sp.searchRecipeDetail("cheese", 2, 1);

//   //search all recipe by diet ex vegetarian 
//   sp.searchRecipeByDiet("vegetarian", 2);

//   //search all the recipes that would be similar to the favorite based on the Id of the favorite one 
//   sp.searchRecipeSimilarTofavorite("1034053",2);

  //tesseract.getTextFromImage();
  return (
    <div>
      <Switch>
        <Route path="/recipes" component={Recipes}/>
        <Route path="/recipe/:id" component={Recipe}/>
        <Route path="/favorites" component={Favorites}/>
        <Route path="/user" component={User}/>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route exatch path="/" component={Home} />
        <Route path="*" component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
