import React, { Component, useContext, useState } from "react";
import "./../styles/rating.css";


export default function Reviews({reviews}) {
    return (
    <>
        <ul>
            {reviews.length && reviews.map((r, i) => (
                <li key={i}>
                    {r.body}
                </li>
            ))}
        </ul>
    </>
)}