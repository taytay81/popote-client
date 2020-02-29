import React, { Component } from "react";
import NavBar from "../components/NavBar";
import "../styles/home.css";
// import IconFav from "../icon/IconFavorite";

export default class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <NavBar />
        <div className="container">
          <div className="all-boxes">
            <div className="marketing">
              <h2>Search a recipe</h2>
            </div>
            <div className="box">
              <div className="box-icon">
                <img src="" alt="" />
              </div>
              <div className="box-title">
                <h2></h2>
              </div>
            </div>

            <div className="box">
              <div className="box-icon">
                <img src="" alt="" />
              </div>
              <div className="box-title">
                <h2></h2>
              </div>
            </div>

            <div className="box">
              <div className="box-icon">
                <img src="" alt="" />
              </div>
              <div className="box-title">
                <h2></h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
