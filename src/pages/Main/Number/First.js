import React from 'react';
import styled from 'styled-components';

const First = () => {
  return (
    <Wrap>
      <h1>1번</h1>
    </Wrap>
  );
};

export default First;

const Wrap = styled.div`
  border: 1px solid gray;
  padding: 100px;
`;
