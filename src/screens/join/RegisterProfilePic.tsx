import React, { useState } from "react";
import { View, Dimensions, StyleSheet, Text } from "react-native";

// Import Related Components
import Screen from "../../components/common/Screen";
import ProgressBar from "../../components/join/ProgressBar";
import RegisterProfilePicAdd from "../../containers/join/RegisterProfilePicAdd";
import RegisterProfileNickname from "../../containers/join/RegisterProfileNickname";
import RegisterProfileSubmit from "../../containers/join/RegisterProfileSubmit";

/**
 * @description 회원가입 중, 프로필 사진 및 닉네임을 등록하는 스크린입니다.
 * @param {"email"|"kakao"|"apple"} accountType 회원가입을 진행중인 계정의 종류를 입력합니다. 기본값은 "email"입니다
 */

export default function RegisterProfilePic({
    navigation,
    accountType = "email",
}) {
    // Declare State that store imagePath, nickname, validNickname
    const [imagePath, setImagePath] = useState("");
    const [nickname, setNickname] = useState("");
    const [validNickname, setValidNickname] = useState(false);

    return (
        <Screen title="회원가입">
            <View style={style.container}>
                {accountType === "email" ? (
                    <ProgressBar total={4} progress={4} />
                ) : (
                    <ProgressBar total={2} progress={2} />
                )}
                <View style={style.textContainer}>
                    <Text style={style.topText}>프로필을 설정해주세요.</Text>
                </View>
                <RegisterProfilePicAdd />
                <View style={style.bottomContainer}>
                    <RegisterProfileNickname
                        nickname={nickname}
                        setNickname={setNickname}
                        validNickname={validNickname}
                        setValidNickname={setValidNickname}
                    />
                    <RegisterProfileSubmit
                        validNickname={validNickname}
                        nickname={nickname}
                        navigation={navigation}
                    />
                    <Text style={style.bottomText}>
                        프로필 사진은 일부 서비스에서 상호 프로필{"\n"}
                        요청시에만 보여집니다.
                    </Text>
                </View>
            </View>
        </Screen>
    );
}

const style = StyleSheet.create({
    // Style for entire container
    container: {
        flex: 1,
        marginLeft: Math.round(Dimensions.get("window").width * 0.05),
        marginRight: Math.round(Dimensions.get("window").width * 0.05),
        alignItems: "center",
        justifyContent: "center",
    },

    // Style for Container that wraps Text "프로필을 설정해주세요"
    textContainer: {
        height: 80,
        justifyContent: "center",
    },

    // Style for bottomContainer
    bottomContainer: {
        flex: 5,
    },

    // Style for text "프로필을 설정해주세요."
    topText: {
        fontSize: 18,
    },

    // Style for Profile Nickname Text Input
    bottomText: {
        marginTop: 20,
        fontSize: 14,
        lineHeight: 20,
        color: "#808080",
        textAlign: "center",
    },
});
