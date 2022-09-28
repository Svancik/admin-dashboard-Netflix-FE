const MovieReducer = (state, action) =>{
    //action type jsou data z AuthActions a mohou tedy být: "LOGIN_START" "LOGIN_SUCCESS" "LOGIN_FAILURE"
    switch (action.type){
        // níže je returnován obj {} Initial State
        case "GET_MOVIES_START":
            return {
              movies: [],
              isFetching: true,
              error: false,
            };
          case "GET_MOVIES_SUCCESS":
            return {
              movies: action.payload,
              isFetching: false,
              error: false,
            };
          case "GET_MOVIES_FAILURE":
            return {
              movies: [],
              isFetching: false,
              error: true,
            };
    }
}

export default MovieReducer;