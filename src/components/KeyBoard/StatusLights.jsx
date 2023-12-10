import React from 'react'

const StatusLights = ({ isCapsLock, isNumLock, isScrollLock }) => {
    const types = [
        {
            text: "1",
            color: isNumLock ? "#dbb921" : "grey"
        },
        {
            text: "A",
            color: isCapsLock ? "#dbb921" : "grey"
        },
        {
            text: "V",
            color: isScrollLock ? "#dbb921" : "grey"
        },
    ]

    return (
        <div className="status_row lights">
            {
                types.map((type) => {
                    return (
                        <div className="status1" key={type.text}>
                            {type.text}
                            <span style={{ background: type.color }}></span>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default StatusLights
