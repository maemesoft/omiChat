import { ActionType } from "typesafe-actions";
import {
    setId,
    setNickname,
    setPassword,
    setPhoneNum,
    setProfilePic,
} from "./actions";

const actions = { setId, setNickname, setPassword, setPhoneNum, setProfilePic };
export type registerInfoAction = ActionType<typeof actions>;

export type registerInfoState = {
    id: string;
    password: string;
    phoneNum: string;
    nickname: string;
    profilePic: string;
};
