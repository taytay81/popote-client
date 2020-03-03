import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHourglassHalf } from "@fortawesome/free-solid-svg-icons";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";

import "../styles/recipeCard.css";

export default class RecipeCardM extends Component {
  state = { isLiked: true };

  deleteFromFavorite = (title, id) => {
    /*this.setState({ isLiked: !this.state.isLiked });
    console.log(this.state.isLiked, title);*/
    this.props.clbk(title, id, "delete");
  };
  addToFavorite = (title, id) => {
    this.props.clbk(title, id, "add");
  };
  handletime = time => {
    var num = time;
    if (time > 60) {
      var hours = num / 60;
      var rhours = Math.floor(hours);
      var minutes = (hours - rhours) * 60;
      var rminutes = Math.round(minutes);
      return rhours + " hour(s) and " + rminutes + " minutes.";
    } else {
      return time + " minutes.";
    }
  };

  render() {
    //add a link to view the detail recipe

    return (
     
      <div className="recipe-card">
        <div className="favorite-icon">
          {this.props.isLoggedIn && this.props.favorite && (
            <button
              onClick={() =>
                this.deleteFromFavorite(this.props.title, this.props.id)
              }
            >
              <FontAwesomeIcon icon={faHeart} />
            </button>
          )}
          {this.props.isLoggedIn && !this.props.favorite && (
            <button
              onClick={() =>
                this.addToFavorite(this.props.title, this.props.id)
              }
            >
              <FontAwesomeIcon icon={faPlusSquare} />
            </button>
          )}
        </div>

        <img src={this.props.image} alt={this.props.image} />
        <h3>{this.props.title}</h3>
        <span className="timer-icon">
          <FontAwesomeIcon icon={faHourglassHalf}></FontAwesomeIcon>
        </span>
        <span> {this.handletime(this.props.readyTime)}</span>
      </div>
    );
  }
}
