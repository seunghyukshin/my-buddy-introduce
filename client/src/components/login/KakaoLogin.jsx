import React, { useState } from "react";
import axios from "axios";
import KaKaoLogin from "react-kakao-login";

const { KAKAO_API_KEY } = process.env;

const KakaoLogin = () => {
  const [token, setToken] = useState("");
  const onKakaoSucess = (res) => {
    const { profile } = res;
    const { access_token } = res.response;
    axios
      .post("/api/auth/login", {
        name: profile.properties.nickname,
        // email: "abc@naver.com",
        social: { kakao: { id: profile.id, accessToken: access_token } },
      })
      .then((res) => {
        console.log(res.data.token);
        setToken(res.data.token);
      });
  };

  const checkVerify = () => {
    axios
      .get("/api/auth/verify", {
        headers: {
          "x-access-token": token.accessToken,
        },
      })
      .then((res) => {
        console.log(res);
      });
  };
  return (
    <KaKaoLogin
      token={KAKAO_API_KEY}
      onSuccess={onKakaoSucess}
      onFail={console.error}
      onLogout={console.info}
      // getProfile={true}
    />
  );
};

export default KakaoLogin;
