import React, { Component, useContext, useState } from "react";
import "./../styles/rating.css";
import StarWrapper from "./StarWrapper";
import { useAuth } from "../auth/useAuth";
import UserContext from "../auth/UserContext";

export default function Reviews({ reviews }) {
  useAuth();
  const { currentUser } = useContext(UserContext);

  return (
    <div className="right-side">
      <ul>
        {reviews.length ? (
          reviews.map((r, i) => (
            <li key={i}>
              <div className="box-review">
                <div className="info-user-review">
                  <div className="name-area">
                    {currentUser.firstname} {currentUser.lastname}
                  </div>
                  <div className="rating-area">
                    <StarWrapper rating={r.rating} clickable={false} />
                  </div>
                </div>
                <div className="comment">
                  <div>{r.body}</div>
                </div>
              </div>
            </li>
          ))
        ) : (
          <p id="no-reviews-message">You are the first to review!!</p>
        )}
      </ul>
    </div>
  );
}
