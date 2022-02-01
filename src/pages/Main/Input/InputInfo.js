import React from 'react';
import styled from 'styled-components';

const InputInfo = ({ info, onRemove }) => {
  return (
    <Container>
      <div>
        <Text>name: {info.name}</Text>
        <Text>phone : {info.phone}</Text>
      </div>
      <button onClick={() => onRemove(info.id)}>remove</button>
    </Container>
  );
};

export default InputInfo;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  margin: 8px;
  border: 1px solid black;
`;

const Text = styled.p`
  margin: 4px 0;
  font-size: 20px;
`;
