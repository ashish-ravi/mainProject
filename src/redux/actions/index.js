import { DECREMENT, INCREMENT, SAVE_FRIENDS, USERS_INFO} from "../types";

export const increment = (payload) => {
    return {
        type:INCREMENT,
        payload: payload,
    };
};

export const decrement = (payload) => {
    return {
        type:DECREMENT,
        payload: payload,
    };
};

//this is redux thunk call for asynchronous 

export const saveFriendsList = (friendsList) => {
    return (dispatch) => {
        dispatch({
            type:SAVE_FRIENDS,
            payload: friendsList
        })
    }
}

export const usersInfo = (info) => {
    return(dispatch) => {
        dispatch({
            type:USERS_INFO,
            payload: info
        })
    }
}