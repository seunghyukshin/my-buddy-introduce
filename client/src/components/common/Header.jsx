import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import { LoginModal } from "../login";
import MenuBar from "./MenuBar";
import * as kakao from "../../utils/KakaoApi";
import { login, logout } from "../../reducers/User";

const Header = () => {
  const userInfo = useSelector((state) => state.userInfo);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const dispatchUserInfo = useDispatch();

  // TO DO : 로그인 성공 시, 로그인 글자 안바뀌는 issue
  const handleLoginSuccess = (user) => {
    dispatchUserInfo(login(user));
    handleCloseModal();
  };
  const handleOpenModal = () => {
    setIsOpenModal(true);
  };
  const handleCloseModal = () => {
    setIsOpenModal(false);
  };

  // TODO : 필요시 reload
  const handleClickLogout = () => {
    dispatchUserInfo(logout());

    if (kakao.hasToken()) {
      kakao.logout();
    }
    // if (fbApi.hasToken()) fbApi.logout();
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
          {userInfo ? (
            <MenuBarContainer>
              <MenuBar onClickLogout={handleClickLogout} />
            </MenuBarContainer>
          ) : (
            <LoginButton onClick={handleOpenModal}>로그인</LoginButton>
          )}
          <LoginModal
            isOpen={isOpenModal}
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

const MenuBarContainer = styled.div`
  height: 100%;
  display: flex;
  float: right;

  margin-top: 5px;
  margin-right: 40px;
  cursor: pointer;
  display: inline;
`;

// const ProfileImage = styled.img`
//   width: 30px;
//   heigth: 30px;
//   border-radius: 10px;
// `;

// const ProfileName = styled.p`
//   color: white;
//   display: inline;
//   padding-left: 10px;
// `;

const LoginButton = styled.a`
  color: white;
  text-decoration: none;
  outline: none;

  float: right;
  padding: 0 20px 0 20px;
  display: inline;

  &:hover {
    cursor: pointer;
    filter: brightness(0.8);
  }
`;

const Ul = styled.ul`
  display: inline;
`;

const Li = styled.li`
  list-style: none;
`;

export default Header;
