import React, { Component } from "react";
import NavBar from "../components/NavBar";
import apiHandler from "../api/APIHandler";
import RecipeCard from "../components/RecipeCard";
//seed the database with User and recipe
//retrieve list of favorite on did mount
//for each favorite call the component recipe card , we want to see a picture title and time to prepare
// add the heart symbole on the click update the favorite array in the user db
// on the click on one favorite we want to be able to see the recipe detail

export default class Favorites extends Component {
  state = {
    userId: "5e5ba944b4919a3a2863d436", //this will be retrieved from session after login
    listOfFavorites: []
  };

  componentDidMount() {
    apiHandler
      .get(`/favorites/${this.state.userId}`)
      .then(apiRes => {
        this.setState({ listOfFavorites: apiRes.data.favorites });
        this.setState({ favoriteTosend: apiRes.data.favorites._id });
      })
      .catch(apiErr => console.log(apiErr));
  }

  handleFavorite = (title, id) => {
    //delete a favorite
    const favoriteUpdate = [...this.state.listOfFavorites].filter(
      f => f.title !== title
    );
    this.setState({
      listOfFavorites: favoriteUpdate
    });
    apiHandler
      .patch(`/favorites/${this.state.userId}/${id}`, { id })
      .then(apiRes => {
        console.log(apiRes);
      })
      .catch(apiErr => console.log(apiErr));
  };
  render() {
    return (
      <div>
        <NavBar />
        {this.state.listOfFavorites.map((recipe, i) => (
          <div key={i}>
            <RecipeCard
              title={recipe.title}
              image={recipe.image}
              readyTime={recipe.readyTime}
              id={recipe._id}
              clbk={this.handleFavorite}
            ></RecipeCard>
          </div>
        ))}
      </div>
    );
  }
}
