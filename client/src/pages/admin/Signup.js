import axios from 'axios';
import React, { useState } from 'react'
import Navbar from '../../resources/components/Navbar';
import { NavLink } from 'react-router-dom';

const Signup = () => {
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
            const url = "/signup";
            const { data: res } = await axios.post(url, data);
            setError("Account Created - Redirecting to Login Page in 5 Seconds");
            setTimeout(function () {
                window.location.replace('/admin/login');
            }, 5000)
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
                <h1>Create new admin account</h1>
                <p id="message">{error && <p>{error}</p>}</p>
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
                    <input type="submit" value="Create new account" />
                    <br />
                    <br />
                    {/* <a href="">Forgot Password?</a> */}
                </form>
                <div className="oldacbtn">
                    Already a user?
                    <NavLink to="/admin/login"> Login</NavLink>
                </div>

            </div>
        </>
    )
}

export default Signup