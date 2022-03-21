import React, { useState } from "react";

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
        <div>
            <h3>Login</h3>
            <form onSubmit={handleSubmit}>
                <label>
                    Username: 
                    <input
                        type="text"
                        name="username"
                        value="username"
                        onChange={handleChange}
                    />
                </label>
                <label>
                    password: 
                    <input
                        type="text"
                        name="password"
                        value="password"
                        onChange={handleChange}

                    />
                </label>
                <button>Login</button>
            </form>
        </div>
    );
}

export default Login;
