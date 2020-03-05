import React, { Component, useContext, useState } from "react";
import "./../styles/rating.css";

export default function Reviews({ reviews }) {
  return (
        <div className="right-review">
            <ul>
            {reviews.length ? (
                reviews.map((r, i) => <li key={i}>{r.body}</li>)
            ) : (
                <p id="no-reviews-message">You are the first to review!!</p>
            )}
            </ul>
        </div>
  );
}
