import React, { useState, useEffect, useContext, Component } from "react";
import "../styles/user-form.css";
import { useAuth } from "../auth/useAuth";
import UserContext from "../auth/UserContext";
import RecipeCardXs from "./../components/RecipeCardXs";
import APIHandler from "../api/APIHandler";
import { Link, withRouter } from "react-router-dom";

export default withRouter(function UserForm(props) {
  const [
    { avatar, firstname, lastname, email },
    setState
  ] = useState({
    avatar: "",
    firstname: "",
    lastname: "",
    email: ""
  });

  const userContext = useContext(UserContext);
  const { setCurrentUser } = userContext;
  const { currentUser, isLoading, isLoggedIn } = useAuth();


  const handleChange = e => {
    e.persist();
    setState(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const apiRes = await APIHandler.patch(`/users/${currentUser._id}`, {firstname, lastname, email});
      setCurrentUser(apiRes.data.currentUser);
      console.log(userContext);
      props.history.push("/");
    } catch (err) {
      // setCurrentUser(null);
    }
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

      {/* <label htmlFor="password">Password</label>
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
      /> */}
      <button className="button" type="submit">
        UPDATE
      </button>
    </form>
  );
})
