import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
    createStackNavigator,
    StackNavigationOptions,
    TransitionPresets,
} from "@react-navigation/stack";

// Import Screen Index
import SplashScreen from "./screens/Splash";
import LoginScreen from "./screens/Login";
import JoinScreen from "./screens/join";
import MainScreen from "./screens/main";
import SettingScreen from "./screens/menu/setting";

function Routes() {
    // Create StackNavigator
    const Stack = createStackNavigator();

    const TransitionScreenOptions = {
        ...TransitionPresets.SlideFromRightIOS, // This is where the transition happens
    };

    const screenOption: StackNavigationOptions = {
        headerShown: false,
    };

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={TransitionScreenOptions}>
                <Stack.Screen
                    name="splash"
                    component={SplashScreen}
                    options={screenOption}
                />
                <Stack.Screen
                    name="login"
                    component={LoginScreen}
                    options={screenOption}
                />
                <Stack.Screen
                    name="join"
                    component={JoinScreen}
                    options={screenOption}
                />
                <Stack.Screen
                    name="main"
                    component={MainScreen}
                    options={screenOption}
                />
                <Stack.Screen
                    name="setting"
                    component={SettingScreen}
                    options={screenOption}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default React.memo(Routes);
