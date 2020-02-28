//import axios from "axios";
require("dotenv").config();
//add the apiKey to the env file and do not commit that on github
class APISpoonacular {
  constructor() {
    this.name = "APISpoonacular";
    this.url = "https://api.spoonacular.com/recipes";
    this.apiKey = "b2dfbbcc885d414e9eba01838ff204c0";
    this.recipes = "";
  }

  searchRecipesByIngredient = async (ingredients, resNumber) => {
    var url = `${this.url}/findByIngredients?ingredients=${ingredients}&number=${resNumber}&apiKey=${this.apiKey}`;
    const response = await fetch(url);
    this.recipes = await response.json();
    console.log("result recipe per ingredient", this.recipes);
  };

  searchRecipeDetail = async (ingredients, resNumber, element) => {
    var url = `${this.url}/findByIngredients?ingredients=${ingredients}&number=${resNumber}&apiKey=${this.apiKey}`;
    var response = await fetch(url);
    const recipes = await response.json();
    url = `${this.url}/${recipes[element].id}/information?apiKey=${this.apiKey}`;
    response = await fetch(url);
    const recipeDetail = await response.json();
    console.log("result one recipe detail ", recipeDetail);
  };

  searchRecipeByDiet = async (diet, resNumber) => {
    var url = `${this.url}/search?diet=${diet}&number=${resNumber}&apiKey=${this.apiKey}`;
    const response = await fetch(url);
    const recipes = await response.json();

    console.log("result per diet ex :vegetarian", recipes.results);
  };

  searchRecipeSimilarTofavorite = async (recipeId, resNumber) => {
    var url = `${this.url}/${recipeId}/similar?apiKey=${this.apiKey}`;
    console.log(url);
    const response = await fetch(url);
    const recipes = await response.json();
    console.log("result similar to a favorite one ", recipes.results);
  };
}

export default APISpoonacular;
