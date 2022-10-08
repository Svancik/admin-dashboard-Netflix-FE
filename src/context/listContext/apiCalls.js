
import { getListsStart, getListsSuccess, getListsFailure, deleteListStart, deleteListSuccess, deleteListFailure, createListSuccess, createListFailure, createListStart } from './ListActions';
import axios from "axios";
// get movie
export const getLists = async (dispatch) => {
    dispatch(getListsStart());
    try {
      const res = await axios.get("/lists", {
        headers: {
          token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
        },        
      });      
      dispatch(getListsSuccess(res.data));
    } catch (err) {
      dispatch(getListsFailure());
    }
  };


//create movie
export const createList = async (list, dispatch) => {
      dispatch(createListStart());
      try {
        const res = await axios.post("/lists/", list, {
          headers: {
            token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
          },        
        });      
        dispatch(createListSuccess(res.data));
      } catch (err) {       
        dispatch(createListFailure());
      }
    };

  //delete movie
  export const deleteList = async (id, dispatch) => {
    dispatch(deleteListStart());
    try {
       await axios.delete("/lists/"+id, {
        headers: {
          token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
        },        
      });      
      dispatch(deleteListSuccess(id));
    } catch (err) {
      dispatch(deleteListFailure());
    }
  };

//   export const updateMovie = async (id, dispatch) => {
//     dispatch(updateMovieStart());
//     try{
//       await axios.put("/movies/"+id,{
//         headers:{
//           token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
//         },
//       });
//       dispatch(updateMovieSuccess(id));
//     }
//     catch (err){
//       dispatch(deleteMovieFailure());
//     }
//   }