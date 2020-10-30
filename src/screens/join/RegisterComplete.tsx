import { Button } from "@ui-kitten/components";
import React from "react";
import { View, Dimensions, StyleSheet, Text } from "react-native";

// Import Related Components
import Screen from "../../components/common/Screen";

export default function RegisterComplete({ navigation }) {
    return (
        <Screen title="회원가입" navigationIcon="hide">
            <View style={styles.container}>
                <View style={styles.textContainer}>
                    <Text style={styles.largeText}>가입이 완료되었습니다!</Text>
                </View>
                <Button
                    onPress={() => {
                        navigation.push("main");
                    }}
                >
                    메인화면 이동
                </Button>

                <View style={styles.bottomContainer} />
            </View>
        </Screen>
    );
}

const styles = StyleSheet.create({
    // TopNavigationBar 이외의 나머지 부분들을 감싸는 전체 Container에 대한 스타일입니다
    container: {
        flex: 1,
        marginLeft: Math.round(Dimensions.get("window").width * 0.05),
        marginRight: Math.round(Dimensions.get("window").width * 0.05),
    },

    // 물개 이미지를 감싸는 Container에 대한 스타일입니다
    imageContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },

    // 물개 이미지에 대한 스타일입니다
    image: {
        width: Math.round(Dimensions.get("window").width * 0.7),
        height: Math.round(Dimensions.get("window").width * 0.7),
    },

    // 가입 완료 문구를 감싸는 Container에 대한 스타일입니다
    textContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "space-evenly",
    },

    // 가입 완료 문구 중, 큰 글자에 대한 스타일입니다
    largeText: {
        fontSize: 28,
        color: "#808080",
    },

    // 가입 완료 문구 중, 작은 글자에 대한 스타일입니다
    smallText: {
        fontSize: 16,
        lineHeight: 30,
        textAlign: "center",
        color: "#000000",
    },

    // 하단 여백과 관련된 Container의 스타일입니다
    bottomContainer: {
        flex: 1,
    },
});
