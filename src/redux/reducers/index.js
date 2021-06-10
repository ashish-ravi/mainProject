import { DECREMENT, INCREMENT, SAVE_FRIENDS, USERS_INFO} from "../types";

const INITIAL_STATE = {
    counter: 0,
    isLoggedIn: false,
    friends: [],
    usrs: [],
}

const reducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case INCREMENT:
            return{
                ...state,
                counter:state.counter + action.payload,
            };
        case DECREMENT: 
            return{
                ...state,
                counter:state.counter - action.payload,
            };
        case SAVE_FRIENDS:
            return{
                ...state,
                friends: action.payload,
            }
        case USERS_INFO:
            return{
                ...state,
                usrs: action.payload,
            }
        default:
            return state;
    }
};

export default reducer;
