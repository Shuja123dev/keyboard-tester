import React from 'react'
import './Footer.css'

const footer = () => {
    return (
        <>
            <div className="footer">
                <div className="row first_row">
                    <div className="first_col col-lg-4 col-md-6 col-sm-12">
                        <p className="app_links">Facebook</p>
                        <p className="app_links">Twitter</p>
                        <p className="app_links">Instagram</p>
                        <p className="app_links">Pinterest</p>
                    </div>
                    <div className="second_col col-lg-4 col-md-6 col-sm-12">
                        <p className="footer_mainPara">
                            Keyboardtester.info é uma ferramenta de teclado diferente que fornece um blog focado em resolver todos os seus problemas de teclado em um só lugar. Nosso objetivo principal é o Teste de Teclado e você encontrará algumas outras ferramentas relacionadas junto com ele. Como parte do programa para editores do Google AdSense, ganhamos por meio de anúncios gráficos em nosso site.

                        </p>
                    </div>
                    <div className="third_col col-lg-4 col-md-6 col-sm-12">
                        <p>218 Hwy 18 C9</p>
                        <p>San Bruno</p>
                        <p>California, 95252</p>
                        <p>  United States</p>
                        <p>(202) 264-3874</p>
                    </div>
                </div>
                <div className="row second_row">
                    <p className="col-lg-6 col-md-12 col-sm-12">Keyboard Tester 2024 All Rights Reserved</p>
                    <ul className="footer_links col-lg-6 col-md-12  col-sm-12">
                        <li><a className="anchor_tag" href="">Sobre nós</a></li>
                        <li><a href="">Contacte-nos</a></li>
                        <li><a href="">Política de Privacidade</a></li>
                        <li><a href="">Termos e Condições</a></li>
                    </ul>
                </div>
            </div >
        </>
    )
}

export default footer