import React, { Component } from "react";
import NavBar from "./../components/NavBar";
import "../styles/home.css";

export default class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <NavBar />
        <div className="container">
          <div className="marketing">
            <h2>Tell us what you have in your fridge</h2>
            <h2 id="decale">we will find something to eat for you...</h2>
          </div>
          <div className="arrow-down">
            <a href="">
              <span className="arrow">v</span>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
