import { createAction } from "typesafe-actions";

// Declare Action
const SETID = "user/USERID";
const SETNICKNAME = "user/NICKNAME";
const SETPROFILEPIC = "user/PROFILEPIC";
const SETTOKEN = "user/SETTOKEN";

// Declare Action Generate Function
export const setId = createAction(SETID)<string>();
export const setNickname = createAction(SETNICKNAME)<string>();
export const setProfilePic = createAction(SETPROFILEPIC)<string>();
export const setToken = createAction(SETTOKEN)<string>();
