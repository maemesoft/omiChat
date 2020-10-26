import React from "react";
import { StyleSheet } from "react-native";
import {
    TopNavigation,
    TopNavigationAction,
    Icon,
} from "@ui-kitten/components";
import { useNavigation, DrawerActions } from "@react-navigation/native";

/**
 * @description AccessoryLeft로 메뉴버튼을 렌더하는 TopNavigationBar입니다. 이를 사용하는 스크린은 반드시 Drawer의 아래에서 렌더되어야 합니다
 * @param {boolean} transparent NavigationBar의 투명여부를 지정합니다. 기본값은 false입니다
 * @param {string} title transparent가 false인 경우에 표시할 타이틀 텍스트를 전달합니다. 기본값은 ""입니다
 */
export default function TopNavigationBarMenu({
    transparent = false,
    title = "",
}) {
    // Icon의 opacity 값을 지정합니다
    const opacity = transparent ? 0.5 : 1;

    // MenuIcon에서 Drawer를 사용할 때 필요한 Navigation을 생성합니다
    const drawerNavigation = useNavigation();

    // TopNavigationBar에서 사용할 MenuIcon을 생성합니다
    const MenuIcon = (props) => {
        return (
            <Icon
                {...props}
                name="menu-outline"
                fill={transparent ? "#ffffff" : "#000000"}
                opacity={opacity}
                style={styles.leftIcons}
            />
        );
    };

    // MenuIcon을 이용하여 AccessoryLeft를 렌더합니다
    const renderAccessoryLeft = () => {
        // Drawer를 닫는 Action은 useNavigation().dispatch()를 이용하여 작성할 수 있습니다
        // https://reactnavigation.org/docs/drawer-based-navigation/#opening-and-closing-drawer
        return (
            <TopNavigationAction
                icon={MenuIcon}
                onPress={() => {
                    drawerNavigation.dispatch(DrawerActions.openDrawer());
                }}
            />
        );
    };

    const styles = StyleSheet.create({
        // navigation의 배경색을 지정합니다.
        // transparent가 true일 경우 투명으로, 그렇지 않을 경우에는 흰색으로 지정합니다
        navigationBackgroud: {
            backgroundColor: transparent ? "#00000000" : "#ffffff",
        },

        // TopNavigation에서 메뉴버튼의 크기를 지정합니다
        leftIcons: {
            width: 35,
            height: 35,
        },
    });

    return (
        <TopNavigation
            accessoryLeft={renderAccessoryLeft}
            style={styles.navigationBackgroud}
            title={!transparent && title}
            alignment="center"
        />
    );
}
