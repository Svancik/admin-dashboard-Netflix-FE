import MovieReducer from "./MovieReducer";
import {createContext, useReducer, useEffect} from "react";
import { MovieContext } from './MovieContext';


const INITIAL_STATE = {
    movies: [],
    isFetching: false,
    error: false
};

//pomocí react metody níže vytvoříme context s iniciálním stavem výše
export const MovieContext = createContext(INITIAL_STATE);


//Pokračovat 3:13:24

export const MovieContextProvider = ({children}) =>{
    //pomocí dispatch níže můžeme dispatchovat = odesílat naše statusy
    const [state, dispatch] = useReducer(MovieReducer, INITIAL_STATE);

    return(
        //Do AuthContext Provideru budeme vkládat 1. komponentu jako potomka = children
        <MovieContext.Provider value={{movies: state.movies, isFetching:state.isFetching, error: state.error, dispatch}}> {children} </MovieContext.Provider>

    )
}