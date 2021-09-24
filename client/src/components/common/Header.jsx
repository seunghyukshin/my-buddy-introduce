import React, { useState } from "react";
import styled from "styled-components";

import { LoginModal } from "../login";
const Header = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [isLogin, setIsLogin] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const handleLoginSuccess = (user) => {
    setIsLogin(true);
    setUserInfo(user);
    handleCloseModal();
  };
  const handleOpenModal = () => {
    setIsOpen(true);
  };
  const handleCloseModal = () => {
    setIsOpen(false);
  };

  // navigation bar 구현하기
  const handleProfileClick = () => {
    if (window.Kakao.Auth.getAccessToken()) {
      console.log("로그인 상태입니다!");
    }
  };
  return (
    <Container>
      <StyledHeader>
        <Nav>
          <Home>내 친 소</Home>
          <Ul>
            <Li>
              <Anchor>랭킹</Anchor>
            </Li>
            <Li>
              <Anchor>최근 변경</Anchor>
            </Li>
          </Ul>
          {isLogin && userInfo ? (
            <ProfileContainer onClick={handleProfileClick}>
              <ProfileImage src={userInfo.profileImage}></ProfileImage>
              <ProfileName>{userInfo.name}</ProfileName>
            </ProfileContainer>
          ) : (
            <LoginButton onClick={handleOpenModal}>로그인</LoginButton>
          )}
          <LoginModal
            isOpen={isOpen}
            onLoginSuccess={handleLoginSuccess}
            onCloseModal={handleCloseModal}
          />
        </Nav>
      </StyledHeader>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 40px;
  margin: 0 auto;

  background-color: #008275;
`;

const StyledHeader = styled.header`
  margin: 0 40px 0 40px;

  font-size: 20px;
  font-weight: bold;
  line-height: 40px;
`;

const Nav = styled.nav`
  vertical-align: middle;
`;

const Home = styled.a`
  color: white;
  text-decoration: none;
  outline: none;

  float: left;
  padding: 0 20px 0 20px;
  display: inline;

  &:hover {
    cursor: pointer;
  }
`;

const Anchor = styled.a`
  color: white;
  text-decoration: none;
  outline: none;

  float: left;
  padding: 0 20px 0 20px;
  display: inline;

  &:hover {
    background-color: rgba(255, 255, 255, 0.226);
    cursor: pointer;
  }
`;

const ProfileContainer = styled.div`
  display: flex;
  float: right;

  margin-right: 40px;
  cursor: pointer;
  justify-content: center;
  align-items: center;
`;

const ProfileImage = styled.img`
  width: 30px;
  heigth: 30px;
  border-radius: 10px;
`;

const ProfileName = styled.p`
  color: white;
  display: inline;
  padding-left: 10px;
`;

const LoginButton = styled.a`
  color: white;
  text-decoration: none;
  outline: none;

  float: right;
  padding: 0 20px 0 20px;
  display: inline;

  &:hover {
    cursor: pointer;
  }
`;

const Ul = styled.ul`
  display: inline;
`;

const Li = styled.li`
  list-style: none;
`;

export default Header;
