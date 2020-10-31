import React from "react";
import ChatRoomScreen from "./ChatRoomScreen";

export default function MainScreen({ navigation, route }) {
    switch (route.params.routeParam) {
        case "chat":
            return <ChatRoomScreen navigation={navigation} />;
    }
}
