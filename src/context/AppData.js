import React from 'react'
import { useState } from 'react';
import { createContext } from 'react'

const AppContext = createContext();

const AppData = ({ children }) => {

    const [keyValue, setKeyValue] = useState();
    const [isMac, setIsMac] = useState(true);

    return (
        <AppContext.Provider value={{ keyValue, setKeyValue, isMac, setIsMac }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppData
export { AppContext }
