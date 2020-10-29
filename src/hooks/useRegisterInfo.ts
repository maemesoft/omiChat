import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../modules";
import {
    setId,
    setNickname,
    setPassword,
    setPhoneNum,
    setProfilePic,
} from "../modules/registerInfo";

export default function useRegisterInfo() {
    const dispatch = useDispatch();

    const getRegisterID = useSelector(
        (state: RootState) => state.registerInfo.id
    );
    const getRegisterPassword = useSelector(
        (state: RootState) => state.registerInfo.password
    );
    const getRegisterProfilePic = useSelector(
        (state: RootState) => state.registerInfo.profilePic
    );
    const getRegisterPhoneNum = useSelector(
        (state: RootState) => state.registerInfo.phoneNum
    );
    const getRegisterNickname = useSelector(
        (state: RootState) => state.registerInfo.nickname
    );

    const setRegisterID = useCallback(
        (userID: string) => dispatch(setId(userID)),
        [dispatch]
    );
    const setRegisterPassword = useCallback(
        (password: string) => dispatch(setPassword(password)),
        [dispatch]
    );
    const setRegisterProfilePic = useCallback(
        (profilePic: string) => dispatch(setProfilePic(profilePic)),
        [dispatch]
    );
    const setRegisterPhoneNum = useCallback(
        (phoneNumber: string) => dispatch(setPhoneNum("01012345678")),
        [dispatch]
    );
    const setRegisterNickname = useCallback(
        (nickname: string) => dispatch(setNickname(nickname)),
        [dispatch]
    );

    return {
        getRegisterID,
        getRegisterNickname,
        getRegisterPassword,
        getRegisterPhoneNum,
        getRegisterProfilePic,
        setRegisterID,
        setRegisterNickname,
        setRegisterPassword,
        setRegisterPhoneNum,
        setRegisterProfilePic,
    };
}
