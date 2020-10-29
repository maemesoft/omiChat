import React, { useEffect, useState } from "react";
import { View, Dimensions, StyleSheet, Text } from "react-native";
import { Button, Divider } from "@ui-kitten/components";

// Import Related Components
import Screen from "../../components/common/Screen";
import PolicyAgreement from "../../components/join/PolicyAgreement";
import ProgressBar from "../../components/join/ProgressBar";

export default function RegisterPolicyAgreement({ navigation }) {
    // 개인정보수집, 위치정보수집 동의와 관련된 State입니다
    const [personalAgreement, setPersonalAgreement] = useState<Boolean>(false);
    const [locationAgreement, setLocationAgreement] = useState<Boolean>(false);

    // 약관 전체 동의하기 버튼의 기능입니다
    const agreeAll = () => {
        if (personalAgreement && locationAgreement) {
            setPersonalAgreement(false);
            setLocationAgreement(false);
        } else {
            setPersonalAgreement(true);
            setLocationAgreement(true);
        }
    };

    useEffect(() => {
        if (__DEV__) navigation.replace("join", { routeParam: "emailInfo" });
    }, []);

    return (
        <Screen title="회원가입">
            <View style={styles.container}>
                <ProgressBar total={3} progress={1} />
                <View style={styles.topContainer}>
                    <Text style={styles.text}>서비스 약관에 동의해주세요.</Text>
                </View>
                <View style={styles.policyContainer}>
                    <PolicyAgreement
                        isChecked={personalAgreement && locationAgreement}
                        onButtonPress={agreeAll}
                        policyText="약관 전체 동의하기"
                        agreeAll={true}
                    />
                    <Divider />
                    <PolicyAgreement
                        isChecked={personalAgreement}
                        onButtonPress={() =>
                            setPersonalAgreement(!personalAgreement)
                        }
                        policyText="[필수] 개인 정보 수집 및 이용 동의"
                        agreeAll={false}
                    />
                    <PolicyAgreement
                        isChecked={locationAgreement}
                        onButtonPress={() =>
                            setLocationAgreement(!locationAgreement)
                        }
                        policyText="[필수] 위치 정보 수집 및 이용 동의"
                        agreeAll={false}
                    />
                    <Button
                        disabled={!personalAgreement || !locationAgreement}
                        onPress={() => {
                            navigation.push("join", {
                                routeParam: "emailInfo",
                            });
                        }}
                    >
                        동의
                    </Button>
                </View>
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

    text: {
        fontSize: 18,
    },

    // "서비스 약관에 동의해주세요"를 감싸는 Container에 대한 스타일입니다
    topContainer: {
        height: 80,
        justifyContent: "center",
    },

    // 약관 동의와 관련된 컴포넌트들을 감싸는 Container에 대한 스타일입니다
    policyContainer: {
        flex: 3,
        justifyContent: "space-evenly",
    },

    // 하단 여백을 만드는 View에 대한 스타일입니다.
    bottomContainer: {
        flex: 5,
    },
});
