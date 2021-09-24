import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

import LoginButtonImage from "./../../constants/image/logo/kakao_logo.png";
// import { login } from "../../utils/kakaoApi";
const { Kakao } = window;

const KakaoLogin = ({ logOnHandler }) => {
  const onRequestSuccess = (res) => {
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
        logOnHandler(res.data.userInfo);
      });
  };

  const onLoginSucess = () => {
    Kakao.API.request({
      url: "/v2/user/me", //계정 정보를 가져오는 request url
      success: (res) => onRequestSuccess(res),
      fail: function (error) {
        console.log(error);
      },
    });
  };

  // TODO : token 저장
  const onClickHandler = () => {
    Kakao.Auth.login({
      success: (res) => {
        onLoginSucess();
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
      <ButtonText onClick={onClickHandler}>카카오톡으로 시작하기</ButtonText>
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
