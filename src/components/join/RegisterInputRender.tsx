import React from "react";
import { Icon } from "@ui-kitten/components";
import { Text, TouchableOpacity } from "react-native";
import RegisterInputStyles from "./RegisterInputStyles";

// renderIcon, isPass의 값에 따라서 아이콘을 렌더하거나, null을 반환하는 컴포넌트입니다
export function IconRender({ renderIcon, isPass }) {
    return renderIcon ? (
        isPass ? (
            <Icon
                width={25}
                height={25}
                fill="#5C9848"
                name="checkmark-circle-2-outline"
            />
        ) : (
            <Icon
                width={25}
                height={25}
                fill="#DE3434"
                name="close-circle-outline"
            />
        )
    ) : null;
}

// renderIcon, isPass의 값에 따라서 글자를 렌더하거나, null을 반환하는 컴포넌트입니다
export function TextRender({ renderIcon, isPass, passText, notPassText }) {
    return renderIcon || (passText && notPassText) ? (
        isPass ? (
            <Text
                style={RegisterInputStyles.passedText}
                accessibilityHint="RegisterInput's pass text"
            >
                {passText}
            </Text>
        ) : (
            <Text
                style={RegisterInputStyles.notPassedText}
                accessibilityHint="RegisterInput's not pass text"
            >
                {notPassText}
            </Text>
        )
    ) : null;
}

// renderButton이 true일 경우 전달받은 값에 따라서 버튼을 생성하는 컴포넌트입니다
export function ButtonRender({ title, onPress, accessibilityHint }) {
    return (
        <TouchableOpacity onPress={onPress} style={RegisterInputStyles.button}>
            <Text
                style={RegisterInputStyles.buttonText}
                accessibilityHint={accessibilityHint}
            >
                {title}
            </Text>
        </TouchableOpacity>
    );
}
