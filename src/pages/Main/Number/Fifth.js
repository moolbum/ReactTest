import React from 'react';
import styled from 'styled-components';
import Input from '../Input/Input';

const Fifth = () => {
  return (
    <Wrap>
      <h1>5번</h1>
      <Input />
    </Wrap>
  );
};

export default Fifth;

const Wrap = styled.div`
  border: 1px solid gray;
  padding: 100px;
`;
