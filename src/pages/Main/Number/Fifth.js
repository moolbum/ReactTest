import React, { useState } from 'react';
import styled from 'styled-components';
import Input from '../Input/Input';
import InputList from '../Input/InputList';
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

  const handleRemove = id => {
    setInformation(information.filter(user => user.id !== id));
    console.log('remove>>>>', information);
  };

  return (
    <Wrap>
      <h1>5번</h1>
      <Input onCreate={handleCreate} />
      <InputList data={information} onRemove={handleRemove} />
      {/* <p>{JSON.stringify(information)}</p> */}
    </Wrap>
  );
};

export default Fifth;

const Wrap = styled.div`
  border: 1px solid gray;
  padding: 100px;
`;
