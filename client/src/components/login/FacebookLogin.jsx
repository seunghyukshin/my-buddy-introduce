import React from "react";
import styled from "styled-components";

import LoginButtonImage from "./../../constants/image/logo/fb_logo.png";

const FacebookLogin = () => {
  const onClickHandler = () => {};

  return (
    <Container>
      <ButtonImage src={LoginButtonImage}></ButtonImage>
      <ButtonText onClick={onClickHandler}>페이스북으로 시작하기</ButtonText>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 280px;
  margin: 0 0 36px 0;
  background-color: #1877f2;
  border-radius: 12px;
  cursor: pointer;
  &:hover {
    box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.4);
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
  color: #ffffff;
`;

export default FacebookLogin;
