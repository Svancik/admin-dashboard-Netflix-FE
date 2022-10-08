import ListReducer from "./ListReducer";
import {createContext, useReducer } from "react";

const INITIAL_STATE = {
    lists: [],
    isFetching: false,
    error: false
};

//pomocí react metody níže vytvoříme context s iniciálním stavem výše
export const ListContext = createContext(INITIAL_STATE);


export const ListContextProvider = ({children}) =>{
    //pomocí dispatch níže můžeme dispatchovat = odesílat naše statusy
    const [state, dispatch] = useReducer(ListReducer, INITIAL_STATE);

    return(
        //Do AuthContext Provideru budeme vkládat 1. komponentu jako potomka = children
        <ListContext.Provider 
        value={{
            lists: state.lists, 
            isFetching:state.isFetching, 
            error: state.error, 
            dispatch,
        }}> 
        {children} 
        </ListContext.Provider>
    )
}