import React, { useCallback, useEffect } from "react";
import {
    Dimensions,
    Image,
    Platform,
    StyleSheet,
    TouchableOpacity,
    View,
} from "react-native";
import * as ImagePicker from "expo-image-picker";

// @ts-ignore
import ProfileAdd from "../../asset/join/ProfileAdd.svg";
import useRegisterInfo from "../../hooks/useRegisterInfo";

export default function RegisterProfilePicAdd() {
    const { getRegisterProfilePic, setRegisterProfilePic } = useRegisterInfo();

    useEffect(() => {
        (async () => {
            if (Platform.OS !== "web") {
                const {
                    status,
                } = await ImagePicker.requestCameraRollPermissionsAsync();
                if (status !== "granted") {
                    alert(
                        "Sorry, we need camera roll permissions to make this work!"
                    );
                }
            }
        })();
    }, []);

    const onProfilePress = useCallback(async () => {
        let result: any = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 0,
        });

        if (!result.cancelled) {
            setRegisterProfilePic(result.uri);
        }
    }, []);

    return (
        <View style={style.topContainer}>
            <TouchableOpacity onPress={onProfilePress}>
                <Image
                    style={style.profilePic}
                    source={
                        getRegisterProfilePic
                            ? { uri: getRegisterProfilePic }
                            : require("../../asset/join/defaultProfilePic.png")
                    }
                />
                <ProfileAdd style={style.profileAdd} />
            </TouchableOpacity>
        </View>
    );
}

// Const Value for indicating profilePic related component's size
const profileUnit = Dimensions.get("window").width * 0.3;
const profileAddUnit = profileUnit * 0.3;

const style = StyleSheet.create({
    // Style for topContainer that contains profilePic, Name
    topContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "space-around",
        marginBottom: 30,
    },

    // Style for Profile Picture Image
    profilePic: {
        width: profileUnit,
        height: profileUnit,
        borderRadius: profileUnit / 2,
    },

    // Style for Profile Picture Add Icon
    profileAdd: {
        position: "absolute",
        width: profileAddUnit,
        height: profileAddUnit,
        top: profileUnit - profileAddUnit,
        left: profileUnit - profileAddUnit,
    },
});
