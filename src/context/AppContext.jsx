import React, {createContext, useState} from "react";

export const AppContext = createContext(undefined);

export function AppProvider(props) {

    const [page, setPage] = useState(0);

    return (
        <AppContext.Provider value={{page, setPage}}>
            {props.children}
        </AppContext.Provider>
    );
}