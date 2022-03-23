import React, { useState } from "react";
import "./css/login.css";

let initialValues = {
    username: "",
    password: "",
};

const Login = () => {

    const [login, setLogin] = useState(initialValues);

    const handleSubmit = (e) => {
        // Need to setup endpoints to support
        e.preventDefault();

    }

    const handleChange = (e) => {
        setLogin({
            ...login,
            [e.target.name]: e.target.value
        });
    }

    return (
        <section className="login-page">
            <div className="login-card">
                <h3>Login</h3>
                    <form onSubmit={handleSubmit} className="login-input">
                        <label className="login-text">
                            Username 
                            <input
                                type="text"
                                name="username"
                                onChange={handleChange}
                            />
                        </label>
                        <label className="login-text">
                            Password 
                            <input
                                type="password"
                                name="password"
                                onChange={handleChange}
                            />
                        </label>
                        <div className="btn-div">
                            <button className="btn">Login</button>
                        </div>
                    </form>
            </div>
        </section>
    );
}

export default Login;
