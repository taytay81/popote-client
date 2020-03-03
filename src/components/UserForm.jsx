import React, { Component } from 'react'
import '../styles/user-form.css';

export default class UserForm extends Component {

    state = {
        msg: "",
        avatar: "",
        name: "",
        email: "",
        password: "",
        new_password: "",
        tags: [],
    }

    handleChange = (e) => {
        e.preventDefault();
        this.setState({ [e.target.name]: e.target.value });
    }

    submitForm = (e) => {
        e.preventDefault();
    }

    render() {
        return (
            <div>
                <form onChange={this.handleChange} onSubmit={this.submitForm}>
                    <label htmlFor="name">Name</label>
                    <input
                        name="name"
                        className="input"
                        id="name"
                        type="text"
                        // value={}
                    />

                    <label htmlFor="email">Email</label>
                    <input
                        name="email"
                        className="input"
                        id="email"
                        type="email"
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
                    <button className="button" type="submit">UPDATE</button>
                </form>
            </div>
        )
    }
}

