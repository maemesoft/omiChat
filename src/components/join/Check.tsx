import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { Icon } from "@ui-kitten/components";

// 체크되지 않은 상태의 버튼을 나타냅니다
export const UnChecked = () => {
    return (
        <View style={styles.CheckContainer}>
            <Icon
                width={20}
                height={20}
                fill="#CCCCCC"
                name="checkmark-outline"
            />
        </View>
    );
};

// 체크된 상태의 버튼을 나타냅니다
export const Checked = () => {
    return (
        <View style={styles.CheckContainer}>
            <Icon
                width={25}
                height={25}
                fill="#A18EBF"
                name="checkmark-circle-2"
            />
        </View>
    );
};

export default function Check({ isChecked, onPress }) {
    return (
        <TouchableOpacity onPress={onPress}>
            {isChecked ? <Checked /> : <UnChecked />}
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    CheckContainer: {
        justifyContent: "center",
        alignItems: "center",
        width: 24,
        height: 24,
        borderRadius: 12,
        borderColor: "#A18EBF",
        borderWidth: 1,
    },
});
