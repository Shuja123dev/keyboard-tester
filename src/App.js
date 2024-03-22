import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css"
import Home from "./pages/Home";
import { Helmet } from "react-helmet";
import Header from "./components/Header";
import About from "./pages/about/Abot";
import Contact from "./pages/Contact/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";

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
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
