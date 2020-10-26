import React, { useEffect } from "react";
import { RegisterInput } from "../../components/join/RegisterInput";

export default function RegisterProfileNickname({
    nickname,
    setNickname,
    validNickname,
    setValidNickname,
}) {
    // Test the nickname has valid format when nickname changes
    useEffect(() => {
        const nicknameRegex = /^[a-zA-Z0-9가-힣]{2,10}$/;
        setValidNickname(nicknameRegex.test(nickname));
    }, [nickname]);

    return (
        <RegisterInput
            title="닉네임"
            placeholder="영문, 숫자, 한글 조합 2-10자리"
            value={nickname}
            onChangeText={(text) => {
                setNickname(text);
            }}
            secureTextEntry={false}
            isPass={validNickname}
            passText="사용가능한 닉네임입니다"
            notPassText="사용할 수 없는 닉네임입니다"
        />
    );
}
