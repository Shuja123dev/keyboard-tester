import React, { useEffect, useState } from 'react'
import "./Keyboard.css"
import windowsKeys from './WindowsKeys';
import StatusLights from './StatusLights';

const KeyBoard = () => {

    const [keyHold, setKeyHold] = useState(false)

    const keyChecker = (enterdKey, keyArray) => {
        let found = false;
        keyArray.mainKeys.map((key, index) => {
            if (enterdKey === key.text || enterdKey === key.shiftTxt || enterdKey === key.name || enterdKey === key.shiftText)
                found = `mainBtn${index + 1}`;
        })
        return found
    }

    let timepressed;
    const handleKeyDown = (event) => {
        const result = keyChecker(event.key, windowsKeys);
        if (result) {
            document.getElementById(result).classList.add("active_key");
            console.log(result);
        }
        console.log(event.key);
        timepressed = setTimeout(() => {
            // console.log("Key is pressed more than 1s");
        }, 1000);

        setKeyHold(true)
    };

    const handleKeyUp = (event) => {
        clearTimeout(timepressed);
    };

    useEffect(() => {

        document.addEventListener('keydown', handleKeyDown);
        document.addEventListener('keyup', handleKeyUp);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.removeEventListener('keyup', handleKeyUp);
        };
    }, []);

    return (
        <>
            <div className="key_board">
                <div className="main_keys">
                    {windowsKeys.mainKeys.map((keyBtn, index) => {
                        return (
                            <>
                                <div className={`primary_btn ${(index > 0 && index < 13) ? "functional_keys" : ""}`} id={`mainBtn${index + 1}`} key={`key${index}`}>
                                    {keyBtn.icon && <img className='mb-1' src={keyBtn.icon} />}
                                    {keyBtn.shiftTxt && <p className='mb-2'>{keyBtn.shiftTxt}</p>}
                                    {keyBtn.text && <p>{keyBtn.text}</p>}
                                </div>
                            </>
                        )
                    })}
                </div>
                <div className="mid_box">
                    <div className='mid_keys'>
                        {windowsKeys.midKeys.map((keyBtn, index) => {
                            return (
                                <>
                                    <div className={`primary_btn`} id={`midBtn${index + 1}`} key={`key${index}`}>
                                        {keyBtn.icon && <img className='mb-1' src={keyBtn.icon} />}
                                        {keyBtn.shiftTxt && <p className='mb-2'>{keyBtn.shiftTxt}</p>}
                                        {keyBtn.text && <p>{keyBtn.text}</p>}
                                    </div>
                                </>
                            )
                        })}
                    </div>
                    <div className="arrow_btns">
                        {windowsKeys.arrowKeys.map((keyBtn, index) => {
                            return (
                                <>
                                    <div className={`primary_btn`} id={`arrowBtn${index + 1}`} key={`key${index}`}>
                                        {keyBtn.icon && <img className='mb-1' src={keyBtn.icon} />}
                                        {keyBtn.shiftTxt && <p className='mb-2'>{keyBtn.shiftTxt}</p>}
                                        {keyBtn.text && <p>{keyBtn.text}</p>}
                                    </div>
                                </>
                            )
                        })}
                    </div>
                </div>

                <div className="last_keys">
                    <StatusLights />
                    <div style={{ display: 'flex' }}>
                        <div className="num_pad">
                            {windowsKeys.numPadKeys.map((keyBtn, index) => {
                                return (
                                    <>
                                        <div className={`primary_btn`} id={`numPadBtn${index + 1}`} key={`key${index}`}>
                                            {keyBtn.icon && <img className='mb-1' src={keyBtn.icon} />}
                                            {keyBtn.shiftTxt && <p className='mb-2'>{keyBtn.shiftTxt}</p>}
                                            {keyBtn.text && <p>{keyBtn.text}</p>}
                                        </div>
                                    </>
                                )
                            })}
                        </div>
                        <div className="lastColumn">
                            <div className={`primary_btn`} id={`numPadBtn14`}>
                                <p>-</p>
                            </div>
                            <div className={`primary_btn`} id={`numPadBtn15`}>
                                <p>+</p>
                            </div>
                            <div className={`primary_btn`} id={`numPadBtn16`}>
                                <p>enter</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default KeyBoard
