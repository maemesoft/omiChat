import { Button } from "@ui-kitten/components";
import React, { useState, useEffect, useRef } from "react";
import { View, Dimensions, StyleSheet, Text } from "react-native";

// Import Related Components
import Screen from "../../components/common/Screen";
import ProgressBar from "../../components/join/ProgressBar";
import { RegisterInput } from "../../components/join/RegisterInput";
import useRegisterInfo from "../../hooks/useRegisterInfo";

export default function RegisterEmail({ navigation }) {
    const { setRegisterID, setRegisterPassword } = useRegisterInfo();

    // 계정정보와 관련된 Ref입니다
    const password = useRef(null);
    const passwordVerify = useRef(null);

    // 입력한 계정정보와 관련된 State입니다
    const [userInfo, setUserInfo] = useState({
        email: "",
        password: "",
        passwordVerify: "",
    });

    // 입력한 계정정보의 유효여부와 관련된 State입니다
    const [infoPass, setInfoPass] = useState({
        email: false,
        password: false,
        passwordVerify: false,
    });

    // userInfo.email가 변경되었을 때 해당 값이 이메일의 형식을 갖고 있는지 검사합니다
    useEffect(() => {
        const emailRegex = /^\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/;

        setInfoPass({
            ...infoPass,
            email: emailRegex.test(userInfo.email),
        });
    }, [userInfo.email]);

    // userInfo.password가 변경되었을 때 해당값이 올바른 비밀번호의 값을 가지고 있는지를 검사합니다
    useEffect(() => {
        const passwordRegex = /^(?=.*[\d])(?=.*[a-zA-Z])([a-zA-Z\d]){8,20}$/;
        const password = passwordRegex.test(userInfo.password);

        setInfoPass({
            ...infoPass,
            password: password,
            passwordVerify:
                userInfo.password === userInfo.passwordVerify && password,
        });
    }, [userInfo.password]);

    // userInfo.passwordVerify가 변경되었을 때
    // userInfo.password가 유효한 값을 가지고 있는지, userInfo.passwordVerify가 password와 동일한지를 검사합니다
    useEffect(() => {
        setInfoPass({
            ...infoPass,
            passwordVerify:
                userInfo.password === userInfo.passwordVerify &&
                infoPass.password,
        });
    }, [userInfo.passwordVerify]);

    // Indicate the method when next button Pressed
    const onNextPress = () => {
        // store email, password to Redux
        setRegisterID(userInfo.email);
        setRegisterPassword(userInfo.password);

        // Route to emailProfile
        navigation.push("join", { routeParam: "emailProfile" });
    };

    return (
        <Screen title="회원가입">
            <View style={styles.container}>
                <ProgressBar total={3} progress={2} />
                <View style={styles.topContainer}>
                    <Text style={styles.text}>계정 정보를 입력해주세요.</Text>
                </View>
                <RegisterInput
                    title="아이디"
                    placeholder="이메일주소"
                    value={userInfo.email}
                    onChangeText={(text) => {
                        setUserInfo({ ...userInfo, email: text });
                    }}
                    secureTextEntry={false}
                    isPass={infoPass.email}
                    passText="사용가능한 아이디입니다"
                    notPassText="사용할 수 없는 아이디입니다"
                    returnKeyType="next"
                    onSubmitEditing={() => {
                        password.current.focus();
                    }}
                />
                <RegisterInput
                    title="비밀번호"
                    placeholder="영문, 숫자 조합 8-20자리"
                    value={userInfo.password}
                    onChangeText={(text) => {
                        setUserInfo({ ...userInfo, password: text });
                    }}
                    secureTextEntry={true}
                    isPass={infoPass.password}
                    passText="사용가능한 비밀번호입니다"
                    notPassText="사용할 수 없는 비밀번호입니다"
                    returnKeyType="next"
                    ref={password}
                    onSubmitEditing={() => {
                        passwordVerify.current.focus();
                    }}
                />
                <RegisterInput
                    title="비밀번호 확인"
                    placeholder="영문, 숫자, 한글 조합 2-10자리"
                    value={userInfo.passwordVerify}
                    onChangeText={(text) => {
                        setUserInfo({ ...userInfo, passwordVerify: text });
                    }}
                    secureTextEntry={true}
                    isPass={infoPass.passwordVerify}
                    passText="확인되었습니다"
                    notPassText="입력한 비밀번호와 일치하지 않습니다"
                    returnKeyType="done"
                    ref={passwordVerify}
                />
                <Button
                    disabled={
                        !infoPass.email ||
                        !infoPass.password ||
                        !infoPass.passwordVerify
                    }
                    onPress={onNextPress}
                >
                    다음
                </Button>
            </View>
        </Screen>
    );
}

const styles = StyleSheet.create({
    // TopNavigationBar 이외의 나머지 부분들을 감싸는 전체 Container에 대한 스타일입니다
    container: {
        marginLeft: Math.round(Dimensions.get("window").width * 0.05),
        marginRight: Math.round(Dimensions.get("window").width * 0.05),
    },

    // "계정 정보를 입력해주세요"에 대한 스타일입니다
    text: {
        fontSize: 18,
    },

    // "계정 정보를 입력해주세요"를 감싸는 Container에 대한 스타일입니다
    topContainer: {
        height: 80,
        justifyContent: "center",
    },
});
