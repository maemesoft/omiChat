import { createReducer } from "typesafe-actions";
import { setId, setNickname, setProfilePic, setToken } from "./actions";
import { userInfoAction, userInfoState } from "./types";

// Declare Initial State
const initialState = {
    id: "",
    nickname: "",
    profilePic: "",
    token: "",
};

// Declare userInfoReducer
const userInfoReducer = createReducer<userInfoState, userInfoAction>(
    initialState
)
    .handleAction(setId, (state, action) => ({ ...state, id: action.payload }))
    .handleAction(setNickname, (state, action) => ({
        ...state,
        nickname: action.payload,
    }))
    .handleAction(setProfilePic, (state, action) => ({
        ...state,
        profilePic: action.payload,
    }))
    .handleAction(setToken, (state, action) => ({
        ...state,
        token: action.payload,
    }));

export default userInfoReducer;
