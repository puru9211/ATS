import axios from 'axios';
import React, { useState } from 'react'
import Navbar from "../../resources/components/Navbar"
import { NavLink } from 'react-router-dom';

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
            const url = "/login";
            const { data: res } = await axios.post(url, data);
            localStorage.setItem("token", res.data);
            localStorage.setItem("login", true);
            window.location = "/admin/";
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
                <h1>Admin Login</h1>
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
                <div className="oldacbtn">
                    Don't have an account?
                    <NavLink to="/admin/signup">Signup</NavLink>
                </div>
            </div>
        </>
    )
}

export default Login