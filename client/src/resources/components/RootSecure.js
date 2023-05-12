import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const RootSecure = (props) => {
    const { Component } = props;
    const navigate = useNavigate();
    useEffect(() => {
        let login = localStorage.getItem("root");
        if (!login) {
            navigate("/root/login");
        }
    });
    return (
        <div>
            <Component />
        </div>
    );
};

export default RootSecure;
