import React from 'react'
import "./Keyboard.css"

const KeyType = () => {
    return (
        <div className="key_definer">
            <div className="key_card">
                <div className="primary_btn">
                    <p>A</p>
                </div>
                <p className="colorType">Normal key state</p>
            </div>
            <div className="key_card">
                <div className="primary_btn hold_key">
                    <p>A</p>
                </div>
                <p className="colorType">Pressed for long time</p>
            </div>
            <div className="key_card">
                <div className="primary_btn active_key">
                    <p>A</p>
                </div>
                <p className="colorType">Key pressed at least once</p>
            </div>
        </div>
    )
}

export default KeyType
