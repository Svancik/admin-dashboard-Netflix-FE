import AuthReducer from "./AuthReducer";
import {createContext, useReducer} from "react";


const INITIAL_STATE = {
    user: null,
    isFetching: false,
    error: false
};

//pomocí react metody níže vytvoříme context s iniciálním stavem výše
export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({children}) =>{
    //pomocí dispatch níže můžeme dispatchovat = odesílat naše statusy
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

    return(
        //Do AuthContext Provideru budeme vkládat 1. komponentu jako potomka = children
        <AuthContext.Provider value={{user: state.user, isFetching:state.isFetching, error: state.error, dispatch}}> {children} </AuthContext.Provider>

    )
}