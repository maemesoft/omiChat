import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import Screen from "../components/common/Screen";
import LoginContainer from "../containers/LoginContainer";

export default function LoginScreen({ navigation }) {
    return (
        <Screen title="Welcome!">
            <View style={styles.container}>
                <LoginContainer navigation={navigation} />
            </View>
        </Screen>
    );
}

const styles = StyleSheet.create({
    // 로고 이외의 나머지 부분들을 감싸는 전체 Container에 대한 스타일입니다
    container: {
        flex: 5,
        marginLeft: Math.round(Dimensions.get("window").width * 0.05),
        marginRight: Math.round(Dimensions.get("window").width * 0.05),
        marginBottom: Math.round(Dimensions.get("window").height * 0.2),
    },
});
