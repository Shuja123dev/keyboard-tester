import React, { useEffect, useRef } from 'react'

const Input = ({ value, changer }) => {
    const inputRef = useRef(null);

    const activeInput = () => {
        inputRef.current.focus();
    }

    return (
        <input
            className="dispNone"
            spellCheck={false}
            ref={inputRef}
            value={value}
            placeholder={"Tap on the virtual keyboard to start"}
            onChange={(e) => changer(e)}
            onBlur={activeInput}
            autoFocus
        />
    )
}

export default Input
