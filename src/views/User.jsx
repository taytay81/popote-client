import React, { Component } from 'react'
import NavBar from "./../components/NavBar";
import '../styles/user.css';
import UserForm from './../components/UserForm'

export default class User extends Component {
    render() {
        return (
            <div className="user-container">
                <NavBar/>
                <div className="container">
                    <div className="user-space"> 
                        <div className="left-section">            
                            {/* <div className="title-user">
                                <span>Welcome back FIRSTNAME LASTNAME</span>
                            </div> */}
                            <div className="user-favs">
                                <h2>My favorites</h2>
                                <div className="user-favs-list">
                                    <ul>
                                        <li>
                                            <div className="box-fav">
                                                <div className="img-fav">
                                                    <img src="" alt=""/>
                                                </div>
                                                <div className="title-fav">
                                                    Recipe's title
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="box-fav">
                                                <div className="img-fav">
                                                    <img src="" alt=""/>
                                                </div>
                                                <div className="title-fav">
                                                    Recipe's title
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div> 
                        <div className="right-section">
                            {/* <div className="title-user">
                                Update your user informations
                            </div>     */}
                            <div className="form-section">
                                <h2>My account</h2>
                                <UserForm/>        
                            </div>
                        </div>
                    </div>  
                </div>     
            </div>
        )
    }
}
