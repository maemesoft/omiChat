import React, { useEffect } from "react";

export default function SplashScreen({ navigation }) {
    useEffect(() => {
        navigation.replace("login");
    }, []);

    return <></>;
}
