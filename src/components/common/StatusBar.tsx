import React from "react";
import { Platform, View } from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";

/**
 * @description 상단바를 표출하는 컴포넌트입니다
 * @param {Boolean} display : StatusBar가 화면에 표출될지를 결정합니다. 기본값은 true이며, false로 설정시 투명한 StatusBar가 표출됩니다
 * @param {String(ColorHex)} backgroundColor : StatusBar의 색상을 지정합니다. 기본값은 #ffffff입니다
 */
export default function StatusBar({
    display = true,
    backgroundColor = "#ffffff",
}) {
    const height = getStatusBarHeight();

    if (!display)
        return (
            <View style={{ backgroundColor: "#00000000", height: height }} />
        );

    // If Android version is lower then 28,
    // Then never display statusbar
    if (Platform.OS === "android" && Platform.Version < 28) {
        return null;
    }

    return (
        <View style={{ backgroundColor: backgroundColor, height: height }} />
    );
}
