import React, { Component, useContext, useState } from "react";
import apiHandler from "../api/APIHandler";
import UserContext from "../auth/UserContext";
import { Link, withRouter } from "react-router-dom";
import StarClickable from "./RatingStarsClickable";

export default withRouter(function ReviewForm({
  recipeId,
  clbk,
  recipeRating,
  ratingCount
}) {
  const [body, setBody] = useState("");
  const [userRating, setRating] = useState(0);

  const handleSubmit = evt => {
    evt.preventDefault();

    const newRating =
      userRating && recipeRating
        ? (Number(userRating) + recipeRating) / 2
        : userRating;
    const newCount = ratingCount + 1;
    console.log(
      `new rating! ${newCount} - ${userRating} + ${recipeRating} = ${newRating}`
    );

    apiHandler
      .post(`/reviews/create/${recipeId}`, {
        body,
        newRating,
        userRating,
        newCount
      })
      .then(apiRes => {
        resetForm();
        clbk(apiRes.data);
      })
      .catch(err => console.log(err));
  };

  const handleChange = evt => {
    if (evt.target.name === "body") setBody(evt.target.value);
  };

  const handleRate = index => {
    setRating(index);
  };

  let stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= userRating) {
      stars.push(
        <StarClickable
          className="clickable-stars"
          clbk={handleRate}
          key={i}
          index={i}
          shape={"full"}
        />
      );
    } else {
      stars.push(
        <StarClickable
          className="clickable-stars"
          clbk={handleRate}
          key={i}
          index={i}
          shape={"empty"}
        />
      );
    }
  }

  const resetForm = () => {
    setRating(0);
    setBody(" ");
  };

  return (
    <div>
      <h2>Review This Dish!</h2>
      <form onChange={handleChange} onSubmit={handleSubmit}>
        <label htmlFor="rating">Rate!</label>
        <div id="rating">{stars}</div>

        <label htmlFor="body">Body</label>
        <textarea
          name="body"
          id="body"
          cols="30"
          rows="10"
          placeholder="Tell Us More!"
          defaultValue={body}
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
});
