import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <Container>
      <StyledHeader>
        <Nav>
          <Home>내 친 소</Home>
          <Ul>
            <Li><Anchor>랭킹</Anchor></Li>
            <Li><Anchor>최근 변경</Anchor></Li>
          </Ul>
          <LoginButton>로그인</LoginButton>
        </Nav>
      </StyledHeader>
    </Container>
  )
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

  &:hover{
    cursor:pointer;
  }
`;

const Anchor = styled.a`
  color: white;
  text-decoration: none;
  outline: none;

  float: left;
  padding: 0 20px 0 20px;
  display: inline;

  &:hover{
    background-color: rgba(255, 255, 255, 0.226);
    cursor:pointer;
  }
`;

const LoginButton = styled.a`
  color: white;
  text-decoration: none;
  outline: none;

  float: right;
  padding: 0 20px 0 20px;
  display: inline;

  &:hover{
    cursor:pointer;
  }
`;

const Ul = styled.ul`
  display: inline;
`;

const Li = styled.li`
	list-style: none;
`;

export default Header;
