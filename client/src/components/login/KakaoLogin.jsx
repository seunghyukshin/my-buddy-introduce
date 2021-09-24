import React from "react";
import styled from "styled-components";
import axios from "axios";

import LoginButtonImage from "./../../constants/image/logo/kakao_logo.png";
// import { login } from "../../utils/kakaoApi";
const { Kakao } = window;

// TODO : utils/kakaoApi.js로 분리
const KakaoLogin = ({ onLoginSuccess }) => {
  const handleKakaoRequestSuccess = (res) => {
    console.log(res);
    const id = res.id;
    const email = res.kakao_account.email;
    const { profile } = res.kakao_account;
    axios
      .post("/api/auth/login", {
        name: profile.nickname,
        email,
        profileImage: profile.profile_image_url,
        social: { kakao: { id } },
      })
      .then((res) => {
        console.log(res.data);
        onLoginSuccess(res.data.userInfo);
      });
  };

  const handleKakaoLoginSuccess = () => {
    Kakao.API.request({
      url: "/v2/user/me",
      success: (res) => handleKakaoRequestSuccess(res),
      fail: function (error) {
        console.log(error);
      },
    });
  };

  const handleClickButton = () => {
    Kakao.Auth.login({
      success: (res) => {
        handleKakaoLoginSuccess();
      },
      fail: (err) => {
        console.error(err);
      },
      scope:
        "profile_nickname,profile_image,account_email,friends,talk_message",
    });
  };

  // const checkVerify = () => {
  //   axios
  //     .get("/api/auth/verify", {
  //       headers: {
  //         "x-access-token": token.accessToken,
  //       },
  //     })
  //     .then((res) => {
  //       console.log(res);
  //     });
  // };

  return (
    <Container>
      <ButtonImage src={LoginButtonImage}></ButtonImage>
      <ButtonText onClick={handleClickButton}>카카오톡으로 시작하기</ButtonText>
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
