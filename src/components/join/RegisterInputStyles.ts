import { StyleSheet } from "react-native";

const RegisterInputStyles = StyleSheet.create({
    /////////////// STYLE FOR COMPONENTS ///////////////
    // Style for View that wrap entire components
    container: {
        height: 90,
        marginBottom: 12,
    },

    // Style for View that wrap title text, textInput
    topConatiner: {
        height: 70,
        justifyContent: "space-evenly",
        marginBottom: 3,
    },

    // TextInput과 아이콘을 감싸는 버튼의 스타일을 지정합니다
    underlineContainer: {
        height: 40,
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: "#CCCCCC",
        alignItems: "center",
        paddingLeft: 5,
        paddingRight: 5,
    },

    /////////////// STYLE FOR TEXT ///////////////
    // 이 Component의 타이틀 텍스트의 스타일을 지정합니다
    title: {
        fontSize: 16,
        fontWeight: "700",
    },

    // 값을 입력할 TextInput의 스타일을 지정합니다
    textInput: {
        flex: 1,
        height: 40,
    },

    // TextInput 내부에 유효한 값이 입력되었을 때 표시할 글자의 스타일을 지정합니다
    passedText: {
        color: "#5C9848",
    },

    // TextInput 내부에 유효하지 않은 값이 입력되었을 때 표시할 글자의 스타일을 지정합니다
    notPassedText: {
        color: "#DE3434",
    },

    /////////////// STYLE FOR Button ///////////////
    // renderButton이 true일 경우 표시되는 버튼에 대한 스타일을 지정합니다
    button: {
        height: 30,
        paddingLeft: 20,
        paddingRight: 20,
        borderWidth: 1,
        borderRadius: 15,
        borderColor: "#A18EBF",
        alignItems: "center",
        justifyContent: "center",
    },

    // renderButton이 true일 경우 표시되는 버튼의 글자에 대한 스타일을 지정합니다
    buttonText: {
        color: "#A18EBF",
    },
});

export default RegisterInputStyles;
