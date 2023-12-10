import React, { useContext, useEffect, useState } from 'react'
import "./Keyboard.css"
import windowsKeys from './WindowsKeys';
import StatusLights from './StatusLights';
import macKeys from './MacKeys';
import { AppContext } from '../../context/AppData';

const KeyBoard = () => {

    const { isMac, setIsMac } = useContext(AppContext);
    const [isCapsLock, setIsCapsLock] = useState(false);
    const [isNumLock, setIsNumLock] = useState(false);
    const [isScrollLock, setIsScrollLock] = useState(false);

    const keyChecker = (enterdKey, keyArray) => {
        let found = false;
        keyArray.mainKeys.map((key, index) => {
            if (enterdKey.code === key.code) {
                return found = `mainBtn${index + 1}`;
            }
        }) && keyArray.midKeys.map((key, index) => {
            if (enterdKey.code === key.code) {
                console.log(enterdKey.code + " is key");
                return found = `midBtn${index + 1}`;
            }
        }) && keyArray.arrowKeys.map((key, index) => {
            if (enterdKey.code === key.code) {
                console.log(enterdKey.code + " is key");
                return found = `arrowBtn${index + 1}`;
            }
        }) && keyArray.numPadKeys.map((key, index) => {
            if (enterdKey.code === key.code) {
                console.log(enterdKey.code + " is key");
                return found = `numPadBtn${index + 1}`;
            }
        })
        return found
    }

    let timePressed = 0, result;
    const handleKeyDown = (event) => {
        result = keyChecker(event, isMac ? macKeys : windowsKeys);
        timePressed = performance.now();
        console.log(event.code);
        if (result) {
            document.getElementById(result).classList.add("active_key");
        }

        setIsCapsLock(event.getModifierState('CapsLock'));
        setIsNumLock(event.getModifierState('NumLock'));
        setIsScrollLock(event.getModifierState('ScrollLock'));

        setTimeout(() => {
            const currentTime = performance.now();
            const holdDuration = currentTime - timePressed;

            if (holdDuration > 150) {
                document.getElementById(result).classList.add("hold_key")
            }

            timePressed = null;

        }, 100);
    };

    const handleKeyUp = (event) => {

    };

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        document.addEventListener('keyup', handleKeyUp);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.removeEventListener('keyup', handleKeyUp);
        };
    }, [isMac]);

    return (
        <>
            <div className="key_board">
                <div className="main_keys">
                    {
                        isMac ? macKeys.mainKeys.map((keyBtn, index) => {
                            return (
                                <>
                                    <div className={`primary_btn ${(index > 0 && index < 13) ? "functional_keys" : ""}`} id={`mainBtn${index + 1}`} key={`key${index}`}>
                                        {keyBtn.icon && <img className='mb-1' src={keyBtn.icon} />}
                                        {keyBtn.shiftTxt && <p className='mb-2'>{keyBtn.shiftTxt}</p>}
                                        {keyBtn.text && <p>{keyBtn.text}</p>}
                                    </div>
                                </>
                            )
                        }) :
                            windowsKeys.mainKeys.map((keyBtn, index) => {
                                return (
                                    <>
                                        <div className={`primary_btn ${(index > 0 && index < 13) ? "functional_keys" : ""}  ${index === 69 || index === 73 ? "window_key" : ""}`} id={`mainBtn${index + 1}`} key={`key${index}`}>
                                            {keyBtn.icon && <img className='mb-1' src={keyBtn.icon} />}
                                            {keyBtn.shiftTxt && <p className='mb-2'>{keyBtn.shiftTxt}</p>}
                                            {keyBtn.text && <p>{keyBtn.text}</p>}
                                        </div>
                                    </>
                                )
                            })
                    }
                </div>
                <div className="mid_box">
                    <div className='mid_keys'>
                        {
                            isMac ? macKeys.midKeys.map((keyBtn, index) => {
                                return (
                                    <>
                                        <div className={`primary_btn ${index < 3 ? "functional_keys" : ""}`} id={`midBtn${index + 1}`} key={`key${index}`}>
                                            {keyBtn.icon && <img className='mb-1' src={keyBtn.icon} />}
                                            {keyBtn.shiftTxt && <p className='mb-2'>{keyBtn.shiftTxt}</p>}
                                            {keyBtn.text && <p>{keyBtn.text}</p>}
                                        </div>
                                    </>
                                )
                            })
                                :
                                windowsKeys.midKeys.map((keyBtn, index) => {
                                    return (
                                        <>
                                            <div className={`primary_btn`} id={`midBtn${index + 1}`} key={`key${index}`}>
                                                {keyBtn.icon && <img className='mb-1' src={keyBtn.icon} />}
                                                {keyBtn.shiftTxt && <p className='mb-2'>{keyBtn.shiftTxt}</p>}
                                                {keyBtn.text && <p>{keyBtn.text}</p>}
                                            </div>
                                        </>
                                    )
                                })
                        }
                    </div>
                    <div className="arrow_btns">
                        {
                            isMac ? macKeys.arrowKeys.map((keyBtn, index) => {
                                return (
                                    <>
                                        <div className={`primary_btn`} id={`arrowBtn${index + 1}`} key={`key${index}`}>
                                            {keyBtn.icon && <img className='mb-1' src={keyBtn.icon} />}
                                            {keyBtn.shiftTxt && <p className='mb-2'>{keyBtn.shiftTxt}</p>}
                                            {keyBtn.text && <p>{keyBtn.text}</p>}
                                        </div>
                                    </>
                                )
                            }) :
                                windowsKeys.arrowKeys.map((keyBtn, index) => {
                                    return (
                                        <>
                                            <div className={`primary_btn`} id={`arrowBtn${index + 1}`} key={`key${index}`}>
                                                {keyBtn.icon && <img className='mb-1' src={keyBtn.icon} />}
                                                {keyBtn.shiftTxt && <p className='mb-2'>{keyBtn.shiftTxt}</p>}
                                                {keyBtn.text && <p>{keyBtn.text}</p>}
                                            </div>
                                        </>
                                    )
                                })
                        }
                    </div>
                </div>

                <div className="last_keys">

                    <StatusLights
                        isCapsLock={isCapsLock}
                        isNumLock={isNumLock}
                        isScrollLock={isScrollLock}
                    />

                    <div style={{ display: 'flex' }}>
                        <div className="num_pad">
                            {
                                isMac ? macKeys.numPadKeys.map((keyBtn, index) => {
                                    return (
                                        <>
                                            <div className={`primary_btn`} id={`numPadBtn${index + 1}`} key={`key${index}`}>
                                                {keyBtn.icon && <img className='mb-1' src={keyBtn.icon} />}
                                                {keyBtn.shiftTxt && <p className='mb-2'>{keyBtn.shiftTxt}</p>}
                                                {keyBtn.text && <p>{keyBtn.text}</p>}
                                            </div>
                                        </>
                                    )
                                }) :
                                    windowsKeys.numPadKeys.map((keyBtn, index) => {
                                        return (
                                            <>
                                                <div className={`primary_btn`} id={`numPadBtn${index + 1}`} key={`key${index}`}>
                                                    {keyBtn.icon && <img className='mb-1' src={keyBtn.icon} />}
                                                    {keyBtn.shiftTxt && <p className='mb-2'>{keyBtn.shiftTxt}</p>}
                                                    {keyBtn.text && <p>{keyBtn.text}</p>}
                                                </div>
                                            </>
                                        )
                                    })
                            }
                        </div>
                        {
                            isMac ?
                                <div className="lastColumn">
                                    <div className={`primary_btn`} id={`numPadBtn14`}>
                                        <p>*</p>
                                    </div>
                                    <div className={`primary_btn`} id={`numPadBtn15`}>
                                        <p>-</p>
                                    </div>
                                    <div className={`primary_btn`} id={`numPadBtn16`}>
                                        <p>+</p>
                                    </div>
                                    <div className={`primary_btn long_btn`} id={`numPadBtn17`}>
                                        <p>enter</p>
                                    </div>
                                </div>
                                :
                                <div className="lastColumn">
                                    <div className={`primary_btn`} id={`numPadBtn14`}>
                                        <p>-</p>
                                    </div>
                                    <div className={`primary_btn long_btn`} id={`numPadBtn15`}>
                                        <p>+</p>
                                    </div>
                                    <div className={`primary_btn long_btn`} id={`numPadBtn16`}>
                                        <p>enter</p>
                                    </div>
                                </div>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default KeyBoard
