import { Button } from "@ui-kitten/components";
import React, { useEffect } from "react";
import { useMutation, gql } from "@apollo/client";
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
        getRegisterPassword,
        getRegisterPhoneNum,
    } = getRegisterInfo();

    const onRegisterPress = async () => {
        console.log(getRegisterID);
        console.log(getRegisterPassword);
        console.log(getRegisterPhoneNum);
        console.log(nickname);

        setRegister({
            variables: {
                phoneNum: "01012345678",
                nickname: nickname,
                password: getRegisterPassword,
                email: getRegisterID,
            },
        }).then((result) => {
            console.log(result);
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
