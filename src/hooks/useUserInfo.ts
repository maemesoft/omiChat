import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../modules";
import {
    setId,
    setNickname,
    setProfilePic,
    setToken,
} from "../modules/userInfo";

export default function useUserInfo() {
    const dispatch = useDispatch();

    const getUserId = useSelector((state: RootState) => state.userInfo.id);
    const getUserNickname = useSelector(
        (state: RootState) => state.userInfo.nickname
    );
    const getUserProfilePic = useSelector(
        (state: RootState) => state.userInfo.profilePic
    );
    const getUserToken = useSelector(
        (state: RootState) => state.userInfo.token
    );

    const setUserID = useCallback((userID: string) => dispatch(setId(userID)), [
        dispatch,
    ]);
    const setUserProfilePic = useCallback(
        (profilePic: string) => dispatch(setProfilePic(profilePic)),
        [dispatch]
    );
    const setUserToken = useCallback(
        (token: string) => dispatch(setToken(token)),
        [dispatch]
    );
    const setUserNickname = useCallback(
        (nickname: string) => dispatch(setNickname(nickname)),
        [dispatch]
    );

    return {
        getUserId,
        getUserNickname,
        getUserProfilePic,
        getUserToken,
        setUserID,
        setUserNickname,
        setUserToken,
        setUserProfilePic,
    };
}
