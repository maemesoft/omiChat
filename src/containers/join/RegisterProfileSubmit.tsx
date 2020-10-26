import { Button } from "@ui-kitten/components";
import { gql } from "apollo-boost";
import React, { useEffect } from "react";
import { useMutation } from "react-apollo";
import getRegisterInfo from "../../hooks/useRegisterInfo";

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
        ) {
            accountID
        }
    }
`;

export default function RegisterProfileSubmit({ validNickname, nickname }) {
    const [setRegister, setRegisterResult] = useMutation(SET_REGISTER);
    const {
        getRegisterID,
        getRegisterNickname,
        getRegisterPassword,
        getRegisterPhoneNum,
        getRegisterProfilePic,
    } = getRegisterInfo();

    const onRegisterPress = async () => {
        setRegister({
            variables: {
                phoneNum: getRegisterPhoneNum,
                nickname: getRegisterNickname,
                password: getRegisterPassword,
                email: getRegisterID,
            },
        });
    };

    return (
        <Button
            children="회원가입"
            onPress={onRegisterPress}
            disabled={!validNickname}
        />
    );
}
