import React, { useState } from 'react';
import styled from 'styled-components';

const Input = ({ onCreate }) => {
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
  };

  return (
    <form>
      <InputWrap
        placeholder="name"
        onChange={handleChange}
        name="name"
        value={inputValue.name}
      />
      <InputWrap
        placeholder="phone"
        onChange={handleChange}
        name="phone"
        value={inputValue.phone}
      />
      <Submit onClick={handleSubmit}>Submit</Submit>
    </form>
  );
};

export default Input;

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
