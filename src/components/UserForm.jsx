import React, { useState, useEffect, Component } from "react";
import "../styles/user-form.css";
import { useAuth } from "../auth/useAuth";
import UserContext from "../auth/UserContext";
import RecipeCardXs from "./../components/RecipeCardXs";
import APIHandler from "../api/APIHandler";

export default function UserForm() {
  const [
    { msg, avatar, name, email, password, new_password, tags },
    setState
  ] = useState({
    msg: "",
    avatar: "",
    name: "",
    email: "",
    password: "",
    new_password: "",
    tags: []
  });

  const { currentUser, isLoading, isLoggedIn } = useAuth();


  const handleChange = e => {
    e.persist();
    this.setState(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
  };

  return isLoading ? (
    <p>loading...</p>
  ) : (
    <form onChange={handleChange} onSubmit={handleSubmit}>
      <label htmlFor="firstname">First Name</label>
      <input
        name="firstname"
        className="input"
        id="firstname"
        type="text"
        defaultValue={currentUser.firstname}
      />
       <label htmlFor="lastname">Last Name</label>
        <input 
            name="lastname" 
            className="input" 
            id="lastname" 
            type="text" 
            defaultValue={currentUser.lastname}
        />

      <label htmlFor="email">Email</label>
      <input 
        name="email" 
        className="input" 
        id="email" 
        type="email" 
        defaultValue={currentUser.email}
      />

      <label htmlFor="password">Password</label>
      <input 
        name="password" 
        className="input" 
        id="password" 
        type="password" 
      />

      <label htmlFor="new_password">New password</label>
      <input
        name="new_password"
        className="input"
        id="new_password"
        type="text"
      />
      <button className="button" type="submit">
        UPDATE
      </button>
    </form>
  );
}
