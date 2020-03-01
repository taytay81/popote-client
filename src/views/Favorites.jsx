import React, { Component } from "react";
import NavBar from "../components/NavBar";
//seed the database with User and recipe 
//retrieve list of favorite on did mount
//for each favorite call the component recipe card , we want to see a picture title and time to prepare
// add the heart symbole on the click update the favorite array in the user db
// on the click on one favorite we want to be able to see the recipe detail

export default class Favorites extends Component {
  state = {
    userId: "" ,//this will be retrieved from session after login
    listOfFavorites:[],
  };
  render() {
    return (
      <div>
        <NavBar />
      </div>
    );
  }
}
