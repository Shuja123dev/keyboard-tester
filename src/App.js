import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css"
import Home from "./pages/Home";
import { Helmet } from "react-helmet";
import Header from "./components/Header";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";
import LegalNotice from "./pages/LegalNotice/LegalNotice";

function App() {

  return (
    <>
      <BrowserRouter>
        <Helmet>
          <title>Testador de teclado - Teclas de teclado de teste on-line</title>
          <meta name="description"
            content="Teste de Teclado é uma ferramenta de diagnóstico projetada para avaliar e solucionar problemas de funcionalidade e desempenho do teclado."
          />
          <link rel="canonical" href="https://testeteclado.com.br/" />
        </Helmet>

        <div id="wrapper">
          <main id="main">
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Aviso-Legal-para-Testador-de-Teclado" element={<LegalNotice />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/POLÍTICA-DE-PRIVACIDADE" element={<PrivacyPolicy />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
