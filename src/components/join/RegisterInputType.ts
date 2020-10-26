import {
    ReturnKeyTypeOptions,
    NativeSyntheticEvent,
    TextInputSubmitEditingEventData,
} from "react-native";

export default interface RegisterInputType {
    title: string;
    placeholder?: string;
    value: string;
    onChangeText: (text: string) => void;
    secureTextEntry: boolean;
    renderIcon?: boolean;
    renderButton?: boolean;
    isPass?: boolean;
    passText?: string;
    notPassText?: string;
    buttonTitle?: string;
    editable?: boolean;
    onPress?: any;
    returnKeyType?: ReturnKeyTypeOptions;
    onSubmitEditing?: (
        e: NativeSyntheticEvent<TextInputSubmitEditingEventData>
    ) => void;
}
