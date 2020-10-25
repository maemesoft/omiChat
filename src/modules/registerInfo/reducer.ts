import { createReducer } from "typesafe-actions";
import {
    setId,
    setNickname,
    setPassword,
    setPhoneNum,
    setProfilePic,
} from "./actions";
import { registerInfoAction, registerInfoState } from "./types";

// Declare Initial State
const initialState = {
    id: "",
    password: "",
    phoneNum: "",
    nickname: "",
    profilePic: "",
};

// Declare userInfoReducer
const userInfoReducer = createReducer<registerInfoState, registerInfoAction>(
    initialState
)
    .handleAction(setId, (state, action) => ({ ...state, id: action.payload }))
    .handleAction(setPassword, (state, action) => ({
        ...state,
        password: action.payload,
    }))
    .handleAction(setPhoneNum, (state, action) => ({
        ...state,
        phoneNum: action.payload,
    }))
    .handleAction(setProfilePic, (state, action) => ({
        ...state,
        profilePic: action.payload,
    }))
    .handleAction(setNickname, (state, action) => ({
        ...state,
        nickname: action.payload,
    }));

export default userInfoReducer;
