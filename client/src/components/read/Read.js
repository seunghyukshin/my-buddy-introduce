import React from "react";
import styled from "styled-components";
import Editor from "../md/Editor";

const Read = () => {
  return (
    <Container>
      <Contents>
        <Editor></Editor>
      </Contents>
    </Container>
  )
};

const Container = styled.div`
  width:100vw;
  height:100vh;
  background-color: grey;

  display:flex;
  justify-content:center;
  overflow:hidden;
`;

const Contents = styled.div`
  height:100%;
  width:90vw;
  background-color: white;
  border: 0 1px 0 1px solid black;

	box-sizing: border-box;
`;

export default Read;
