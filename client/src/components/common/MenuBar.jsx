import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const DropdownMenu = (props) => {
  return (
    <DropdownContainer>
      <DropdownItem>
        <ItemName>프로필 변경</ItemName>
      </DropdownItem>

      <DropdownItem onClick={props.onClickLogout}>
        <ItemName>로그아웃</ItemName>
      </DropdownItem>
    </DropdownContainer>
  );
};

const NavItem = (props) => {
  // TO DO : Dropdown Menu 밖 클릭 시, setOpen(false);
  const [open, setOpen] = useState(false);
  const { profileImage } = useSelector((state) => state.userInfo);

  return (
    <NavItemContainer>
      <ProfileImage src={profileImage} onClick={() => setOpen(!open)} />
      {open && props.children}
    </NavItemContainer>
  );
};

const MenuBar = (props) => {
  return (
    <NavItem>
      <DropdownMenu onClickLogout={props.onClickLogout}></DropdownMenu>
    </NavItem>
  );
};

const NavItemContainer = styled.div`
  width: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProfileImage = styled.img`
  width: 30px;
  heigth: 30px;
  border-radius: 10px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const DropdownContainer = styled.div`
  position: absolute;
  top: 36px;
  width: 140px;
  transform: translateX(-45%);

  background-color: #008275;
  border: 1px solid #474a4d;
  border-radius: 8px;
  padding: 8px;
  overflow: hidden;
  transition: height 500ms ease;
`;

const DropdownItem = styled.div`
  display: flex;
  align-items: center;
  border-radius: 8px;
  transition: background 500ms;
  padding: 1px;

  &:hover {
    background-color: #525357;
  }
`;

const ItemName = styled.a`
  font-size: 12px;
  color: white;
`;

export default MenuBar;
