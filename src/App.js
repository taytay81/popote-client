import React from "react";
import tesseract from "./Tesseract/test.js";
import spoonacular from "./Api/APISpoonacular.js";
import "./App.css";

function App() {
  
  var sp = new spoonacular();
  //get all recipes that contains cheese restrict to 2 results
  sp.searchRecipesByIngredient("cheese", 2);
  
//search for recipe detail return the first one need to see how to get the value persistent
  sp.searchRecipeDetail("cheese", 2, 1);

  //search all recipe by diet ex vegetarian 
  sp.searchRecipeByDiet("vegetarian", 2);

  //search all the recipes that would be similar to the favorite based on the Id of the favorite one 
  sp.searchRecipeSimilarTofavorite("1034053",2);

  //tesseract.getTextFromImage();
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
