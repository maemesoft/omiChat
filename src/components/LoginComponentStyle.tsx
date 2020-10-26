import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    // 로고를 감싸는 상단 Container에 대한 스타일입니다
    logoContainer: {
        flex: 3,
        justifyContent: "center",
    },

    // 로고 이미지의 크기를 지정하는 스타일입니다
    // 로고의 크기는 Xd에서의 크기를 기준으로 책정했습니다
    logo: {
        height: Math.round(Dimensions.get("window").height * 0.1),
        resizeMode: "cover",
    },

    // 로고 이외의 나머지 부분들을 감싸는 전체 Container에 대한 스타일입니다
    container: {
        flex: 5,
        marginLeft: Math.round(Dimensions.get("window").width * 0.05),
        marginRight: Math.round(Dimensions.get("window").width * 0.05),
        marginBottom: Math.round(Dimensions.get("window").height * 0.2),
    },

    // 아이디, 패스워드, 찾기를 감싸는 Container에 대한 스타일입니다
    textContainer: {
        flex: 1,
        justifyContent: "space-evenly",
    },

    // 아이디, 패스워드 입력 창에 대한 스타일입니다
    textInput: {
        borderBottomWidth: 1,
        borderBottomColor: "#cccccc",
        height: 40,
    },

    // 아이디, 패스워드 찾기에 텍스트에 대한 스타일입니다
    textClick: {
        textDecorationLine: "underline",
    },

    // 로그인, 회원가입 버튼을 감싸는 Container에 대한 스타일입니다
    buttonContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "space-evenly",
    },

    // 회원가입 버튼에 대한 스타일입니다
    buttonRegister: {
        width: Math.round(Dimensions.get("window").width * 0.6),
        height: 46,
        borderWidth: 1,
        borderRadius: 23,
        borderColor: "#A18EBF",
        justifyContent: "center",
        alignItems: "center",
    },

    // 회원가입 버튼 내의 텍스트에 대한 스타일입니다
    buttonRegisterText: {
        color: "#A18EBF",
    },
});

export default styles;
