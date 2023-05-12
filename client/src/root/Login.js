import axios from 'axios';
import React, { useState } from 'react'
import Navbar from "../resources/components/Navbar"

const Login = () => {
    const [data, setData] = useState({
        email: "",
        password: "",
    });

    const [error, setError] = useState("");

    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const url = "/root";
            const { data: res } = await axios.post(url, data);
            localStorage.setItem("token", res.data);
            localStorage.setItem("root", true);
            window.location = "/root";
        } catch (error) {
            if (
                error.response &&
                error.response.status >= 400 &&
                error.response.status <= 500
            ) {
                setError(error.response.data.message);
            }
        }
    };
    return (
        <>
            <Navbar />

            <div className="login-box">
                <h1>Root Login</h1>
                <p id="message">{error && <p>{error}</p>}
                </p>
                <form id="reg_form" onSubmit={handleSubmit}>

                    <input
                        type="email"
                        id="email"
                        placeholder="Enter your email address"
                        name="email"
                        value={data.email}
                        required
                        onChange={handleChange}
                    />
                    <br />
                    <br />
                    <input
                        type="password"
                        id="password"
                        placeholder="Enter your password"
                        name="password"
                        value={data.password}
                        required
                        onChange={handleChange}
                    />
                    <br />
                    <br />
                    <input type="submit" value="Login" />
                    <br />
                    <br />
                    {/* <a href="">Forgot Password?</a> */}
                </form>

            </div>
        </>
    )
}

export default Login