import React from 'react';
import styled from 'styled-components';

const Index = (props) => {
  const {data} = props;

  const onClickIndex = (i) => {
    window.location.hash=`paragraph_${i}`;
  }

  return (
    <Container>
      <IndexHead>목차</IndexHead>
      {data.map(({subtitle}, i) => (
        <IndexText>
          <IndexNumber onClick={() => onClickIndex(i)}>{i + 1}.</IndexNumber> {subtitle}
        </IndexText>  
      ))}
   </Container>
  );
}

const Container = styled.div`
  padding: 10px;
  border: 1px solid #ccc;
  align-self: flex-start;
  margin: 20px 0 20px 0;
`;

const IndexHead = styled.span`
  font-size: 20px;
  display: block;
  margin-bottom: 10px;
`;

const IndexNumber = styled.a`
  color: #0275d8;

  &:hover{
    cursor:pointer;
  }
`;

const IndexText = styled.span`
  color: #373a3c;
  font-size: 16px;
  display: block;
`;

export default Index;