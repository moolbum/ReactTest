import React, { useState } from 'react';
import styled from 'styled-components';
import Input from '../Input/Input';
let id = 0;

const Fifth = () => {
  const [information, setInformation] = useState([]);

  const handleCreate = data => {
    setInformation(
      information.concat({
        ...data,
        id: id++,
      })
    );
  };

  console.log(information);

  return (
    <Wrap>
      <h1>5번</h1>
      <Input onCreate={handleCreate} />
      {JSON.stringify(information)}
    </Wrap>
  );
};

export default Fifth;

const Wrap = styled.div`
  border: 1px solid gray;
  padding: 100px;
`;
