import React from "react";
import RegisterEmail from "./RegisterEmail";
import RegisterPolicyAgreement from "./RegisterPolicyAgreement";
import RegisterProfilePic from "./RegisterProfilePic";

export default function JoinScreen({ navigation, route }) {
    // Drawer를 사용하는 모든 컴포넌트들은 Drawer에 Prop으로 컴포넌트를 전달해야 합니다
    // 또한 Drawer를 사용하는 컴포넌트들은 내부에서 navigation prop을 받아서 TopNavigationBar에 전달해야 합니다
    switch (route.params.routeParam) {
        case "emailPolicy":
            return <RegisterPolicyAgreement navigation={navigation} />;

        case "emailInfo":
            return <RegisterEmail navigation={navigation} />;

        case "emailProfile":
            return <RegisterProfilePic navigation={navigation} />;

        // case "registerComplete":
        //     return <RegisterComplete navigation={navigation} />;
    }
}
