import React from 'react'
import logo from "../assets/images/header-logo.png"
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <header id="header">
            <div className="header-content">
                <div className="container">
                    <div className="header-row">
                        <div className="header-col">
                            <NavLink> <img src={logo} alt="" loading="lazy" /></NavLink>
                        </div>
                        <div className="header-col">
                            <nav id="nav">
                                <ul>
                                    <li><NavLink>Início</NavLink></li>
                                    {/* <li><NavLink>Technical Guide</NavLink></li>
                                    <li><NavLink>About Us</NavLink></li> */}
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
