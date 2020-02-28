import React from 'react'
import { NavLink } from "react-router-dom";
import "./../styles/navbar.css";

export default function NavBar() {
    return (
        <div className="navbar">
            <div className="container">
                <NavLink exact to="/" className="link" activeClassName="is-active">
                    <h1>POPOTE</h1>
                </NavLink>
                <div className="menu">
                    <NavLink to="/favorites" exact className="link" activeClassName="is-active">
                        FAVORITES
                    </NavLink>
                    <NavLink to="/user" className="link" activeClassName="is-active">
                        MY PROFIL
                    </NavLink>
                    <NavLink to="/recipes" className="link" activeClassName="is-active">
                        RECIPES
                    </NavLink>
                    <NavLink to="/login" className="link" activeClassName="is-active">    
                        LOG IN
                    </NavLink>
                    <NavLink to="/signup" className="link" activeClassName="is-active">
                        SIGN UP
                    </NavLink>   
                    <NavLink to="/user" className="link" activeClassName="is-active">
                        USER
                    </NavLink>  
                </div>
            </div>
        </div>
    )
}
