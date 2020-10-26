import React, { useEffect, useState } from "react";
import { View, Text, TextInput } from "react-native";
import { IconRender, TextRender, ButtonRender } from "./RegisterInputRender";
import RegisterInputType from "./RegisterInputType";
import RegisterInputStyles from "./RegisterInputStyles";

/**
 * @description 회원가입, 비밀번호 재설정 등에서 값을 입력하는 컴포넌트입니다
 * @param {string} title 이 컴포넌트에서 표시할 제목을 지정합니다
 * @param {string} placeholder 값을 입력하기 전에 보여줄 힌트를 지정합니다. 기본값은 ""입니다
 * @param {string} value TextInput에서 표시할 값을 지정합니다
 * @param {function} onChangeText TextInput에서 값이 변경되면 수행할 함수를 지정합니다
 * @param {boolean} secureTextEntry TextInput의 값을 가릴지를 결정합니다
 * @param {boolean} renderIcon 우측에 아이콘과 하단 텍스트를 렌더할지 결정합니다. 기본값은 true이며, false일 경우 isPass, passText, notPassText를 입력하지 않아도 됩니다
 * @param {boolean} renderButton 컴포넌트의 우측에 버튼을 렌더할지를 결정합니다. 기본값은 false이며, false일 경우 buttonTitle, onPress를 입력하지 않아도 됩니다
 * @param {boolean} isPass 현재 입력된 값을 사용할 수 있으면 True, 그렇지 않으면 False로 지정합니다. 기본값은 false입니다
 * @param {string} passText isPass가 True일 경우 표시할 텍스트를 지정합니다. 기본값은 ""입니다
 * @param {string} notPassText isPass가 False일 경우 표시할 텍스트를 지정합니다. 기본값은 ""입니다
 * @param {string} buttonTitle 버튼을 렌더할 경우 버튼에 표시할 텍스트를 지정합니다. 기본값은 ""입니다
 * @param {boolean} editable RegisterInput의 TextInput의 편집 가능 여부를 지정합니다. 기본값은 true입니다
 * @param {function} onPress 버튼을 렌더할 경우, 버튼을 눌렀을 때 표시할 텍스트를 입력합니다. 기본값은 아무 행동도 하지 않는 함수입니다
 * @param {string} returnKeyType 키보드 returnKey Type을 설정합니다. 기본값은 "done" 입니다
 * @param {function} ref 실제 엘리먼트를 조작합니다
 * @param {string} onSubmitEditing Callback that is called when the text input's submit button is pressed with the argument {nativeEvent: {text, eventCount, target}}.
 */

export const RegisterInput = React.forwardRef(
    (
        {
            title,
            placeholder = "",
            value,
            onChangeText,
            secureTextEntry,
            renderIcon = true,
            renderButton = false,
            isPass = false,
            passText = "",
            notPassText = "",
            buttonTitle = "",
            editable = true,
            onPress = () => {},
            returnKeyType = "done",
            onSubmitEditing,
        }: RegisterInputType,
        ref: any
    ) => {
        const [validVisible, setValidVisible] = useState(false);

        useEffect(() => {
            if (value != "") {
                setValidVisible(true);
            } else {
                setValidVisible(false);
            }
        }, [value]);

        return (
            <View style={RegisterInputStyles.container}>
                <View style={RegisterInputStyles.topConatiner}>
                    {title !== "" && (
                        <Text
                            style={RegisterInputStyles.title}
                            accessibilityHint="RegisterInput's Title"
                        >
                            {title}
                        </Text>
                    )}
                    <View style={RegisterInputStyles.underlineContainer}>
                        <TextInput
                            style={RegisterInputStyles.textInput}
                            placeholder={placeholder}
                            value={value}
                            onChangeText={(text) => onChangeText(text)}
                            secureTextEntry={secureTextEntry}
                            returnKeyType={returnKeyType}
                            ref={ref}
                            onSubmitEditing={onSubmitEditing}
                            editable={editable}
                            accessibilityHint="RegisterInput's TextInput"
                        />
                        {renderButton ? (
                            <ButtonRender
                                title={buttonTitle}
                                onPress={onPress}
                                accessibilityHint="RegisterInput's renderButton"
                            />
                        ) : (
                            validVisible && (
                                <IconRender
                                    isPass={isPass}
                                    renderIcon={renderIcon}
                                />
                            )
                        )}
                    </View>
                </View>
                {validVisible && (
                    <TextRender
                        renderIcon={renderIcon}
                        isPass={isPass}
                        passText={passText}
                        notPassText={notPassText}
                    />
                )}
            </View>
        );
    }
);
