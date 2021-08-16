import React from "react";
import axios from "axios";
import KaKaoLogin from "react-kakao-login";

import { KAKAO_API_KEY } from "../config.js";

const KakaoLogin = function () {
  const onKakaoSucess = (res) => {
    axios.get("/api").then((res) => console.log(res));
    console.log(res);
  };
  return (
    <KaKaoLogin
      token={KAKAO_API_KEY}
      onSuccess={onKakaoSucess}
      onFail={console.error}
      onLogout={console.info}
    />
  );
};

export default KakaoLogin;
