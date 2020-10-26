import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Checked, UnChecked } from "./Check";

/**
 *
 * @param {Boolean} isChecked 체크박스가 체크됐는지 상태를 나타냅니다
 * @param {function} onButtonPress 체크박스가 클릭됐을때 수행할 함수입니다
 * @param {String} policyText 표시할 약관 텍스트를 지정합니다
 * @param {Boolean} agreeAll 약관 전체 동의하기를 나타내면 true, 그 이외에는 false로 지정합니다
 * @param {function} onPolicyViewPress 개별 약관을 클릭했을 때 실행할 함수입니다. agreeAll이 False인 경우에는 필수입니다
 */

export default function PolicyAgreement(props) {
    const {
        isChecked,
        onButtonPress,
        policyText,
        agreeAll,
        onPolicyViewPress,
    } = props;

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.policyContainer}
                onPress={onButtonPress}
            >
                {isChecked ? <Checked /> : <UnChecked />}
                {agreeAll ? (
                    <Text style={styles.policyTextAgreeAll}>{policyText}</Text>
                ) : (
                    <View style={styles.policyTextContainer}>
                        <Text style={styles.policyText}>{policyText}</Text>
                    </View>
                )}
            </TouchableOpacity>
            <Text onPress={onPolicyViewPress} style={styles.policyView}>
                보기
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    // Style for Container that wraps entire components
    container: {
        alignContent: "space-between",
        flexDirection: "row",
    },

    // PolicyAgreement 컴포넌트 중, 동의 버튼 및 텍스트를 감싸는 Container의 스타일을 지정합니다
    policyContainer: {
        flex: 1,
        alignItems: "center",
        flexDirection: "row",
    },

    // 약관 전체 동의 텍스트의 스타일을 지정합니다
    policyTextAgreeAll: {
        fontSize: 20,
        fontWeight: "700",
        marginLeft: 10,
    },

    // 개별 약관의 텍스트와 '보기'버튼을 감싸는 Container의 스타일을 지정합니다
    policyTextContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginLeft: 10,
    },

    // 개별 약관 텍스트의 스타일을 지정합니다
    policyText: {
        fontSize: 18,
    },

    // 개별 약관의 '보기' 버튼의 스타일을 지정합니다
    policyView: {
        fontSize: 16,
        color: "#CCCCCC",
        textDecorationLine: "underline",
    },
});
