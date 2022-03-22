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
                <form onSubmit={handleSubmit}>
                    <label className="login-text">
                        Username: 
                        <input
                            type="text"
                            name="username"
                            placeholder="Enter your username..."
                            onChange={handleChange}
                        />
                    </label>
                    <label className="login-text">
                        Password: 
                        <input
                            type="text"
                            name="password"
                            placeholder="Enter your password..."
                            onChange={handleChange}
                        />
                    </label>
                    <button>Login</button>
                </form>
            </div>
        </section>
    );
}

export default Login;
