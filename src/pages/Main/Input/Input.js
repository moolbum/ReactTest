import React, { useState } from 'react';
import styled from 'styled-components';

const Input = () => {
  const [inputValue, setInputValue] = useState({
    name: '',
    phone: '',
  });

  const handleChange = e => {
    const { value, name } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  console.log(inputValue);

  return (
    <form>
      <InputWrap placeholder="이름" onChange={handleChange} name="name" />
      <InputWrap placeholder="전화번호" onChange={handleChange} name="phone" />
      <Text>이름 : {inputValue.name}</Text>
      <Text>전화번호 : {inputValue.phone}</Text>
    </form>
  );
};

export default Input;

const InputWrap = styled.input`
  margin: 15px 0;
  padding: 10px 40px;
  border: 1px solid black;
`;

const Text = styled.p`
  margin: 5px 0;
`;
