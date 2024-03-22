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
                            <NavLink to={"/"}> <img src={logo} alt="" loading="lazy" /></NavLink>
                        </div>
                        <div className="header-col">
                            <nav id="nav">
                                <ul>
                                    <li><NavLink to={"/Sobre-nós"}>Sobre nós</NavLink></li>
                                    <li><NavLink to={"/Aviso-Legal-para-Testador-de-Teclado"}>Notícia legal</NavLink></li>
                                    <li><NavLink to={"/Contate-nos"}>Contate-nos</NavLink></li>
                                    <li><NavLink to={"POLÍTICA-DE-PRIVACIDADE"}>Política de Privacidade</NavLink></li>
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
