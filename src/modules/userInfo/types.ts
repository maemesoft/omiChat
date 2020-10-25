import { ActionType } from "typesafe-actions";
import * as actions from "./actions";

export type userInfoAction = ActionType<typeof actions>;

export type userInfoState = {
    id: string;
    nickname: string;
    profilePic: string;
    token: string;
};
