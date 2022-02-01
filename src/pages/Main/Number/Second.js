import React from 'react';
import styled from 'styled-components';
import MyName from '../MyName';

const Second = () => {
  const name = 'lee yong woo';
  return (
    <Wrap>
      <h1>2번</h1>
      <Input type="text" />
      <div>hello {name}</div>
      <MyName />
    </Wrap>
  );
};

export default Second;

const Wrap = styled.div`
  border: 1px solid gray;
  padding: 100px;
`;

const Input = styled.input`
  border: 1px solid black;
`;
