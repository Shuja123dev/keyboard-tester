import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css"
import Home from "./pages/Home";
import { Helmet } from "react-helmet";

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
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
