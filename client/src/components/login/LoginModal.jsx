import React from "react";
import styled from "styled-components";

import KakaoLogin from "./KakaoLogin";
import FacebookLogin from "./FacebookLogin";
const LoginModal = ({ isOpen, logOnHandler, onCloseHandler }) => {
  return isOpen ? (
    <Container>
      <ContentsContainer>
        <CloseButton onClick={onCloseHandler}>&times;</CloseButton>
        <Title>내친소 로그인</Title>
        <LoginButtonContainer>
          <KakaoLogin logOnHandler={logOnHandler} />
          <FacebookLogin />
        </LoginButtonContainer>
      </ContentsContainer>
    </Container>
  ) : null;
};

const Container = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.6);
`;

const ContentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  box-sizing: border-box;
  width: 400px;
  margin: 9em auto;
  padding: 10px;
`;

const CloseButton = styled.a`
  line-height: 10px;
  margin-left: auto;
  cursor: pointer;
`;

const Title = styled.p`
  text-align: center;
`;

const LoginButtonContainer = styled.div`
  margin: 10px auto;
  margin-top: 40px;
`;

export default LoginModal;
