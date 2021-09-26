import React, { useState } from "react";
import styled from "styled-components";

const DropdownMenu = () => {
  const DropdownItem = (props) => {
    return (
      <MenuItem>
        <IconButton>{props.leftIcon}</IconButton>
        {props.children}
      </MenuItem>
    );
  };

  return (
    <DropdownContainer>
      <DropdownItem>신승혁</DropdownItem>
      <DropdownItem leftIcon="🔥">로그아웃</DropdownItem>
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

const IconButton = styled.a`
  width: 12px;
  height: 12px
  background-color: #484a4d;
  border-radius: 50%;
  padding: 5px;
  margin: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: filter 300ms;

  margin-right: 0.5rem;
`;

const DropdownContainer = styled.div`
  position: absolute;
  top: 38px;
  width: 200px;
  transform: translateX(-45%);

  background-color: #008275;
  border: 1px solid #474a4d;
  border-radius: 8px;
  padding: 1rem;
  overflow: hidden;
  transition: height 500ms ease;
`;

const MenuItem = styled.a`
  height: 50px;
  display: flex;
  align-items: center;
  border-radius: 8px;
  transition: background 500ms;
  padding: 0.5rem;
  &:hover {
    background-color: #525357;
  }
`;

export default MenuBar;
