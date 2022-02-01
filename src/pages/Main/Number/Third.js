import React, { useState } from 'react';
import styled from 'styled-components';

const Third = () => {
  const [counter, setCounter] = useState(0);

  const increaseCounterHandler = () => {
    return setCounter(prev => prev + 1);
  };

  const decreaseCounterHandler = () => {
    return setCounter(prev => prev - 1);
  };

  console.log(counter);

  return (
    <Wrap>
      <h1>3번</h1>
      <Title>카운터</Title>
      <Title>값: {counter}</Title>
      <Button onClick={increaseCounterHandler}>+</Button>
      <Button onClick={decreaseCounterHandler}>-</Button>
    </Wrap>
  );
};

export default Third;

const Wrap = styled.div`
  border: 1px solid gray;
  padding: 100px;
`;

const Title = styled.h1`
  margin: 30px 0;
  font-size: 50px;
  font-weight: 600;
`;

const Button = styled.button`
  margin-right: 10px;
  padding: 15px 50px;
  background-color: #eeeeee;
  font-size: 30px;
`;
