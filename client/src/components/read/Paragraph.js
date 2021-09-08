import React from 'react';
import styled from 'styled-components';
import marked from 'marked';

const Paragraph = (props) => {
  const {index, subtitle, text} = props;

  const renderText = (text) => {
    const __html = marked(text);

    return { __html };
  }; 

  return (
    <Container>
      <Subtitle>
        <HideButton>{`>`}</HideButton>
        <SubtitleNumber>{index}.</SubtitleNumber>
        <SubtitleText>{subtitle}</SubtitleText>
      </Subtitle>
      <SubContents dangerouslySetInnerHTML={renderText(text)}/>
  </Container>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  box-sizing: border-box;
  margin: 20px 0 20px 0;
`;

const Subtitle = styled.div`
  width: 100%;
  border-bottom: 1px solid #ccc;
  margin-bottom: 14px;
`;

const HideButton = styled.span`
  color: #666;
  font-weight: bold;
  font-size: 26px;
  margin: 4px;
`;

const SubtitleNumber = styled.span`
  font-size: 26px;
  color: #0275d8;
  font-weight: bold;

  display: inline-block;
  margin: 4px;
`;

const SubtitleText = styled.span`
  font-size: 26px;
  color: #373a3c;

  display: inline-block;
  font-weight: bold;
  margin: 4px;
`;

const SubContents = styled.span`
  font-size: 14px;
  color: #373a3c;

  & li {
    margin-left: 20px;
    margin-bottom:20px;
  }

  & a{
    color:#0275d8;
    text-decoration: none;
  }
`;

export default Paragraph;