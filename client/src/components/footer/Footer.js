import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Container>
      <Text>
        @ 2021 남궁명 & 신승혁
      </Text>
    </Container>
  )
};

const Container = styled.div`
  border-top: 1px solid #ccc;

  box-sizing: border-box;

  display: flex;
  justify-content: center;
  align-items: center;
  width:100vw;

  height: 60px;
`;

const Text = styled.span`
  text-size: 20px;
`;

export default Footer;
