import { Spinner } from "@ui-kitten/components";
import React from "react";
import { StyleSheet, View } from "react-native";

const LoadingIndicator = (props) => (
    <View style={[props.style, styles.indicator]}>
        <Spinner size="small" />
    </View>
);

const styles = StyleSheet.create({
    indicator: {
        justifyContent: "center",
        alignItems: "center",
    },
});

export default React.memo(LoadingIndicator);
