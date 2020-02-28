import React, { Component } from 'react'
import NavBar from "./../components/NavBar";
import '../styles/home.css';


export default class Home extends Component {
    render() {
        return (
            <div className="home-container">
                <NavBar/>
                <div className="container">
                    <div className="marketing">
                        <h2>Tell us what you have in your </h2>
                    </div>
                    <div className="all-boxes">
                        <div className="box">
                            <div className="box-icon">
                            </div>
                            <div className="box-title">
                                <h2>Search bitch</h2>
                            </div>
                        </div>

                        <div className="box">
                            <div className="box-icon">
                                <img src="" alt=""/>
                            </div>
                            <div className="box-title">
                                <h2>Your favorites</h2>
                            </div>
                        </div>

                        <div className="box">
                            <div className="box-icon">
                                <img src="" alt=""/>
                            </div>
                            <div className="box-title">
                                <h2>Scan your ticket</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
