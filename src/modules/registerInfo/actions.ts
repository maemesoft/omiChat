import { createAction } from "typesafe-actions";

// Declare Action
const SETID = "register/ID";
const SETPASSWORD = "register/PASSWORD";
const SETPHONENUM = "register/PHONENUM";
const SETNICKNAME = "register/NICKNAME";
const SETPROFILEPIC = "register/PROFILEPIC";

// Declare Action Generate Function
export const setId = createAction(SETID)<string>();
export const setPassword = createAction(SETPASSWORD)<string>();
export const setPhoneNum = createAction(SETPHONENUM)<string>();
export const setNickname = createAction(SETNICKNAME)<string>();
export const setProfilePic = createAction(SETPROFILEPIC)<string>();
