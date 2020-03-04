import React, { Component, useContext, useState } from "react";


export default function Reviews({reviews}) {
    console.log(reviews)
    return <ul>
        {reviews.length && reviews.map((r, i) => (
            <li key={i}>
                {r.body}
            </li>
        ))}
    </ul>
}