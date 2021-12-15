import React from "react";
import styled from "styled-components";

import LoginButtonImage from "./../../constants/image/logo/kakao_logo.png";
import * as kakao from "../../utils/KakaoApi";
import * as rest from "../../utils/RestApi";

const KakaoLogin = ({ onLoginSuccess }) => {
  const handleKakaoRequestSuccess = (res) => {
    const id = res.id;
    const email = res.kakao_account.email;
    const { profile } = res.kakao_account;

    rest.login(id, email, profile).then((data) => {
      onLoginSuccess(data);
    });
  };

  const handleKakaoLoginSuccess = () => {
    kakao.requestUserInfo(handleKakaoRequestSuccess);
  };

  const handleClickButton = () => {
    kakao.login(handleKakaoLoginSuccess);
  };

  return (
    <Container onClick={handleClickButton}>
      <ButtonImage src={LoginButtonImage}></ButtonImage>
      <ButtonText>카카오톡으로 시작하기</ButtonText>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 280px;
  height: 40px;
  margin: 0 0 28px 0;
  background-color: #fddc3f;
  border-radius: 12px;
  cursor: pointer;
  &:hover {
    box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.2);
  }
`;

const ButtonImage = styled.img`
  cursor: pointer;
`;

const ButtonText = styled.p`
  display: inline;
  margin: 0 auto;
  font-size: 12px;
  font-weight: bold;
  color: #000000 85%;
`;

export default KakaoLogin;
