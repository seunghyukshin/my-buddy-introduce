import React from "react";
import styled from "styled-components";
import Paragraph from "./Paragraph";
import Index from "./Index";

const Read = (props) => {
  const {data} = props;

  return (
    <Container>
      <Contents>
        <Title>로스트 아크</Title>
        <Index
          data={data}
        />
        {data.map(({subtitle, text}, i) => (
          <Paragraph
            id={`paragraph_${i}`}
            index={i + 1}
            subtitle={subtitle}
            text={text}
          />
          ))}
      </Contents>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  background-color: #efefef;

  display: flex;
  justify-content: center;
  overflow: hidden;
`;

const Contents = styled.div`
  height: 100%;
  width: 70vw;
  background-color: white;
  border-right: 1px solid #ccc;
  border-left: 1px solid #ccc;

  box-sizing: border-box;

  display: flex;
  flex-direction: column;

  padding: 40px;
`;

const Title = styled.span`
  color: #373a3c;
  font-size: 40px;
  font-weight: bold;
`;

export default Read;
