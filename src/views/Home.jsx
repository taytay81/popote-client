import React, { Component } from "react";
import NavBar from "./../components/NavBar";
<<<<<<< HEAD
import '../styles/home.css';
// import FilterList from "./../components/FilterList";
import HomeSecondSection from "./HomeSecondSection";
=======
import "../styles/home.css";
import QuickTagSearch from "./../components/QuickTagSearch";
<<<<<<< HEAD
import AutoComplete from "../components/AutoComplete";
import APIHandler from "../api/APIHandler";
=======
import SearchByIngredient from "../components/SearchByIngredient";
>>>>>>> 2434cfc73b383ecadf3c77c1e78b02219946aa15

>>>>>>> fbc53105bd1b52b0e423d24ec8dfb4ac99edc2e4

export default class Home extends Component {
<<<<<<< HEAD
    render() {
        return (
            <div className="home-container"> 
                <NavBar/>
                <div className="container">
                    <div className="marketing">
                        <h2>Tell us what you have in your fridge</h2>
                        <h2 id="decale">we will find something to eat for you...</h2>
                    </div>
                    <div className="arrow-down">
                        <a href="#home-second-page"><span className="arrow">v</span></a>
                    </div>
                </div>
                <HomeSecondSection/>    
=======
  state = {
    ingredientsInDb: "",
    recipesFound:[]
  };

  componentDidMount() {
    APIHandler.get("/ingredients")
      .then(apiRes => {
        console.log(apiRes);
        this.setState({ ingredientsInDb: apiRes.data });
      })
      .catch(apiErr => console.log(apiErr));
  }
  render() {
    console.log(this.state.ingredientsInDb);
    return (
      <div className="home-container">
        <NavBar />
        
        <div className="container">
          <div className="marketing">
            <h2>Tell us what you have in your fridge</h2>
            <h2 id="decale">we will find something to eat for you...</h2>
          </div>
          <div className="arrow-down">
            <a href="#">
              <span className="arrow">v</span>
            </a>
          </div>
        </div>

        <div className="home-second-page">
          <div className="container">
            <div className="marketing-question">
              <span>Which ingredient do you have ?</span>
            </div>
            <form>
              <div className="search-bar">
                <AutoComplete
                  suggestion={this.state.ingredientsInDb}
                ></AutoComplete>

                <div className="more-filter">
                  <a href="#">
                    <span id="style-span">more filters</span>
                  </a>
                </div>
              </div>
            </form>

            <div className="filter-list">{/* <FilterList/> */}</div>
            <div className="quick-tag-search">
              <QuickTagSearch />
>>>>>>> 2434cfc73b383ecadf3c77c1e78b02219946aa15
            </div>
          </div>
        </div>
      </div>
    );
  }
}
