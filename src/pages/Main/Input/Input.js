import React, { useState, useRef } from 'react';
import styled from 'styled-components';

const Input = ({ onCreate }) => {
  const inputFocus = useRef();
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

  const handleSubmit = e => {
    e.preventDefault();
    onCreate(inputValue);

    setInputValue({
      name: '',
      phone: '',
    });
    inputFocus.current.focus();
  };

  return (
    <form>
      <InputWrap
        name="name"
        value={inputValue.name}
        onChange={handleChange}
        placeholder="이름"
        ref={inputFocus}
      />
      <InputWrap
        name="phone"
        value={inputValue.phone}
        onChange={handleChange}
        placeholder="전화번호"
      />
      <Submit onClick={handleSubmit}>제출</Submit>
    </form>
  );
};

export default React.memo(Input);

const InputWrap = styled.input`
  margin: 15px 5px;
  padding: 10px 40px;
  border: 1px solid black;
`;

const Submit = styled.button`
  padding: 10px 50px;
  margin: 5px 0;
  border-radius: 10px;
  color: white;
  background-color: black;
  font-size: 20px;
`;
