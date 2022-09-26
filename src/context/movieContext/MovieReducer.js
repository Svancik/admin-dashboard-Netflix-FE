const MovieReducer = (state, action) =>{
    //action type jsou data z AuthActions a mohou tedy být: "LOGIN_START" "LOGIN_SUCCESS" "LOGIN_FAILURE"
    switch (action.type){
        // níže je returnován obj {} Initial State
        case "GET_MOVIES_START":
            return {
                movies: [],
                isFetching: true,
                error: false
            };

        case "GET_MOVIES_SUCCESS":
            return {
                //z AuthActions dáváme jako payload obj moviesa který nám vrací server / route
                movies: action.payload,
                isFetching: false,
                error: false
            };
            
        case "GET_MOVIES_FAILURE":
            return {
                movies: [],
                isFetching: true,
                error: true
            };
    }
}

export default MovieReducer;