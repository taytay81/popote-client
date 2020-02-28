import React, { Component } from 'react'
import NavBar from "./../components/NavBar";

export default class User extends Component {
    render() {
        return (
            <div>
                <NavBar/>
                <h1>C'est mon espace user !</h1>
            </div>
        )
    }
}
