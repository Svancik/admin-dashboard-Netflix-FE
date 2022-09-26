
import { getMoviesStart, getMoviesFailure, getMoviesSuccess } from './MovieActions';

export const getMovies = async (dispatch) =>{
getMoviesStart();
try{
    const res = axios.get("/movies", {headers: 
        {token: "Bearer" + localStorage.getItem("user").accesToken}¨
        
    });
dispatch(getMoviesSuccess(res.data));
} catch(err){
    dispatch(getMoviesFailure());
}
}