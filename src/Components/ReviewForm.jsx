import React, { Component, useContext } from "react";
import apiHandler from "../api/APIHandler";
import UserContext from "../auth/UserContext";

export default class ReviewForm extends Component {
    state = {
        body: "",
        currentUser: "5e5f6653d65ed9476201c541"

    }

    componentDidUpdate(){
        console.log(this.state.body)
        
    }

    handleSubmit = evt => {
        evt.preventDefault();
        apiHandler.post(`/review/create/${this.props.recipe._id}`, this.state)
        console.log(currentUser)
    }

    handleChange = evt =>{
        this.setState({body: evt.target.value})
    }

    render(){
        return(
            <div>
                <h2>Reviews</h2>
                <form onChange={this.handleChange} onSubmit={this.handleSubmit}>
                    <label htmlFor="body"></label>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                    <button type="submit">Submit</button>
                </form> 
                               {/*  */}
            </div>
        )
    }
}
