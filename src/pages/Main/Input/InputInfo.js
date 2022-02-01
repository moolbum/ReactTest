import React, { useState } from 'react';
import styled from 'styled-components';

const InputInfo = ({ info, onRemove, onUpdata }) => {
  const [editing, setEditing] = useState({
    editing: false,
    name: info.name,
    phone: info.phone,
  });

  const handleToggleEdit = () => {
    if (editing) {
      onUpdata(info.id, {
        name: editing.name,
        phone: editing.phone,
      });
    } else {
      setEditing({
        name: info.name,
        phone: info.phone,
      });
    }
    setEditing({
      ...editing,
      editing: !editing.editing,
    });
  };

  const handleChange = e => {
    const { value, name } = e.target;
    setEditing({
      ...editing,
      [name]: value,
    });
  };

  return (
    <Container>
      {editing.editing ? (
        <>
          name:
          <Input name="name" onChange={handleChange} value={editing.name} />
          phone:
          <Input name="phone" onChange={handleChange} value={editing.phone} />
        </>
      ) : (
        <>
          <Text>name: {info.name}</Text>
          <Text>phone : {info.phone}</Text>
        </>
      )}
      <ButtonWrap>
        <button onClick={() => onRemove(info.id)}>삭제</button>
        <button onClick={handleToggleEdit}>
          {editing.editing ? '적용' : '수정'}
        </button>
      </ButtonWrap>
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

const Input = styled.input`
  margin: 4px 0;
  font-size: 20px;
  border: 1px solid black;
`;

const ButtonWrap = styled.div`
  display: flex;
  flex-direction: column;
`;
