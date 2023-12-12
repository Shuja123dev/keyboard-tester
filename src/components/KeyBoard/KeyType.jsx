import React from 'react'
import "./Keyboard.css"

const KeyType = () => {
    return (
        <div className="key_definer">
            <div className="key_card">
                <div className="primary_btn">
                    <p>A</p>
                </div>
                <p className="colorType"> Estado-chave normal</p>
            </div>
            <div className="key_card">
                <div className="primary_btn hold_key">
                    <p>A</p>
                </div>
                <p className="colorType">Pressionado por muito tempo</p>
            </div>
            <div className="key_card">
                <div className="primary_btn active_key">
                    <p>A</p>
                </div>
                <p className="colorType">Tecla pressionada pelo menos uma vez</p>
            </div>
        </div>
    )
}

export default KeyType
