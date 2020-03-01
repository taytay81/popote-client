import React, { Component } from "react";
import NavBar from "./../components/NavBar";
import '../styles/home.css';
// import FilterList from "./../components/FilterList";
import QuickTagSearch from "./../components/QuickTagSearch";


export default class Home extends Component {
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
                        <a href="#"><span className="arrow">v</span></a>
                    </div>
                </div>

                <div className="home-second-page">
                    <div className="container">
                        <div className="marketing-question">
                            <span>Which ingredient do you have ?</span>
                        </div>
                        <form>
                            <div className="search-bar">
                                <div className="input-and-btn">
                                    <input id="main-search-bar" name="ingredient" 
                                    placeholder="Ex : tomato, peach..." type="text"/>
                                    <button className="btn-search">SEARCH</button>
                                </div>
                                
                                <div className="more-filter">
                                    <a href="#"><span id="style-span">more filters</span></a>
                                </div>
                                
                            </div>
                        </form>

                        <div className="filter-list">
                            {/* <FilterList/> */}
                        </div>
                        <div className="quick-tag-search">
                            <QuickTagSearch/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
