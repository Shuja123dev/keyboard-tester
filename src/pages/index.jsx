import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home/Home'
import Header from '../components/Header'
import About from './About/About'
import Footer from '../components/Footer/Footer'
import './style.css'
import Contact from './Contact/Contact'
import PrivacyPolicy from './PrivacyPolicy/PrivacyPolicy'
import LegalNotice from './LegalNotice/LegalNotice'
const home = () => {
    return (
        <>
            <div className="page_container">
                <Header />
                <div className="page_content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/Aviso-Legal-para-Testador-de-Teclado" element={<LegalNotice />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/POLÍTICA-DE-PRIVACIDADE" element={<PrivacyPolicy />} />
                    </Routes>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default home