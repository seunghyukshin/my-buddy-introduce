import React from "react";
import styled from "styled-components";
import Editor from "../md-editor/Editor";

const Write = () => {
  return (
    <Container>
      <Contents>
        <Title>로스트 아크 (편집)</Title>
        <EditorContainer>
          <Editor></Editor>
        </EditorContainer>
      </Contents>
    </Container>
  )
}

const Container = styled.div`
  width: 100vw;
  min-height:calc(100vh - 100px);
  background-color: #efefef;

  display: flex;
  justify-content: center;
  overflow: hidden;
`;

const Contents = styled.div`
  width: 70vw;
  background-color: white;
  border-right: 1px solid #ccc;
  border-left: 1px solid #ccc;

  box-sizing: border-box;

  display: flex;
  flex-direction: column;

  padding: 20px;
`;

const Title = styled.span`
  color: #373a3c;
  font-size: 40px;
  font-weight: bold;
`;

const EditorContainer = styled.div`
  display:flex;
  margin-top:16px;
  width:100%;
`;

export default Write;