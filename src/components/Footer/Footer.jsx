import React, { useEffect } from 'react'
import "./Footer.css"
import { NavLink } from 'react-router-dom'

export default function Footer() {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <footer className='flex-box'>
            <div className="footer-container">
                <div className=" fBox-container">
                    <div className="footer-box ">
                        <h3>
                            Páginas</h3>
                        <div className='flink-box'>
                            <NavLink className='anchors_footer' to={"/Sobre-nós"}>Sobre nós</NavLink>
                            <NavLink className='anchors_footer' to={"/Aviso-Legal-para-Testador-de-Teclado"}>Notícia legal</NavLink>
                            <NavLink className='anchors_footer' to={"/Contate-nos"}>Contate-nos</NavLink>
                            <NavLink className='anchors_footer' to={"POLÍTICA-DE-PRIVACIDADE"}>Política de Privacidade</NavLink>
                        </div>
                    </div>

                    <div className="footer-box ">
                        <div className="contact-box">
                            <h3>GET IN TOUCH</h3>
                        </div>
                        <div className="icon-box">
                            <i className="fab fa-facebook-f"></i>
                            <i className="fab fa-instagram"></i>
                            <i className="fab fa-pinterest"></i>
                        </div>
                    </div>
                    <div className="footer-box">
                        <h3>BOLETIM DE NOTÍCIAS
                        </h3>
                        <input id='input' placeholder='email@exemplo.com' type="email" />
                        <button className="primarybtn">SE INSCREVER
                        </button>
                    </div>
                </div>
                <div className="copyright-box">
                    <div className="copyright">
                        <div className="copy-box flex-box">
                            <p className="flex-box">Copyright ©2023 Todos os direitos reservados | Este modelo é feito com
                                amor Por especialistas</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}