import { useState } from "react";
import { createContext, useContext } from "react";

const StoreContext = createContext()
const initialState = { 
    user: null,
    pic: []
}

export function StoreProvider(props){
    const [state, setState] = useState(initialState)
    return(
        <StoreContext.Provider value = {{
            ...state,
            setState
        }}>
            {props.children}
        </StoreContext.Provider>
    )
}
export const useStore = () => useContext(StoreContext)