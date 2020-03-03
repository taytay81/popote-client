import React, { Component } from 'react'
import QuickTagSearch from "../components/QuickTagSearch";
import SearchByIngredient from "../components/SearchByIngredient";
import NavBar from "../components/NavBar";
import AutoComplete from "../components/AutoComplete";
import APIHandler from "../api/APIHandler";
import '../styles/home.css';



export default class HomeSecondSection extends Component {
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
        return (
  
                <>
            <div id="home-second-page">
                    <NavBar/>
                <div className="container">
                    <div className="marketing-question">
                        <span>Which ingredient do you have ?</span>
                    </div>
                    <form>
                        <div className="search-bar">
                            <div className="input-and-btn">
                            <AutoComplete
                                suggestion={this.state.ingredientsInDb}
                            ></AutoComplete>

                            {/* SOME OF THE STYLING CHANGED WHENANDREW TURNED THE SEARCH INTO ITS OZWN COPONENT 
                            MIGHT WANT TO DOUBLE CHECK THE LOCAION OF THE CSS FOR THAT COMP OR WHERE THE CALSS IS CALLED*/}
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
        </>
        
        )
    }
}

















