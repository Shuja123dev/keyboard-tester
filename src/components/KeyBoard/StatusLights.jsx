import React from 'react'

const StatusLights = () => {
    const types = [
        {
            text: "1",
            color: "grey"
        },
        {
            text: "A",
            color: "#dbb921"
        },
        {
            text: "V",
            color: "grey"
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
