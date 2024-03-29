
import { getMoviesStart, getMoviesFailure, getMoviesSuccess, createMovieStart, createMovieSuccess, createMovieFailure, deleteMovieStart, deleteMovieSuccess, deleteMovieFailure, updateMovieStart, updateMovieSuccess, updateMovieFailure } from './MovieActions';
import axios from "axios";
// get movie
export const getMovies = async (dispatch) => {
    dispatch(getMoviesStart());
    try {
      const res = await axios.get("/movies", {
        headers: {
          token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
        },        
      });      
      dispatch(getMoviesSuccess(res.data));
    } catch (err) {
      dispatch(getMoviesFailure());
    }
  };

export const createMovie = async (movie, dispatch) => {
      dispatch(createMovieStart());
      try {
        const res = await axios.post("/movies/", movie, {
          headers: {
            token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
          },        
        });      
        dispatch(createMovieSuccess(res.data));
      } catch (err) {       
        dispatch(createMovieFailure());
      }
    };

  //delete movie
  export const deleteMovie = async (id, dispatch) => {
    dispatch(deleteMovieStart());
    try {
       await axios.delete("/movies/"+id, {
        headers: {
          token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
        },        
      });      
      dispatch(deleteMovieSuccess(id));
    } catch (err) {
      dispatch(deleteMovieFailure());
    }
  };

  export const updateMovie = async (id, dispatch) => {
    dispatch(updateMovieStart());
    try{
      await axios.put("/movies/"+id,{
        headers:{
          token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
        },
      });
      dispatch(updateMovieSuccess(id));
    }
    catch (err){
      dispatch(deleteMovieFailure());
    }
  }