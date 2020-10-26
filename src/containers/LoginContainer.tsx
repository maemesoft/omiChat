import { gql } from "apollo-boost";
import React, { useCallback, useEffect, useState } from "react";
import { useLazyQuery } from "react-apollo";
import LoginComponent from "../components/LoginComponent";

const GET_LOGIN = gql`
    query GetLogin($password: String!, $email: String!) {
        GetLogin(password: $password, email: $email) {
            accountID
        }
    }
`;

function LoginContainer({ navigation }) {
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const [getLogin, getLoginResult] = useLazyQuery(GET_LOGIN);

    useEffect(() => {
        if (getLoginResult.error) {
            console.log(getLoginResult.error);
        } else if (getLoginResult.data) {
            console.log(getLoginResult.data);
            navigation.navigate("main");
        }
    }, [getLoginResult.data, getLoginResult.error]);

    // 로그인 버튼이 눌리면 수행할 함수입니다
    const onLoginPress = useCallback(async () => {
        getLogin({ variables: { email: username, password: password } });
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

export default React.memo(LoginContainer);
