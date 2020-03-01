import React, { Component } from 'react'
import './../styles/login.css';

export default class LoginForm extends Component {

    state = {
        email: "",
        password: ""
    }

    handleChange = e => {
        e.preventDefault();
        this.setState({[e.target.name]: e.target.value})
    }

    submitForm = e => {
        e.preventDefault();
    }

    render() {
        return (
            <div className="form-area">
                <div className="container">
                    <form onChange={this.handleChange} onSubmit={this.submitForm}>
                        <label htmlFor="email">Email address</label>
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
                        <span>No account yet ? <a href="/Signup">Create one</a></span>
                        <button className="btn-create">CONNECT</button>
                    </form>
                </div>
            </div>
        )
    }
}
