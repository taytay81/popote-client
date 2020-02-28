import React, { Component } from 'react'
import NavBar from "./../components/NavBar";

export default class Recipe extends Component {
    render() {
        return (
            <div>
                <NavBar/>
                <h1>Je suis une recette</h1>
            </div>
        )
    }
}
