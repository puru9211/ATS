import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='copyright'>
                All rights reserved © 2023 Hiring Needs (India) Ltd.
            </div>
            <div className='footer-menu'>
                <ul>
                    <li>
                        <NavLink to="/root">Root</NavLink>
                    </li>
                    /
                    <li>
                        <NavLink to="/admin">Admin</NavLink>
                    </li>
                </ul>
            </div>

        </div>
    )
}

export default Footer