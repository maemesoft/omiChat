import { useSelector } from "react-redux";
import { RootState } from "../modules";

export default function useUserInfo() {
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

    return {
        getUserId,
        getUserNickname,
        getUserProfilePic,
        getUserToken,
    };
}
