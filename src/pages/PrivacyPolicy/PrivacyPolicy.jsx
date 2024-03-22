import React from 'react'
import "./PrivacyPolicy.css";
import privacyImg from '../../assets/images/privacy_checkup_icon.svg'

const PrivacyPolicy = () => {
    return (
        <div className='privacyPolicy_box'>
            <p className='privacyPolicy_firstPara'>Ao usar nossos serviços, você está nos confiando suas informações. Entendemos que esta é uma grande responsabilidade e trabalhamos duro para proteger suas informações e colocá-lo no controle.
            </p>
            <div className="privacy_imgContainer">
                <img className='privacy_img' src={privacyImg} alt="" />
            </div>
            <p>Construímos uma gama de serviços que ajudam milhões de pessoas diariamente a explorar e interagir com o mundo de novas maneiras. Nossos serviços incluem:
            </p>
            <p><span>• </span>Google apps, sites, and devices, like Search, YouTube, and Google Home</p>
            <p> <span>• </span>Aplicativos, sites e dispositivos do Google, como Pesquisa, YouTube e Google Home
            </p>
            <p><span>• </span>Plataformas como o navegador Chrome e o sistema operacional Android
            </p>
            <p>Você pode usar nossos serviços de diversas maneiras para gerenciar sua privacidade. Por exemplo, você pode se inscrever em uma Conta do Google se quiser criar e gerenciar conteúdo como e-mails e fotos ou ver resultados de pesquisa mais relevantes. E você pode usar muitos serviços do Google quando estiver desconectado ou sem criar uma conta, como pesquisar no Google ou assistir a vídeos no YouTube. Você também pode optar por navegar na web em modo privado, como o modo de navegação anônima do Chrome, que ajuda a manter sua navegação privada de outras pessoas que usam seu dispositivo. E em todos os nossos serviços, você pode ajustar suas configurações de privacidade para controlar se coletamos alguns tipos de dados e como os usamos.
            </p>
            <p>Para ajudar a explicar as coisas da forma mais clara possível, adicionamos exemplos, vídeos explicativos e definições de termos-chave. E se tiver alguma dúvida sobre esta Política de Privacidade, você pode entrar em contato conosco.
            </p>
        </div>
    )
}

export default PrivacyPolicy