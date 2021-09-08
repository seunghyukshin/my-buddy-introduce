import React from 'react';
import styled from 'styled-components';

const Index = (props) => {
  const {data} = props;

  return (
    <Container>
      <IndexHead>목차</IndexHead>
      {data.map(({subtitle}, i) => (
        <IndexText>
          <IndexNumber>{i + 1}.</IndexNumber> {subtitle}
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

const IndexNumber = styled.span`
  color: #0275d8;
`;

const IndexText = styled.span`
  color: #373a3c;
  font-size: 16px;
  display: block;
`;

export default Index;