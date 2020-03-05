import React, { Component, useContext, useState } from "react";

export default function Reviews({ reviews }) {
  return (
    <ul>
      {reviews.length ? (
        reviews.map((r, i) => <li key={i}>{r.body}</li>)
      ) : (
        <p id="no-reviews-message">You are the first to review!!</p>
      )}
    </ul>
  );
}
