import React, { useState } from "react";
import styled from "styled-components";

const DropdownMenu = () => {
  const DropdownItem = (props) => {
    return (
      <MenuItem>
        <MenuName>{props.children}</MenuName>
      </MenuItem>
    );
  };

  return (
    <DropdownContainer>
      <DropdownItem>프로필 변경</DropdownItem>
      <DropdownItem>로그아웃</DropdownItem>
    </DropdownContainer>
  );
};

const NavItem = (props) => {
  const [open, setOpen] = useState(false);

  return (
    <NavItemContainer>
      <ProfileImage src={props.img} onClick={() => setOpen(!open)} />
      {open && props.children}
    </NavItemContainer>
  );
};

const MenuBar = (props) => {
  return (
    <NavItem img={props.img}>
      <DropdownMenu></DropdownMenu>
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

const MenuItem = styled.a`
  display: flex;
  align-items: center;
  border-radius: 8px;
  transition: background 500ms;
  padding: 1px;

  &:hover {
    background-color: #525357;
  }
`;

const MenuName = styled.a`
  font-size: 12px;
  color: white;
`;

export default MenuBar;
