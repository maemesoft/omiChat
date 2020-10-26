import React from "react";
import { StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
    TopNavigation,
    TopNavigationAction,
    Icon,
} from "@ui-kitten/components";

/**
 * @description AccessoryLeft로 뒤로가기 버튼을 렌더하는 TopNavigation입니다. 이를 사용하는 스크린은 반드시 Drawer의 아래에서 렌더되어야 합니다
 * @param {boolean} transparent NavigationBar의 투명여부를 지정합니다. 기본값은 false입니다
 * @param {string} title transparent가 false인 경우에 표시할 타이틀 텍스트를 전달합니다. 기본값은 ""입니다
 * @param {boolean} hideBackButton 뒤로가기 아이콘을 렌더하지 않을지 여부를 결정합니다. 기본값은 false입니다
 */
export default function TopNavigationBar({
    transparent = false,
    title = "",
    hideBackButton = false,
}) {
    // Icon의 opacity 값을 지정합니다
    const opacity = transparent ? 0.5 : 1;

    // Declare Navigation for Routing
    const navigation = useNavigation();

    // TopNavigationBar에서 사용할 BackIcon을 생성합니다
    const BackIcon = (props) => {
        return (
            <Icon
                {...props}
                name="chevron-left-outline"
                fill={transparent ? "#ffffff" : "#000000"}
                opacity={opacity}
                style={styles.leftIcons}
            />
        );
    };

    // 뒤로가기 버튼을 렌더합니다
    const renderBackAction = () => (
        <TopNavigationAction
            icon={BackIcon}
            onPress={() => {
                navigation.goBack();
            }}
        />
    );

    const styles = StyleSheet.create({
        // navigation의 배경색을 지정합니다.
        // transparent가 true일 경우 투명으로, 그렇지 않을 경우에는 흰색으로 지정합니다
        navigationBackgroud: {
            backgroundColor: transparent ? "#00000000" : "#ffffff",
        },

        // TopNavigation에서 뒤로가기 버튼의 크기를 지정합니다
        leftIcons: {
            width: 35,
            height: 35,
        },
    });

    return (
        <TopNavigation
            title={title}
            alignment="center"
            accessoryLeft={!hideBackButton && renderBackAction}
            style={styles.navigationBackgroud}
        />
    );
}
