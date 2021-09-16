import React from "react";
import { useLocation } from "react-router";
import styled from "styled-components";
import Editor from "../md-editor/Editor";

const Write = () => {
  const location = useLocation();

  return (
    <Container>
      <Contents>
        <Title>로스트 아크 (편집)</Title>
        <EditorContainer>
          <Editor text={location.state.text}></Editor>
        </EditorContainer>
        <ButtonContainer>
          <Confirm>저장</Confirm>
        </ButtonContainer>
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

const ButtonContainer = styled.div`
  display:flex;
  flex-direction:column;
  width:100%;
  align-items:flex-end;
`;

const Confirm = styled.a`
  display:flex;
  justify-content:center;

  text-decoration:none;

  color: #fff;
  background-color: #0275d8;
  border-color: #0275d8;
  
  padding:.2rem .7rem;
  margin: 10px;
  
  width: 100px;
  font-size: .9rem;
  font-weight: 400;

  &:hover{
    background-color: #025aa5;
    border-color: #025aa5;
    cursor:pointer;
  }
`;


export default Write;