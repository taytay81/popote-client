import React, { Component } from 'react'

export default class SearchBar extends Component { 
    
    render() {
        return (
            <div>
                <input id="main-search-bar" name="ingredient" 
                    placeholder="Ex : tomato, peach..." type="text"/>
                <button className="btn-search">SEARCH</button>
            </div>
        )
    }
}
