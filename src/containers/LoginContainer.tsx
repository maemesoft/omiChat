import React, { useCallback, useEffect, useState } from "react";
import { gql, useLazyQuery } from "@apollo/client";
import LoginComponent from "../components/LoginComponent";
import useUserInfo from "../hooks/useUserInfo";

export default function LoginContainer({ navigation }) {
    const GET_LOGIN = gql`
        query GetLogin($password: String!, $email: String!) {
            getLogin(password: $password, email: $email)
        }
    `;

    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const [getLogin, getLoginResult] = useLazyQuery(GET_LOGIN);

    const { setUserToken } = useUserInfo();

    useEffect(() => {
        if (getLoginResult.error) {
            console.log(getLoginResult.error);
        } else if (getLoginResult.data) {
            console.log(getLoginResult.data);
            setUserToken(getLoginResult.data);
            navigation.navigate("main", { routeParam: "chat" });
        }
    }, [getLoginResult.data, getLoginResult.error]);

    // 로그인 버튼이 눌리면 수행할 함수입니다
    const onLoginPress = useCallback(async () => {
        getLogin({ variables: { password: password, email: username } });
    }, [username, password]);

    const onRegisterPress = useCallback(() => {
        navigation.push("join", {
            routeParam: "emailPolicy",
        });
    }, []);

    return (
        <LoginComponent
            username={username}
            setUsername={setUsername}
            password={password}
            setPassword={setPassword}
            onLoginPress={onLoginPress}
            onRegisterPress={onRegisterPress}
            loginLoading={getLoginResult.loading}
        />
    );
}
