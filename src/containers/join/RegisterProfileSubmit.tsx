import { Button } from "@ui-kitten/components";
import React from "react";
import { useMutation, gql } from "@apollo/client";
import useRegisterInfo from "../../hooks/useRegisterInfo";
import useUserInfo from "../../hooks/useUserInfo";
import { uploadProfilePicture } from "../../lib/join/profilePicture";
import { Alert } from "react-native";

const SET_REGISTER = gql`
    mutation SetRegister(
        $phoneNum: String!
        $nickname: String!
        $password: String!
        $email: String!
    ) {
        setRegister(
            phoneNum: $phoneNum
            nickname: $nickname
            password: $password
            email: $email
        )
    }
`;

export default function RegisterProfileSubmit({
    validNickname,
    nickname,
    navigation,
}) {
    const [setRegister, setRegisterResult] = useMutation(SET_REGISTER);
    const {
        getRegisterID,
        getRegisterPassword,
        getRegisterProfilePic,
    } = useRegisterInfo();
    const { setUserID, setUserNickname, setUserToken } = useUserInfo();

    const onRegisterPress = () => {
        setRegister({
            variables: {
                phoneNum: "01012345678",
                nickname: nickname,
                password: getRegisterPassword,
                email: getRegisterID,
            },
        })
            .then(async (result) => {
                setUserID(getRegisterID);
                setUserNickname(nickname);
                setUserToken(result.data.setRegister);

                console.log(result.data.setRegister);

                // Execute Profile Upload
                const profileUpload = await uploadProfilePicture(
                    getRegisterProfilePic
                );

                // If Profile Upload Successed, Route to Register Complete
                // If Profile Upload Fails, Show Alert
                if (profileUpload === true) {
                    navigation.replace("join", {
                        routeParam: "registerComplete",
                    });
                } else {
                    Alert.alert(
                        "프로필 사진 오류",
                        "프로필 사진 업로드 중 에러가 발생했습니다. 다시 시도해주세요",
                        [{ text: "OK" }],
                        { cancelable: false }
                    );
                }
            })
            .catch((err) => console.log(err));
    };

    return (
        <Button
            children="회원가입"
            onPress={onRegisterPress}
            disabled={!validNickname}
        />
    );
}
