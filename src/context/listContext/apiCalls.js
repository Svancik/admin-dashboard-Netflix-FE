
import { getListsStart, getListsSuccess, getListsFailure  } from './ListActions';
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

// export const createMovie = async (movie, dispatch) => {
//       dispatch(createMovieStart());
//       try {
//         const res = await axios.post("/movies/", movie, {
//           headers: {
//             token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
//           },        
//         });      
//         dispatch(createMovieSuccess(res.data));
//       } catch (err) {       
//         dispatch(createMovieFailure());
//       }
//     };

  // //delete movie
  // export const deleteList = async (id, dispatch) => {
  //   dispatch(deleteMovieStart());
  //   try {
  //      await axios.delete("/movies/"+id, {
  //       headers: {
  //         token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
  //       },        
  //     });      
  //     dispatch(deleteMovieSuccess(id));
  //   } catch (err) {
  //     dispatch(deleteMovieFailure());
  //   }
  // };

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