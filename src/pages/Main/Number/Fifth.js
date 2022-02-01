import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import Input from '../Input/Input';
import InputList from '../Input/InputList';
let id = 0;

const Fifth = () => {
  const [information, setInformation] = useState([]);

  const handleCreate = useCallback(
    data => {
      return setInformation(
        information.concat({
          ...data,
          id: id++,
        })
      );
    },
    [information]
  );

  const handleUpdate = useCallback(
    (id, data) => {
      return setInformation(
        information.map(info => {
          if (info.id === id) {
            return {
              id,
              ...data,
            };
          }
          return info;
        })
      );
    },
    [information]
  );

  const handleRemove = useCallback(
    id => {
      setInformation(information.filter(user => user.id !== id));
    },
    [information]
  );

  console.log(information);
  return (
    <Wrap>
      <h1>5번</h1>
      <Input onCreate={handleCreate} />
      <InputList
        data={information}
        onRemove={handleRemove}
        onUpdata={handleUpdate}
      />

      {/* <p>{JSON.stringify(information)}</p> */}
    </Wrap>
  );
};

export default Fifth;

const Wrap = styled.div`
  border: 1px solid gray;
  padding: 100px;
`;
