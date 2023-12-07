import React from 'react'
import keyborard from "../assets/images/keyborard.svg"
import mouse from "../assets/images/mouse.svg"
import microphone from "../assets/images/microphone.svg"
import webcam from "../assets/images/webcam.svg"
import recognition from "../assets/images/recognition.svg"
import { NavLink } from 'react-router-dom'

const Tools = () => {
    return (
        <section className="tools">
            <div className="container">
                <div className="tools-content">
                    <div className="tools-row">
                        <div className="tools-col">
                            <img src={keyborard} alt="" loading="lazy" />
                            <NavLink>Keyboard Test</NavLink>
                        </div>
                        <div className="tools-col">
                            <img src={mouse} alt="" loading="lazy" />
                            <NavLink>Mouse Test</NavLink>
                        </div>
                        <div className="tools-col">
                            <img src={microphone} alt="" loading="lazy" />
                            <NavLink>Microphone Test</NavLink>
                        </div>
                        <div className="tools-col">
                            <img src={webcam} alt="" loading="lazy" />
                            <NavLink>WebCam Test</NavLink>
                        </div>
                        <div className="tools-col">
                            <img src={recognition} alt="" loading="lazy" />
                            <NavLink>Voice Recorder</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Tools
