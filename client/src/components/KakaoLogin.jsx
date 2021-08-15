import React from "react";
import KaKaoLogin from "react-kakao-login";

import { KAKAO_API_KEY } from "../config.js";

const KakaoLogin = function () {
  const onKakaoSucess = (res) => {
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
