import React from "react";
import { View, SafeAreaView } from "react-native";

import StatusBar from "./StatusBar";
import TopNavigationBar from "./TopNavigationBar";
import TopNavigationBarMenu from "./TopNavigationMenu";

/**
 * @description 앱의 상단바, NavigationBar를 표출해주는 Wrapper Component입니다.
 * @typedef {{start : {x : number, y : number}, end : {x: number, y:number}, colors:Array<string>}} Gradient
 * @param {string} title TopNavigation에 표시할 타이틀 텍스트를 입력합니다
 * @param {boolean} transparent StatusBar와 TopNavigationBar의 투명 여부를 지정합니다.
 * @param {"back" | "menu" | "hide"} navigationIcon TopNavigationBar에 표시할 아이콘을 지정합니다. 기본값은 "back"이며, 아이콘을 표시하지 않을 경우 "hide"를 사용합니다.
 * @param {Gradient} gradient 배경색을 Gradient로 처리할 경우, LinearGradient의 prop을 전달합니다.
 */
export default function Screen(props) {
    // Parse Props
    const { title = "", transparent = false, navigationIcon = "back" } = props;

    return (
        <View style={{ backgroundColor: "#ffffff", flex: 1 }}>
            <StatusBar display={!transparent} />
            {navigationIcon === "menu" ? (
                <TopNavigationBarMenu transparent={transparent} title={title} />
            ) : (
                <TopNavigationBar
                    transparent={transparent}
                    title={title}
                    hideBackButton={navigationIcon === "hide"}
                />
            )}
            <SafeAreaView style={{ flex: 1 }}>{props.children}</SafeAreaView>
        </View>
    );
}
