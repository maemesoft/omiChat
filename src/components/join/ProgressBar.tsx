import React from "react";
import { StyleSheet, View } from "react-native";

/**
 * @description 회원가입시, 상단에 표시되는 진행상태 표시바를 반환하는 Component입니다
 * @param {number} total ProgressBar의 전체 단계를 지정합니다
 * @param {number} progress 전체 단계 중, 현재 진행 단계를 지정합니다
 */
function ProgressBar({ total, progress }) {
    // Prop Description
    // total(Number) : ProgressBar의 전체 단계를 지정합니다
    // progress(Number) : 현재 진행 단계를 지정합니다

    const processBar = [];

    for (let i = 0; i < total; i++) {
        if (i < progress) {
            processBar.push(<View style={styles.progressed} key={i} />);
        } else {
            processBar.push(<View style={styles.notProgressed} key={i} />);
        }
    }

    return <View style={styles.container}>{processBar}</View>;
}

const styles = StyleSheet.create({
    // ProgressBar의 전체를 감싸는 Container에 대한 스타일입니다
    container: {
        height: 20,
        flexDirection: "row",
        alignItems: "center",
    },

    // 진행된 ProgressBar에 대한 스타일입니다
    progressed: {
        flex: 1,
        margin: 1,
        height: 4,
        borderRadius: 2,
        backgroundColor: "#A18EBF",
    },

    // 아직 진행되지 않은 ProgressBar에 대한 스타일입니다
    notProgressed: {
        flex: 1,
        margin: 1,
        height: 4,
        borderRadius: 2,
        backgroundColor: "#EBEBEB",
    },
});

export default React.memo(ProgressBar);
