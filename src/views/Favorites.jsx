import React, { Component } from 'react'
import NavBar from "../components/NavBar";

export default class Favorites extends Component {
    render() {
        return (
            <div>
                <NavBar/>
                <h1>Je suis la liste des favorites</h1>
            </div>
        )
    }
}
