import { Button } from "@ui-kitten/components";
import React, { useRef } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "./LoginComponentStyle";
import LoadingIndicator from "./common/LoadingIndicator";

const LoginComponent = ({
    username,
    setUsername,
    password,
    setPassword,
    onLoginPress,
    onRegisterPress,
    loginLoading,
}) => {
    const passwordRef = useRef(null);

    return (
        <>
            <View style={styles.textContainer}>
                <TextInput
                    style={styles.textInput}
                    placeholder="아이디"
                    onChangeText={(text) => setUsername(text)}
                    value={username}
                    returnKeyType="next"
                    onSubmitEditing={() => {
                        passwordRef.current.focus();
                    }}
                />
                <TextInput
                    style={styles.textInput}
                    placeholder="패스워드"
                    onChangeText={(text) => setPassword(text)}
                    value={password}
                    secureTextEntry={true}
                    returnKeyType="send"
                    ref={passwordRef}
                    onSubmitEditing={onLoginPress}
                />
                <Text style={styles.textClick}>
                    아이디나 비밀번호를 잊으셨나요?
                </Text>
            </View>
            <View style={styles.buttonContainer}>
                <Button
                    disabled={!username || !password || loginLoading}
                    onPress={onLoginPress}
                    appearance={loginLoading ? "outline" : "filled"}
                    accessoryLeft={loginLoading ? LoadingIndicator : null}
                >
                    로그인
                </Button>
                <TouchableOpacity onPress={onRegisterPress}>
                    <View style={styles.buttonRegister}>
                        <Text style={styles.buttonRegisterText}>회원가입</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </>
    );
};

export default React.memo(LoginComponent);
