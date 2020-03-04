import React, { Component, useContext, useState } from "react";
import apiHandler from "../api/APIHandler";
import UserContext from "../auth/UserContext";
import { Link, withRouter } from "react-router-dom";

export default withRouter(function ReviewForm({ recipeId, clbk, recipeRating, ratingCount }) {
    // state={
    //     rating: recipeRating
    // }

    const [body, setBody] = useState("")
    const [userRating, setRating] = useState(recipeRating)
    


    const handleSubmit = evt => {
        evt.preventDefault();
        console.log(userRating)
        const newRating = userRating && recipeRating ? (Number(userRating) + recipeRating) /2  : userRating; 
        const newCount = ratingCount + 1
        console.log(`new rating! ${newCount} ${userRating} + ${recipeRating} = ${newRating}`)

        apiHandler.post(`/reviews/create/${recipeId}`, {body, newRating, userRating, newCount})
        .then(apiRes => {
            clbk(apiRes.data)
        })
    }

    const handleChange = evt => {
        console.log(typeof evt.target)
        console.log(ratingCount)
        if (evt.target.name === 'body') setBody(evt.target.value)
        if (evt.target.name === 'rating') setRating(evt.target.value)
    }


    return (
        <div>
            <h2>Reviews</h2>
            <form onChange={handleChange} onSubmit={handleSubmit}>
                <label htmlFor="rating">Rate!</label>
                <input type="number" name="rating" id="rating" min={0} max={5} defaultValue={recipeRating}/>
    
                <label htmlFor="body">Body</label>
                <textarea name="body" id="body" cols="30" rows="10" defaultValue="Tell Us More!"></textarea>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
})
